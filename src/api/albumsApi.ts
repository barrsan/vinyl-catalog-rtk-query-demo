import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_API_URL_DISCOGS } from '@/constants';

import { Album, DiscogsApiResponse } from '@/types';

type SearchResponse = DiscogsApiResponse<Album[]>;

export const albumsApi = createApi({
  reducerPath: 'albumsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL_DISCOGS,
  }),
  endpoints: (build) => ({
    fetchAlbums: build.query<SearchResponse, { q: string; page: number }>({
      query: ({ q, page }) => ({
        url: 'database/search',
        params: {
          type: 'master',
          token: import.meta.env.VITE_DISCOGS_API_TOKEN,
          q,
          page,
        },
      }),
      serializeQueryArgs({ queryArgs }) {
        const { q } = queryArgs;
        return { q };
      },
      merge(currentCache, newItems) {
        const currPage = +(currentCache.pagination?.page ?? 1);
        const nextPage = +(newItems.pagination?.page ?? 1);

        currentCache.pagination = newItems.pagination;

        if (currPage < nextPage) {
          currentCache.results.push(...newItems.results);
          return;
        }

        currentCache.results = newItems.results;
      },
      forceRefetch({ currentArg, previousArg }) {
        return (
          currentArg?.q !== previousArg?.q ||
          currentArg?.page !== previousArg?.page
        );
      },
    }),
  }),
});

export const { useFetchAlbumsQuery } = albumsApi;
