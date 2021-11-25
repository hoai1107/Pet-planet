import Selector from "./Selector"
import { useAnimal } from "../../hooks/useAnimal";
import { Spinner } from "@chakra-ui/spinner";
import Result from "./Result";

const SearchPage = () => {
  const { data: types, isLoading: loading_types } = useAnimal({}, "/types");

  const { data: result, isLoading: loading_result , setParams } = useAnimal({limit: 9}, "/animals")
  
  if(loading_types){
    return <Spinner size="lg"/>
  }

  return(
    <> 
      <Selector data={types} setParams={setParams}/>
      <Result result={result} isLoading={loading_result}/>
    </>
  )
};

export default SearchPage;