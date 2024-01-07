import { ChangeEvent, memo, useCallback, useEffect, useState } from 'react';
import { setSearchString, useAppDispatch } from '@/store';
import { Input } from '@nextui-org/react';
import { useDebounce } from 'usehooks-ts';

type Props = {
  initialValue?: string;
};

function SearchInput({ initialValue = '' }: Props) {
  const dispatch = useAppDispatch();

  const [isChanged, setIsChanged] = useState(false);
  const [inputValue, setInputValue] = useState(() => initialValue);

  const debouncedSearchString = useDebounce(inputValue, 1000);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsChanged(true);
  }, []);

  useEffect(() => {
    if (isChanged) {
      dispatch(setSearchString(debouncedSearchString));
    }
  }, [debouncedSearchString, isChanged, dispatch]);

  return (
    <Input
      name="artist"
      placeholder="Type artist name"
      size="md"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}

const memoizedSearchInput = memo(SearchInput);
export { memoizedSearchInput as SearchInput };
