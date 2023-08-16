type User = {
  id: string;
  username: string;
  avatar: string;
};
type Song = {
  id: string;
  name: string;
  url: string;
  image: string;
};
type Post = {
  id: string;
  user: User;
  description: string;
  song: Song;
  videoUrl: string;
  likesCount: number;
  commentCount: number;
  sharesCount: number;
};

export type { Post };
