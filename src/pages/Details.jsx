import { Container } from "@chakra-ui/layout";
import PetDetails from "../components/Details/PetDetails";

const Details = () => {
  return (
    <Container my={20} maxW="container.lg">
      <PetDetails />
    </Container>
  )
};

export default Details;