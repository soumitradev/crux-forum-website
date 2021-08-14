import React from 'react';
import { Switch as HSwitch } from '@headlessui/react';

const variants = {
  cyan: 'bg-cyan',
  green: 'bg-green',
  red: 'bg-red',
  purple: 'bg-purple',
};

const sizes = {
  sm: {
    bg: 'h-[20px] w-[44px]',
    thumb: 'h-[17px] w-[17px]',
    active: 'translate-x-6',
  },
  md: {
    bg: 'h-[30px] w-[65px]',
    thumb: 'h-[27px] w-[27px]',
    active: 'translate-x-[34px]',
  },
};

interface SwitchProps {
  active: boolean;
  toggleActive: () => void;
  onChange: () => void;
  left?: React.ReactNode;
  right?: React.ReactNode;
  variant?: keyof typeof variants;
  size?: 'md' | 'sm';
}

const Switch: React.FC<SwitchProps> = ({
  active,
  left,
  right,
  toggleActive,
  onChange,
  variant = 'cyan',
  size = 'md',
}) => {
  return (
    <>
      <div className='flex gap-2 items-center'>
        {left ? left : null}
        <HSwitch
          checked={active}
          onChange={() => {
            toggleActive();
            onChange();
          }}
          className={`${active ? variants[variant] : 'bg-gray-accent'}
          relative inline-flex flex-shrink-0 ${
            sizes[size].bg
          }  border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className='sr-only'>Use setting</span>
          <span
            aria-hidden='true'
            className={`${active ? sizes[size].active : 'translate-x-0'}
            ${
              sizes[size].thumb
            } pointer-events-none inline-block  rounded-full bg-black shadow-lg transform ring-0 transition ease-in-out duration-200`}
          />
        </HSwitch>
        {right ? right : null}
      </div>
    </>
  );
};

export default Switch;
