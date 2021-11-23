import axios from 'axios';
import { useState } from 'react';
import useSWR from 'swr';
import { useAccessToken } from '../context/AccessTokenContext';

function useAnimal(p , url = "/"){
  const { token } = useAccessToken();

  const [params, setParam] = useState(p);

  const instance = axios.create({
    baseURL: 'https://api.petfinder.com/v2/animals',
    headers: {
      'Authorization': `Bearer ${token}`
    },
  });

  const fetcher = (url, params) => instance.get(url , {params: params})
  .then((response) => {
    return response.data;
  })
  .catch((error) =>{
    return error.response;
  })

  const { data, error } = useSWR([url, params], fetcher, {
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
