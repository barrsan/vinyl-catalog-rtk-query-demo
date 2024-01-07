import { Button } from '@nextui-org/react';

import { Loader } from '@/ui/Loader';

type Props = {
  isEnd: boolean;
  isLoading: boolean;
  onClick: () => void;
};

export function LoadMoreButton({ isEnd, isLoading, onClick }: Props) {
  if (isEnd && !isLoading) {
    return null;
  }

  return (
    <div className="flex h-10 justify-center">
      {isLoading ? (
        <Loader />
      ) : (
        <Button size="md" color="primary" onClick={onClick}>
          Load more
        </Button>
      )}
    </div>
  );
}
