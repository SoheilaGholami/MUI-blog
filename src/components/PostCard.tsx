import {
  Avatar,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { CustomCard } from "../styles/Theme";
import Tag from "./tag/Tag";
import { FavoriteBorderRounded } from "@mui/icons-material";
import { PostType } from "../@types/post";

function PostCard({ post }: { post: PostType }) {
  const theme = useTheme();
  return (
    <>
      <CustomCard>
        <Stack padding={1}>
          <CardMedia
            sx={{
              bgcolor: theme.palette.background.default,
            }}
            component="img"
            height="123"
            image=""
            alt=""
          />
        </Stack>
        <CardContent>
          <Typography variant="h2" color={"black"}>
            {post.title}
          </Typography>
          <Typography variant="body1" color={theme.palette.secondary.main}>
            {post.description}
          </Typography>
          <Stack flexDirection={"row"}>
            {post.tags.map((item) => (
              <Tag tagName={item} />
            ))}
          </Stack>
        </CardContent>
        <CardHeader
          avatar={<Avatar aria-label="recipe"></Avatar>}
          action={
            <IconButton aria-label="settings">
              <Typography variant="body2" color={theme.palette.secondary.main}>
                25
              </Typography>
              <FavoriteBorderRounded />
            </IconButton>
          }
          titleTypographyProps={{
            variant: "subtitle1",
            color: theme.palette.secondary.dark,
          }}
          title="Shrimp and Chorizo Paella"
          subheaderTypographyProps={{ variant: "subtitle2" }}
          subheader="September 14, 2016"
        />
      </CustomCard>
    </>
  );
}

export default PostCard;
