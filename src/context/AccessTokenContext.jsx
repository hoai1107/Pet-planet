import { createContext, useContext, useState, useEffect} from "react";
import axios from 'axios';


const AccessTokenContext = createContext();

function AccessTokenProvider({children}){
  const [token, setToken] = useState("");

  function getNewToken(){
    axios.post("https://api.petfinder.com/v2/oauth2/token",{
      grant_type: "client_credentials",
      client_id: "W6V1X5rdeNEBWUENbqo9W9bb5akeXENm7kdQ7DVUUTXny5BU9N",
      client_secret: "nolMbHHfoJ7Esp8h8IiXm3NIOisJmn6uzikrbVyK"
    })
    .then(response => {
      const { access_token } = response.data;
      setToken(access_token); 
    })
    .catch(error => {
      console.log(error);
    })
  }

  useEffect(() => {
      getNewToken();
  }, []);

  // Make a loading page
  if(token === ""){
    return <h1>Loading ...</h1>
  }

  return(
    <AccessTokenContext.Provider value={{token, setToken, getNewToken}}>
      {children}
    </AccessTokenContext.Provider>
  )
};

function useAccessToken(){
  const context = useContext(AccessTokenContext);

  if(context === undefined) {
    throw new Error('useAccessToken must be used within a Provider!')
  }

  return context;
}

export { AccessTokenProvider, useAccessToken };