import { Button } from "../../styles/Theme";

export type SimpleButtonProps = {
  buttonTitle: string;
  type?: "button" | "submit" | "reset" | undefined;
};
export const SimpleButton = ({ buttonTitle, type }: SimpleButtonProps) => {
  return <Button type={type}>{buttonTitle}</Button>;
};
