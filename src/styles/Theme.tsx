import {
  createTheme,
  styled,
  Button as BaseButton,
  Card,
  Input,
  Stack,
  Box,
  Chip,
} from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#4F73D0",
      dark: "#224DBA",
    },
    secondary: {
      main: "#9D9D9D",
      light: "#E7E7E7",
      dark: "#2D2D2D",
    },
    background: {
      default: "#C4C4C4",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    h2: {
      fontFamily: "Roboto",
      fontSize: "18px",
      fontWeight: "700",
      color: "black",
    },
    body1: {
      fontFamily: "Roboto",
      fontSize: "14px",
      fontWeight: "400",
    },
    subtitle1: {
      fontFamily: "Roboto",
      fontSize: "10px",
      fontWeight: "500",
    },
    subtitle2: {
      fontFamily: "Roboto",
      fontSize: "10px",
      fontWeight: "400",
    },
    body2: {
      fontFamily: "Roboto",
      fontSize: "12px",
      fontWeight: "400",
    },
    h6: {
      fontFamily: "Roboto",
      fontSize: "12px",
      fontWeight: "bold",
    },
    h1: {
      fontFamily: "Roboto",
      fontSize: "22px",
      fontWeight: "bold",
    },
  },
});

export const Button = styled(BaseButton)(
  () => `
  background-color: ${theme.palette.primary.main};
  color:white;
  padding:12px 16px;
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.08);
  font-size:14px;
  font-weight:700;
  border-radius:24px;
  display: flex;
  flex-direction: row,
  align-items: center,
  justify-content: center;
  min-width:0;
  gap:8px;
  border:0;
  &:hover {
    background-color: ${theme.palette.primary.main};
    box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.15);
    } 
  &:focus{
    background-color: ${theme.palette.primary.dark};
    box-shadow: 0;
  }`
);

export const StyledInput = styled(Input)(
  () => `
  width:100%;
  & input{width:100%;
  height:40px;
  outline: none;
  disableUnderline;
  padding:0 10px;
  background-color: #FDFDFD;
  color:${theme.palette.secondary.dark};
  border: 1px solid ${theme.palette.secondary.light};
  border-radius: ${theme.spacing(1)};
  &:hover {
    background-color: white;
    } 
  &:focus{
    border: 1px solid ${theme.palette.secondary.main};
  }}`
);
export const StyledSearchInput = styled(Input)(
  () => `
  width:25%;
  font-size: 14px;
  outline: none;
  disableUnderline;
  padding:5px 10px;
  background-color: white;
  color:${theme.palette.secondary.light};
  border: 1px solid ${theme.palette.secondary.light};
  border-radius: ${theme.spacing(3)};
  &:hover {
    border: 1px solid ${theme.palette.secondary.main};
    color:${theme.palette.secondary.main};
    } 
&:empty{
  color:${theme.palette.secondary.main};
}
 &:focus {
    color:${theme.palette.secondary.dark};
    }
  &:target {
    color:${theme.palette.secondary.dark};
  }`
);

export const CustomCard = styled(Card)(
  () => `
  border:1px solid ${theme.palette.secondary.light};
  width:100%;
  
  box-shadow:none; `
);

export const StyledTagInput = styled(Box)(
  () => `
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  
  height:40px;
  padding:0 10px;
  background-color: #FDFDFD;
  color:${theme.palette.secondary.dark};
  border: 1px solid ${theme.palette.secondary.light};
  border-radius: ${theme.spacing(1)};
  &:hover {
    background-color: white;
    } 
  
  `
);

export const CustomeChip = styled(Chip)(
  ({ theme }) => `
  border: 1px solid ${theme.palette.secondary.light};
  margin: ${theme.spacing(0, 0.5, 0, 0)};
  & span{
    color: ${theme.palette.secondary.main}
  }`
);
