import { createContext, useState, useContext } from "react";

const FetchOptionsContext = createContext();

function FetchOptionsProvider({children}){
  const [options, setOptions] = useState({
    params:{
      limit: 9,
      page: 1
    },
    path: "/animals",
  });


  return (
    <FetchOptionsContext.Provider value={{options, setOptions}}>
      {children}
    </FetchOptionsContext.Provider>
  )
}

function useFetchOptions(){
  const context = useContext(FetchOptionsContext)

  if(context === undefined){
    console.log("useFetchOptions must be used within a Provider");
  }

  return context;
}

export { FetchOptionsProvider, useFetchOptions };