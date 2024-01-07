import { PropsWithChildren } from 'react';
import { Card, CardBody } from '@nextui-org/react';
import clsx from 'clsx';

type Props = PropsWithChildren<{
  isFullHeight?: boolean;
}>;

export function VinylTabContent({ children, isFullHeight = true }: Props) {
  return (
    <Card
      className={clsx({
        'h-full': isFullHeight,
        'h-auto': !isFullHeight,
      })}
    >
      <CardBody className="h-px">{children}</CardBody>
    </Card>
  );
}
