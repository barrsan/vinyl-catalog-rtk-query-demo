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

export type Album = {
  id: number;
  title: string;
  cover_image: string;
};
