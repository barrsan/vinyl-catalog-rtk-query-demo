import { memo } from 'react';
import {
  useAddFavoriteAlbumMutation,
  useRemoveFavoriteAlbumMutation,
} from '@/api/favoriteAlbumsApi';
import { Button, Card, CardBody, Image } from '@nextui-org/react';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';

type Props = {
  id: number;
  title: string;
  cover: string;
  isFavorite: boolean;
};

function VinylListItem({ id, title, cover, isFavorite }: Props) {
  const [addFavoriteAlbum] = useAddFavoriteAlbumMutation();
  const [removeFavoriteAlbum] = useRemoveFavoriteAlbumMutation();

  const handleLikeButtonClick = () => {
    if (isFavorite) {
      removeFavoriteAlbum(id);
    } else {
      addFavoriteAlbum({
        id,
        title,
        cover_image: cover,
      });
    }
  };

  return (
    <li className="mb-4">
      <Card className="w-full border-none" shadow="sm">
        <CardBody>
          <div className="grid grid-cols-4 items-center justify-center gap-6">
            <div className="relative col-span-1 col-start-1">
              <Image
                className="aspect-square w-48 object-cover"
                width={192}
                height={192}
                shadow="md"
                src={cover}
                alt={title}
              />
            </div>
            <div className="col-span-3 col-start-2 h-full">
              <div className="flex h-full flex-col">
                <div className="flex flex-grow flex-col justify-center">
                  {title}
                </div>
                <div className="text-right">
                  <Button
                    className="text-2xl"
                    color={isFavorite ? 'danger' : 'default'}
                    isIconOnly
                    onClick={handleLikeButtonClick}
                  >
                    {isFavorite ? <IoIosHeart /> : <IoIosHeartEmpty />}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </li>
  );
}

const memoizedVinylListItem = memo(VinylListItem);

export { memoizedVinylListItem as VinylListItem };
