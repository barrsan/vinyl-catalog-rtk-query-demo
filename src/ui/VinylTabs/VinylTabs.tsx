import { useAppSelector } from '@/store';
import { Tab, Tabs } from '@nextui-org/react';

import { Favorites } from '@/ui/Favorites';
import { SearchInput } from '@/ui/SearchInput';
import { SearchResult } from '@/ui/SearchResult';

import { VinylTabContent } from './VinylTabContent';

export function VinylTabs() {
  const { searchString } = useAppSelector((state) => state.albumSearch);

  return (
    <Tabs aria-label="Vinyls" size="md">
      <Tab className="h-5/6" key="Albums" title="Albums">
        <VinylTabContent>
          <div className="mb-4 p-1">
            <SearchInput initialValue={searchString} />
          </div>
          <SearchResult />
        </VinylTabContent>
      </Tab>
      <Tab className="h-5/6" key="Likes" title="Likes">
        <VinylTabContent>
          <Favorites />
        </VinylTabContent>
      </Tab>
    </Tabs>
  );
}
