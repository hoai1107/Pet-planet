import { VStack } from "@chakra-ui/layout";
import Animal from "../components/Animals";
import Hero from "../components/Hero";
import MoreCard from "../components/MoreCard";

const Main = () => {
  return(
    <>
      <Hero />
      <VStack spacing={20} mb={36}>
        <Animal type="cat"/>
        <Animal type="dog"/>
        <MoreCard />
      </VStack>
    </>
  )
};

export default Main;