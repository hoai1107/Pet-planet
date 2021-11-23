import { Flex, Text } from "@chakra-ui/layout"
import { VStack } from "@chakra-ui/react";
import Icon from "@chakra-ui/icon";
import HeroPicture from "./HeroPicture";

const Hero = () => {
  return (
    <Flex 
      w="100%" 
      h={{base: "xl",sm:"lg"}} 
      align="center" 
      justify="center"
      my={4} 
      px={[0,"3rem","8rem"]} 
      flexDirection={{base: 'column', sm: 'row'}}
    >
      <VStack 
        w={{base:"md",sm:"xl"}} 
        p={[4,0]} 
        spacing={4} 
        mr={[0,10,20]} 
        mb={[20,0]}
      >
        <Text 
          w="100%" 
          fontSize={["2.5rem","3rem","3.5rem"]} 
          sx={{
            "font-family":"'Fredoka One', cursive;",
            "color": "#F6A9A9"
            }}
          textAlign="center"  
        >
          Want a cute pet?
        </Text>
        <Text fontSize={{base:"1.25rem",md:"1.5rem"}} textAlign="center">
          Here is the place you can find and adopt them! Many beautiful cats and dogs are waiting for new owners. Let pick one for your own 🐶. 
        </Text>
      </VStack>
      <Icon as={HeroPicture} width={["100","150","250"]} height={["200","250","350"]}/>
    </Flex>
  )
};

export default Hero;