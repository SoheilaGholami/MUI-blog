import { Button } from "../../styles/Theme";
import { ReactNode } from "react";

type IconButtonProps = {
  buttonTitle: string;
  icon: ReactNode;

  setOpenModal: any;
};
function IconButton(props: IconButtonProps) {
  return (
    <Button
      endIcon={props.icon}
      onClick={() => {
        props.setOpenModal(true);
      }}
    >
      {props.buttonTitle}
    </Button>
  );
}

export default IconButton;
