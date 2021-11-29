import { Button } from "@chakra-ui/button";
import { Flex, HStack } from "@chakra-ui/layout";

const MyButton = (props) => {
  return (
    <Button size="lg" colorScheme="teal" w={32} onClick={() => props.onClick(props.offset)}>
      {props.text}
    </Button>
  )
};

const Pagination = ({totalPages, currentPage, setPage}) => {

  return (
    <Flex direction="row" justify="center" w="100%" mt={12}>
      <HStack spacing={10}>
        {currentPage === 1 ? null : <MyButton text="Previous" onClick={setPage} offset={-1}/>}
        {currentPage === totalPages? null: <MyButton text="Next" onClick={setPage} offset={1}/>}
      </HStack>
    </Flex>
  )
};

export default Pagination;