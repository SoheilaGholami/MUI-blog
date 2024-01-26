export type PostType = {
    title: string;
    description: string;
    tags: Array<string>;
  };
  export type PostContextType = {
    posts: PostType[];
    savePosts: (todo: PostType) => void;
    savePostsAsArray: (todo: PostType[]) => void;

  };