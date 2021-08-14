import React from 'react';
import { RadioGroup } from '@headlessui/react';

const colors = {
  cyan: 'bg-cyan',
  green: 'bg-green',
  red: 'bg-red',
  purple: 'bg-purple',
};

interface RadioButtonProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  value: string | number;
  color?: keyof typeof colors;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  left,
  right,
  value,
  color = 'cyan',
}) => {
  return (
    <div className='flex gap-4 items-center mb-2'>
      {left && (
        <RadioGroup.Label htmlFor={value.toString()}>{left}</RadioGroup.Label>
      )}
      <RadioGroup.Option className='border-transparent' value={value}>
        {({ checked }) => (
          <div
            id={value.toString()}
            className={`flex items-center justify-center cursor-pointer h-4 w-4 ring-offset-0 ring-2 border-transparent text-transparent ring-cyan rounded-full`}
          >
            <div
              className={`h-3 w-3 rounded-full  ${
                checked ? colors[color] : 'bg-transparent'
              }`}
            />
          </div>
        )}
      </RadioGroup.Option>
      {right && <RadioGroup.Label>{right}</RadioGroup.Label>}
    </div>
  );
};

export default RadioButton;
