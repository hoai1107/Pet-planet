import { Button } from "@chakra-ui/button";
import { Text, SimpleGrid, VStack, Flex } from "@chakra-ui/layout";
import { useForm, useWatch } from "react-hook-form";
import { useBreeds } from "../../hooks/useBreeds";
import Field from "./Field";

const Selector = (props) => {
  let { types } = props.data;

  let typesList = types.reduce((prev, cur) => {
    prev.push(cur.name)
    return prev;
  },[]);

  // Form control
  const { register, control, handleSubmit } = useForm();

  const type = useWatch({
    control,
    name:"type",
    defaultValue: "dog"
  });

  const { data: breeds, isLoading: loading_breeds } = useBreeds(type);

  function onSubmit(data){
    props.setParams({...data, limit: 9});
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
              options={typesList} 
              register={register} 
              name="type"
            />
            
            <Field 
              placeholder="Breed" 
              name="breed" 
              isDisabled={loading_breeds} 
              register={register} 
              options={breeds}
            />

            <Field 
              options={['Male', 'Female']} 
              name="gender" 
              register={register} 
              defaultValue="Male"
            />
          </SimpleGrid>

          <Button type="submit" size="lg">
            Search
          </Button>
        </VStack>
      </form>
    </Flex>
  )
}

export default Selector;