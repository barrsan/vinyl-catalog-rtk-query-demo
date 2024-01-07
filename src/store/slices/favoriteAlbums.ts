import { favoriteAlbumsApi } from '@/api/favoriteAlbumsApi';
import { createSlice } from '@reduxjs/toolkit';

type FavoriteAlbumsState = {
  favoriteAlbumIds: Record<number, number>;
};

const initialState: FavoriteAlbumsState = {
  favoriteAlbumIds: {},
};

const favoriteAlbumsSlice = createSlice({
  name: 'favoriteAlbums',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      favoriteAlbumsApi.endpoints.fetchFavoriteAlbums.matchFulfilled,
      (state, action) => {
        state.favoriteAlbumIds = action.payload.reduce(
          (acc, album) => {
            acc[album.id] = album.id;
            return acc;
          },
          {} as Record<number, number>,
        );
      },
    );
  },
});

export default favoriteAlbumsSlice.reducer;
