type Pagination = {
  page: number;
  pages: number;
  per_page: number;
  items: number;
  urls: {
    last: string;
    next: string;
  };
};

export type DiscogsApiResponse<T extends unknown[]> = {
  results: T;
  pagination: Pagination;
};

export type DiscogsApiAlbum = {
  id: number;
  title: string;
  cover_image: string;
};

export type Album = Omit<DiscogsApiAlbum, 'cover_image'> & {
  coverImage: string;
};
