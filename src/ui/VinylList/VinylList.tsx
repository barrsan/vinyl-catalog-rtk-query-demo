import { useAppSelector } from '@/store';

import { VinylListItem } from '@/ui/VinylList/VinylListItem';

import { Album } from '@/types';

type Props = {
  items?: Album[];
};

export function VinylList({ items = [] }: Props) {
  const { favoriteAlbumIds } = useAppSelector((state) => state.favoriteAlbums);

  return (
    <ul className="p-1">
      {items.map((item) => (
        <VinylListItem
          key={item.id}
          id={item.id}
          cover={item.cover_image}
          title={item.title}
          isFavorite={!!favoriteAlbumIds[item.id]}
        />
      ))}
    </ul>
  );
}
