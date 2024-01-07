import { NextUIProvider } from '@nextui-org/react';

import { Header } from '@/ui/Header';
import { VinylTabs } from '@/ui/VinylTabs';

export function Root() {
  return (
    <NextUIProvider className="h-full">
      <div className="flex h-full w-full flex-col">
        <Header />
        <main className="mx-auto h-full w-3/4 min-w-60 pt-6 lg:w-1/2">
          <VinylTabs />
        </main>
      </div>
    </NextUIProvider>
  );
}
