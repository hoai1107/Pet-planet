import Selector from "./Selector"
import Result from "./Result";
import { FetchOptionsProvider } from "../../context/FetchOptionsContext";

const SearchPage = () => {
  return(
    <FetchOptionsProvider>
      <Selector />
      <Result />
    </FetchOptionsProvider> 
  )
};

export default SearchPage;