import { FC, createContext, useEffect, useState } from "react";
import { PostContextType, PostType } from "../@types/post";

export const PostContext = createContext<PostContextType | null>(null);

const PostProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const data = localStorage.getItem("POSTS");

  const [posts, setPosts] = useState<PostType[]>(
    data === null || data === undefined ? [] : JSON.parse(data as string)
  );
  useEffect(() => {
    localStorage.setItem("POSTS", JSON.stringify(posts));
  }, [posts]);
  const savePosts = (post: PostType) => {
    const newPost: PostType = {
      title: post.title,
      description: post.description,
      tags: post.tags,
    };
    setPosts([...posts, newPost]);
  };

  const savePostsAsArray = (posts: PostType[]) => {
    setPosts(posts);
  };

  return (
    <PostContext.Provider value={{ posts, savePosts, savePostsAsArray }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
