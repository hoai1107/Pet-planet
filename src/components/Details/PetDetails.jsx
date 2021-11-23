import { Heading, Box, VStack } from "@chakra-ui/layout";
import { Table, TableCaption, Tbody, Tr, Td } from "@chakra-ui/table";
import { useParams } from "react-router-dom";
import { useAnimal } from "../../hooks/useAnimal";
import ImageCarousel from "./ImageCarousel";

const _ = require("lodash");

function upper(str){
  return str.charAt(0).toUpperCase() + str.slice(1); 
}

function photoPicker(photos, size){
  const res = photos.reduce((prev, cur) => {
    prev.push(cur[size]);
    return prev;
  },[]);

  return res;
}

// function flattenObject(obj, parent ,res = {}){
//   for (let key in obj){
//     let fieldName = parent ? parent + '_' + key : key;
    
//     if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
//       flattenObject(obj[key], fieldName, res);
//     }else{
//       res[fieldName] = obj[key];
//     }
//   }

//   return res;
// }

const PetDetails = () => {
  const params = useParams();
  const { data, isLoading } = useAnimal({}, `/${params.id}`);
  
  
  if(isLoading){
    return <Heading>Loading ...</Heading>;
  }
  
  let pet = data.animal;

  let details = _.pick(pet, ['type', 'age', 'gender', 'size']);
  let fields = Object.keys(details);
  let photos = photoPicker(pet.photos, "medium");

  if(pet.breeds.mixed){
    details['breeds'] = pet.breeds.primary + " - " + pet.breeds.secondary;
  }else{
    details['breeds'] = pet.breeds.primary;
  }
  fields.push('breeds');


  return (
    <Box p={10}>
      <VStack spacing={20}>
        <Heading w="full" textAlign="center">
          {pet.name}
        </Heading>
        <ImageCarousel photos={photos}/>
        <Table variant="striped" colorScheme="yellow">
          <TableCaption>Pet Details</TableCaption>
          <Tbody>
            {fields.map(field => (
              <Tr>
                <Td fontWeight="bold">
                  {upper(field)}
                </Td>
                <Td>
                  {details[field]}
                </Td>
              </Tr>
              ))
            }
          </Tbody>
        </Table>
      </VStack>
    </Box>
  )
};

export default PetDetails;