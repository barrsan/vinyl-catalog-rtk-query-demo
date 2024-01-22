import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_API_URL_LOCALHOST } from '@/constants';

import { Album } from '@/types';

export const favoriteAlbumsApi = createApi({
  reducerPath: 'favoriteAlbumsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL_LOCALHOST,
  }),
  tagTypes: ['FavoriteAlbums'],
  endpoints: (build) => ({
    fetchFavoriteAlbums: build.query<Album[], void>({
      query: () => 'favorites',
      providesTags: () => ['FavoriteAlbums'],
    }),
    addFavoriteAlbum: build.mutation<Album, Album>({
      query: (album: Album) => ({
        url: 'favorites',
        method: 'POST',
        body: album,
      }),
      invalidatesTags: () => ['FavoriteAlbums'],
    }),
    removeFavoriteAlbum: build.mutation<Album, number>({
      query: (albumId) => ({
        url: `favorites/${albumId}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => ['FavoriteAlbums'],
    }),
  }),
});

export const {
  useFetchFavoriteAlbumsQuery,
  useAddFavoriteAlbumMutation,
  useRemoveFavoriteAlbumMutation,
} = favoriteAlbumsApi;
