import { Search } from "@mui/icons-material";
import { StyledSearchInput } from "../../styles/Theme";

function InputSearch() {
  return (
    <StyledSearchInput
      disableUnderline
      startAdornment={<Search />}
      placeholder="search"
    />
  );
}

export default InputSearch;
