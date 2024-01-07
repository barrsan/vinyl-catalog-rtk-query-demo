import { albumsApi } from '@/api/albumsApi';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Album, DiscogsApiResponse } from '@/types';

type AlbumSearchState = {
  page: number;
  maxPage: number;
  searchString: string;
};

const initialState: AlbumSearchState = {
  page: 1,
  maxPage: 1,
  searchString: '',
};

const albumSearchSlice = createSlice({
  name: 'albumSearch',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSearchString: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload;
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      albumsApi.endpoints.fetchAlbums.matchFulfilled,
      (state, action: PayloadAction<DiscogsApiResponse<Album[]>>) => {
        state.page = action.payload.pagination.page;
        state.maxPage = action.payload.pagination.pages;
      },
    );
  },
});

export const { setPage, setSearchString } = albumSearchSlice.actions;

export default albumSearchSlice.reducer;
