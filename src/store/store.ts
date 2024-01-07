import { albumsApi } from '@/api/albumsApi';
import { favoriteAlbumsApi } from '@/api/favoriteAlbumsApi';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import albumSearch from './slices/albumSearch';
import favoriteAlbums from './slices/favoriteAlbums';

export const store = configureStore({
  reducer: {
    albumSearch,
    favoriteAlbums,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [favoriteAlbumsApi.reducerPath]: favoriteAlbumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      albumsApi.middleware,
      favoriteAlbumsApi.middleware,
    ),
  devTools: import.meta.env.DEV,
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
