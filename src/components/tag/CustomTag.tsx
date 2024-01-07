import { Typography } from "@mui/material";
import { CustomeChip, theme } from "../../styles/Theme";

type CustomTagProps = {
  tagName: string | number;
  tags: string[];
  setTags: any;
};

function CustomTag({ tagName, tags, setTags }: CustomTagProps) {
  return (
    <CustomeChip
      sx={{
        ":hover": {
          borderColor: theme.palette.secondary.dark,
        },
        ":hover span": {
          borderColor: theme.palette.secondary.dark,
          color: theme.palette.secondary.dark,
        },
        ":hover svg": {
          fill: theme.palette.secondary.dark,
        },
      }}
      label={tagName}
      variant="outlined"
      onDelete={() => setTags(tags.filter((item) => item !== tagName))}
    />
  );
}

export default CustomTag;
