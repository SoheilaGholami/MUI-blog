import { Container, Grid } from "@mui/material";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { useContext, useState } from "react";
import PostModal from "../components/PostModal";
import { PostContext } from "../context/postContext";
import { PostContextType, PostType } from "../@types/post";

function Blog() {
  const [openModal, setOpenModal] = useState(false);
  const { posts } = useContext(PostContext) as PostContextType;
  return (
    <Container maxWidth="lg">
      <PostModal open={openModal} setOpenModal={setOpenModal} />
      <Header setOpenModal={setOpenModal} />
      <Grid container spacing={2} marginTop={0}>
        {posts.map((post: PostType) => (
          <Grid item xs={6} md={3}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Blog;
