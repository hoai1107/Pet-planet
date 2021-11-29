import { SimpleGrid } from "@chakra-ui/layout";
import { useFetchOptions } from "../../context/FetchOptionsContext";
import { useAnimal } from "../../hooks/useAnimal";
import Card from "../Card";
import { useEffect } from "react";
import Pagination from "./Pagination";

const Result = () => {
  const { options, setOptions } = useFetchOptions();
  const { data, isLoading, setParams } = useAnimal(options.params, options.path)

  const setPage = (offset) => {
    setOptions({
      ...options,
      params:{
        ...options.params,
        page: options.params.page + offset
      }
    })
  }

  useEffect(() => {
    setParams(options.params)
    //eslint-disable-next-line
  }, [options])

  if(isLoading){
    return <div>Loading ...</div>
  }

  let petList = data.animals;
  let {current_page, total_pages} = data.pagination;

  return (
    <>
      <SimpleGrid 
        columns={{base: 1, sm: 2, md: 3}} 
        spacing={8}
        justifyItems="center"
        alignItems="center"
      >
        {
          petList.map(pet => (
            <Card key={pet.id} pet={pet}/>
          ))
        }
      </SimpleGrid>
      <Pagination totalPages={total_pages} currentPage={current_page} setPage={setPage}/>
    </>
  )
};

export default Result;