// Base url: https://api.petfinder.com/v2/animals
// Header: { Authorization: Bearer {access_token} }
// Params: an object of multiple params: type, breeds,...

import axios from 'axios';
import useSWR from 'swr';
import { useAccessToken } from '../data/AccessTokenContext';


function useAnimal(params){
  const { token, getNewToken } = useAccessToken();

  const instance = axios.create({
    baseURL: 'https://api.petfinder.com/v2/animals',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    method: 'GET'
  });

  const fetcher = async (params) => {
    try {
      var response = await instance.request("/", {params: params});
      return response.data;
    } 
    catch (error) {
      console.log(error);
      return error.response;
    }
  }

  const { data, error } = useSWR(params, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });


  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
};

export { useAnimal };
