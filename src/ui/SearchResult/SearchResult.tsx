import { useEffect, useRef } from 'react';
import { useFetchAlbumsQuery, useLazyFetchAlbumsQuery } from '@/api/albumsApi';
import { setPage, useAppDispatch, useAppSelector } from '@/store';
import clsx from 'clsx';
import { IoIosWarning, IoMdSearch } from 'react-icons/io';

import { FluidContainer } from '@/ui/FluidContainer';
import { Loader } from '@/ui/Loader';
import { LoadMoreButton } from '@/ui/LoadMoreButton';
import { StatusMessage } from '@/ui/StatusMessage';
import { VinylList } from '@/ui/VinylList';

export function SearchResult() {
  const resultsListRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();
  const { searchString, page, maxPage } = useAppSelector(
    (state) => state.albumSearch,
  );

  const { data, isFetching, isLoading, isError } = useFetchAlbumsQuery({
    page,
    q: searchString,
  });
  const [fetchAlbums] = useLazyFetchAlbumsQuery();

  const isEnd = page >= maxPage;
  const isEmpty = !data?.results.length;

  useEffect(() => {
    resultsListRef.current?.scrollTo(0, 0);
  }, [searchString]);

  const handleLoadMoreButtonClick = () => {
    dispatch(setPage(page + 1));
  };

  const handleTryAgainButtonClick = () => {
    fetchAlbums({ page, q: searchString });
  };

  if ((isFetching && page === 1) || isLoading) {
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
    <div
      ref={resultsListRef}
      className={clsx('overflow-y-auto', {
        'flex-1': isEmpty,
      })}
    >
      {isEmpty ? (
        <FluidContainer>
          <StatusMessage message="No results" icon={IoMdSearch} />
        </FluidContainer>
      ) : (
        <>
          <VinylList items={data?.results} />
          <LoadMoreButton
            isEnd={isEnd}
            isLoading={isFetching}
            onClick={handleLoadMoreButtonClick}
          />
        </>
      )}
    </div>
  );
}
