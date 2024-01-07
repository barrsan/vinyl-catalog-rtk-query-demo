import { Button } from '@nextui-org/react';
import { IconType } from 'react-icons';

type Props = {
  icon: IconType;
  message: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

export function StatusMessage({
  icon: Icon,
  message,
  buttonText = '',
  onButtonClick = undefined,
}: Props) {
  const isButtonEnabled = !!onButtonClick;

  return (
    <>
      <Icon className="mb-4 h-12 w-12 text-gray-500" />
      <p className="text-sm text-gray-500">{message}</p>
      {isButtonEnabled && (
        <div className="mt-5">
          <Button size="sm" onClick={onButtonClick}>
            {buttonText}
          </Button>
        </div>
      )}
    </>
  );
}
