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
