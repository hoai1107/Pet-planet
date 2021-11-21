import { Button } from '@chakra-ui/button';
import { useAnimal } from '../hooks/useAnimals';

const Animal = () => {
  var options = {
    type: "cat",
    page: 5
  };

  const { data, isLoading, isError } = useAnimal(options);

  console.log(data);

  return (
    <Button>
      Test API
    </Button>
  )
};

export default Animal;