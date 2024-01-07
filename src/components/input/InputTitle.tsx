import { useFormContext } from "react-hook-form";
import { StyledInput } from "../../styles/Theme";

function InputTitle() {
  const { register } = useFormContext();

  return <StyledInput disableUnderline {...register("title")} />;
}

export default InputTitle;
