import { Button } from "@chakra-ui/button";
import { Text, SimpleGrid, VStack, Flex } from "@chakra-ui/layout";
import { useForm, useWatch } from "react-hook-form";
import { useFetchOptions } from "../../context/FetchOptionsContext";
import { useAnimal } from "../../hooks/useAnimal";
import Field from "./Field";

const types = ["Dog","Cat","Rabbit","Small & Furry","Horse","Bird","Scales, Fins & Other","Barnyard"];

function getNames(breeds){
  let res = breeds.reduce((prev, cur) => {
    prev.push(cur.name);
    return prev;
  },[]);

  return res;
}

const Selector = () => {
  // Form control
  const { register, control, handleSubmit } = useForm();
  const { setOptions } = useFetchOptions();

  const type = useWatch({
    control,
    name:"type",
    defaultValue: "dog"
  });

  const breedsPath = `/types/${type}/breeds`;
  const { data, isLoading: loading_breeds } = useAnimal({}, breedsPath);

  function onSubmit(data){
    setOptions({
      params:{...data, limit: 9, page: 1},
      path: "/animals"
    });
  }

  
  return (
    <Flex spacing={10} width="full" direction="column">
      <Text fontSize="3rem" as="u" width="full" textAlign="center" marginBottom={10}>
        Find pets
      </Text>

      <form onSubmit={handleSubmit(onSubmit)} width="full">
        <VStack spacing={10} width="full" marginBottom={10}>
          <SimpleGrid columns={{base: 1, md: 3}} width="full" spacing={10}>
            <Field 
              id="type" 
              options={types} 
              register={register} 
              name="type"
            />
            
            <Field 
              name="breed" 
              isDisabled={loading_breeds} 
              register={register} 
              options={data ? getNames(data.breeds) : []}
              defaultValue=""
            />

            <Field 
              options={['Male', 'Female']} 
              name="gender" 
              register={register} 
            />
          </SimpleGrid>

          <Button type="submit" size="lg" colorScheme="blue">
            Search
          </Button>
        </VStack>
      </form>
    </Flex>
  )
}

export default Selector;