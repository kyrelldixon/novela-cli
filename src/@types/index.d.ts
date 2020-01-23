interface Social {
  url: string;
}

export interface Author {
  name: string;
  bio: string;
  avatar: string;
  featured?: boolean;
  slug?: string;
  social?: Social[];
}

export interface Post {
  title: string;
  slug?: string;
  author: string;
  date: string;
  hero: string;
  excerpt: string;
  subscription?: boolean;
  secret?: boolean;
}

export interface NovelaConfig {
  contentPosts: string | null;
  contentAuthors: string | null;
}
