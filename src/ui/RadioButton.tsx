import React from 'react';
import { RadioGroup } from '@headlessui/react';

interface RadioButtonProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  value: string | number;
}

const RadioButton: React.FC<RadioButtonProps> = ({ left, right, value }) => {
  return (
    <div className='flex gap-4 items-center mb-2'>
      {left && (
        <RadioGroup.Label htmlFor={value.toString()}>{left}</RadioGroup.Label>
      )}
      <RadioGroup.Option value={value}>
        {({ checked }) => (
          <>
            <div
              id={value.toString()}
              className='ring-2 ring-cyan flex items-center justify-center cursor-pointer h-4 w-4 rounded-full'
            >
              {checked && <div className='h-4 w-4 rounded-full bg-cyan'></div>}
            </div>
          </>
        )}
      </RadioGroup.Option>
      {right && <RadioGroup.Label>{right}</RadioGroup.Label>}
    </div>
  );
};

export default RadioButton;

{
  /* <span
              className={`h-3 w-3 ${checked ? 'bg-cyan' : 'bg-transparent'}`}
            ></span> */
}
