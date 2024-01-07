import { memo } from 'react';

function Header() {
  return (
    <header className="w-full py-8 text-center">
      <h1 className="text-5xl font-extrabold">Vinyl Catalog</h1>
    </header>
  );
}

const memoizedHeader = memo(Header, () => true);

export { memoizedHeader as Header };
