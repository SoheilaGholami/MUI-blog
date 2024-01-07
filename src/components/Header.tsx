import { Stack } from "@mui/material";
import IconButton from "./button/IconButton";
import { AddCircle } from "@mui/icons-material";
import InputSearch from "./input/InputSearch";

type HeaderProps = {
  setOpenModal: any;
};
function Header(props: HeaderProps) {
  return (
    <Stack
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      marginTop={"100px"}
    >
      <InputSearch />
      <IconButton
        buttonTitle="Add new post"
        icon={<AddCircle />}
        setOpenModal={props.setOpenModal}
      />
    </Stack>
  );
}

export default Header;
