import { memo } from 'react';

function Loader() {
  return (
    <div className="h-6 w-6 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500" />
  );
}

const memoizedLoader = memo(Loader, () => true);

export { memoizedLoader as Loader };
