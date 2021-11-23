import { Container } from "@chakra-ui/layout";
import PetDetails from "../components/Details/PetDetails";

const Details = () => {
  return (
    <Container my={20} border="1px" maxW="container.lg">
      <PetDetails />
    </Container>
  )
};

export default Details;