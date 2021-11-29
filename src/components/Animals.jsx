import Icon from '@chakra-ui/icon';
import { SimpleGrid, Flex, VStack, Box, HStack, Text } from '@chakra-ui/layout';
import { useState } from 'react';
import { useAnimal } from '../hooks/useAnimal';
import Card from './Card';
import { FaCat, FaDog } from "react-icons/fa";
import { Spinner } from '@chakra-ui/react';

const _ = require('lodash');

function upper(str){
  return str.charAt(0).toUpperCase() + str.slice(1); 
}

const Animal = (props) => {
  const [options, setOptions] = useState({type: props.type, page: 5, limit: 4});
  const { data, isLoading } = useAnimal(options, "/animals");

  if(isLoading){
    return (
      <Spinner size="xl"/>
    )
  };

  const pet_list = data.animals.map(el => {
    let pet = _.pick(el, ['id', 'type', 'breeds', 'age', 'gender', 'size', 'description','photos', 'contact', 'name', 'primary_photo_cropped']);

    return pet;
  });

  return (
    <VStack spacing={8}>
      <Box>
        <HStack spacing={8}>
          <Icon as={props.type === "cat" ? FaCat : FaDog} w={16} h={16} sx={{"color":"#0F2C67"}}/>
          <Text fontSize="3rem" sx={{
            "font-family": "'Pacifico', cursive",
            "color" : "#0F2C67"
          }}>
            {upper(props.type)}
          </Text>
        </HStack>
      </Box>
      <Flex justify="center" w="full">
        <SimpleGrid
          minChildWidth="250px" 
          //columns={{base: 1,sm: 2, md: 4}}
          w={{base: "full", "md": "1500px"}}
          justifyItems="center"
          alignItems="center"
          px={{base: 9, md: 28}}
          spacingX={{md: "28px"}}
          spacingY={8}
        >
          {
            pet_list.map(pet => (
              <Card key={pet.id} pet={pet}/>
            ))
          }
        </SimpleGrid>
      </Flex>
    </VStack>
  )
};

export default Animal;