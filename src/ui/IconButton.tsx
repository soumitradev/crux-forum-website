import React from 'react';

type IconButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode;
};

const IconButton: React.ForwardRefExoticComponent<
  Pick<
    IconButtonProps,
    'key' | keyof React.ButtonHTMLAttributes<HTMLButtonElement>
  > &
    React.RefAttributes<HTMLButtonElement>
> = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <button
      className={`bg-transparent rounded-md p-2 cursor-pointer ${
        className ? className : ''
      }`}
      {...props}
    >
      {children}
    </button>
  );
});

export default IconButton;
