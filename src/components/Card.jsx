import { Image } from "@chakra-ui/image";
import { Box, Flex, Text, VStack } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import NoImg from "../styles/no-photos.png";

function photoPicker(photos, size){
  const res = photos.reduce((prev, cur) => {
    prev.push(cur[size]);
    return prev;
  },[]);

  return res;
}

const Card = (props) => {
  const pet = props.pet;
  const photos = pet.photos;

  const photo_medium = photoPicker(photos, "medium");

  return (
    <Box w={["200px","250px"]} h={["330px","400px"]} borderRadius="20px" shadow="lg">
      <Link to={`/pets/${pet.id}`}>
        <Flex direction="column" h="full">
          
          <Box h={["200px","250px"]}>
            <Image src={photo_medium[0]} alt="Card image" fallbackSrc={NoImg} boxSize={["200px","250px"]} fit="fill" borderTopRadius="20px"/>
          </Box>
          
          <VStack w="full" h="full" pt={[4,6]}>
            <Text fontSize="20px" isTruncated w="full" px={4} textAlign="center">
              {pet.name}
            </Text>
            <Tag colorScheme="orange">
              {pet.type}
            </Tag>
            <Tag colorScheme="pink">
              {pet.breeds.primary}
            </Tag>
          
          </VStack>
        </Flex>
      </Link>
    </Box>
  );
};

export default Card;