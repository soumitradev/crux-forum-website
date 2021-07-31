import React from 'react';
import { Switch as HSwitch } from '@headlessui/react';

const variants = {
  cyan: 'bg-cyan',
  green: 'bg-green',
  red: 'bg-red',
  purple: 'bg-purple',
};

interface SwitchProps {
  active: boolean;
  toggleActive: () => void;
  onChange: () => void;
  icon?: React.ReactNode;
  variant?: keyof typeof variants;
}

const Switch: React.FC<SwitchProps> = ({
  active,
  icon,
  toggleActive,
  onChange,
  variant = 'cyan',
}) => {
  return (
    <>
      <div className='flex gap-2 items-center'>
        {icon ? icon : null}
        <HSwitch
          checked={active}
          onChange={() => {
            toggleActive();
            onChange();
          }}
          className={`${
            active ? variants[variant] : 'bg-gray-accent'
          } relative inline-flex items-center h-8 rounded-full w-14`}
        >
          <span className='sr-only'>Toggle Theme</span>
          <span
            className={`${
              active ? 'translate-x-8' : 'translate-x-1'
            } inline-block w-4 h-4 transform bg-white rounded-full transition-all duration-100 ease-out`}
          />
        </HSwitch>
      </div>
    </>
  );
};

export default Switch;
