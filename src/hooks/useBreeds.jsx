import { useAnimal } from "./useAnimal"

function getNames(breeds){
  let res = breeds.reduce((prev, cur) => {
    prev.push(cur.name);
    return prev;
  },[]);

  return res;
}

function useBreeds(type){
  const { data, isLoading, isError } = useAnimal({}, `/types/${type}/breeds`);

  return {
    data: data ? getNames(data.breeds) : [],
    isLoading,
    isError
  }
};

export { useBreeds };