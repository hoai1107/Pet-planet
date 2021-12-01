import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { useNavigate } from "react-router";

const MoreCard = () => {
  let navigate = useNavigate();

  return (
  <Box>
    <Button colorScheme="teal" size="lg"
      onClick={() => navigate("/Pet-planet/pets")}
    >
      Click here to find more pets!
    </Button>
  </Box>
  )
};

export default MoreCard;