import { CustomeChip } from "../../styles/Theme";

type TagProps = {
  tagName: string | number;
};

function Tag({ tagName }: TagProps) {
  return <CustomeChip label={tagName} variant="outlined" />;
}

export default Tag;
