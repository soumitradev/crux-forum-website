import React from 'react';
import { Switch as HSwitch } from '@headlessui/react';

const variants = {
  cyan: 'bg-cyan',
  green: 'bg-green',
  red: 'bg-red',
  purple: 'bg-purple',
};

const sizes = {
  sm: 'h-5 w-10',
  md: 'h-7 w-14',
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
          className={`${
            active ? variants[variant] : 'bg-gray-accent'
          } relative inline-flex items-center rounded-full ${sizes[size]}`}
        >
          <span className='sr-only'>Toggle Theme</span>
          {size === 'md' ? (
            <span
              className={`${variant === 'cyan' ? 'bg-gray-900' : 'bg-white'} ${
                active ? 'translate-x-8' : 'translate-x-1'
              } inline-block w-4 h-4 transform rounded-full transition-all duration-100 ease-out`}
            />
          ) : (
            <span
              className={`${variant === 'cyan' ? 'bg-gray-900' : 'bg-white'} ${
                active ? 'translate-x-6' : 'translate-x-1'
              } inline-block w-3 h-3 transform rounded-full transition-all duration-100 ease-out`}
            />
          )}
        </HSwitch>
        {right ? right : null}
      </div>
    </>
  );
};

export default Switch;
