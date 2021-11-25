import { SimpleGrid } from "@chakra-ui/layout";
import Card from "../Card";

const Result = ({result, isLoading}) => {
  
  if(isLoading){
    return <div>Loading ...</div>
  }

  const petList = result.animals;

  // Build pagination
  const pagination = result.pagination;

  return (
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
  )
};

export default Result;