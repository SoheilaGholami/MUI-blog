import { Button, Input, Stack } from "@mui/material";

import { StyledTagInput, theme } from "../../styles/Theme";
import { useState } from "react";
import CustomTag from "../tag/CustomTag";
import { useFormContext } from "react-hook-form";
function InputTag() {
  const { setValue } = useFormContext();

  const [tags, setTags] = useState<Array<string>>([]);

  const [tagValue, setTagValue] = useState("");
  return (
    <>
      <StyledTagInput
        sx={
          tagValue
            ? { borderColor: theme.palette.secondary.dark }
            : { borderColor: theme.palette.secondary.light }
        }
      >
        <Input
          value={tagValue}
          disableUnderline
          fullWidth
          onChange={(e) => {
            setTagValue(e.target.value);
          }}
        />

        <Button
          onClick={() => {
            const tagArray = [...tags, tagValue];
            setTags(tagArray);
            setValue("tags", tagArray);
            setTagValue("");
          }}
          disabled={tagValue ? false : true}
          sx={{ color: theme.palette.primary.main, fontWeight: "bold" }}
        >
          Add+
        </Button>
      </StyledTagInput>
      <Stack
        display={"Flex"}
        flexDirection={"row"}
        marginTop={theme.spacing(1)}
      >
        {tags.map((tag) => (
          <CustomTag tagName={tag} tags={tags} setTags={setTags} />
        ))}
      </Stack>
    </>
  );
}

export default InputTag;
