import { useFetchFavoriteAlbumsQuery } from '@/api/favoriteAlbumsApi';
import { IoIosWarning, IoMdHeartEmpty } from 'react-icons/io';

import { FluidContainer } from '@/ui/FluidContainer';
import { Loader } from '@/ui/Loader';
import { StatusMessage } from '@/ui/StatusMessage';
import { VinylList } from '@/ui/VinylList';

export function Favorites() {
  const {
    data,
    isLoading,
    isError,
    refetch: refetchFavoriteAlbums,
  } = useFetchFavoriteAlbumsQuery();

  const handleTryAgainButtonClick = () => {
    refetchFavoriteAlbums();
  };

  if (isLoading) {
    return (
      <div className="flex-1 overflow-y-auto">
        <FluidContainer>
          <Loader />
        </FluidContainer>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex-1 overflow-y-auto">
        <FluidContainer>
          <StatusMessage
            message="Something went wrong"
            icon={IoIosWarning}
            buttonText="Try again"
            onButtonClick={handleTryAgainButtonClick}
          />
        </FluidContainer>
      </div>
    );
  }

  return (
    <div className="min-h-full overflow-y-auto">
      {!data?.length ? (
        <FluidContainer>
          <StatusMessage
            message="No favorite albums yet"
            icon={IoMdHeartEmpty}
          />
        </FluidContainer>
      ) : (
        <VinylList items={data} />
      )}
    </div>
  );
}
