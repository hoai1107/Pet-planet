import { FormLabel } from "@chakra-ui/form-control";
import { VStack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select"

function upper(str){
  return str.charAt(0).toUpperCase() + str.slice(1); 
}

const Field = ({register, name, options, ...rest}) => {
  return (
    <VStack>
      <FormLabel htmlFor={name}>{upper(name)}</FormLabel>
      <Select {...register(name)} {...rest} id={name}>
        {
          options.map(opt => (
            <option value={opt.toLowerCase()}>{opt}</option>
          ))
        }
      </Select>
    </VStack>
  )
};

export default Field;