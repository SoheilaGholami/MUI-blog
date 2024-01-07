import { useFormContext } from "react-hook-form";
import { StyledInput } from "../../styles/Theme";

function InputDescripton() {
  const { register } = useFormContext();
  return <StyledInput disableUnderline {...register("description")} />;
}

export default InputDescripton;
