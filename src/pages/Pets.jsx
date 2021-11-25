import { Container } from "@chakra-ui/layout"
import SearchPage from "../components/Selection/SearchPage";

const Pets = () => {
  
  return (
    <Container my={20} maxW="container.lg">
      <SearchPage />
    </Container>
  )
};

export default Pets;