import { FC, createContext, useState } from "react";
import { PostContextType, PostType } from "../@types/post";

export const PostContext = createContext<PostContextType | null>(null);

const PostProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const savePosts = (post: PostType) => {
    const newPost: PostType = {
      title: post.title,
      description: post.description,
      tags: post.tags,
    };
    setPosts([...posts, newPost]);
  };

  return (
    <PostContext.Provider value={{ posts, savePosts }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
