import { PropsWithChildren } from 'react';
import clsx from 'clsx';

type Props = PropsWithChildren<{
  isCentered?: boolean;
}>;

export function FluidContainer({ children, isCentered = true }: Props) {
  return (
    <div
      className={clsx(['h-full w-full', 'flex flex-col'], {
        'items-center justify-center': isCentered,
      })}
    >
      {children}
    </div>
  );
}
