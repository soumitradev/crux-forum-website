import React from 'react';

type PlayStoreIconProps = React.SVGProps<SVGSVGElement>;

const PlayStoreIcon: React.FC<PlayStoreIconProps> = ({
  className,
  ...props
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='17'
      height='19'
      viewBox='0 0 17 19'
      fill='currentColor'
      className={className}
      {...props}
    >
      <path d='M.85 0l8.662 8.6 2.375-2.375L1.387.162A1.15 1.15 0 00.85 0zM.125.4A.986.986 0 000 .887V17.6a.9.9 0 00.075.362l8.863-8.8L.124.4zm12.488 6.237l-2.538 2.526 2.538 2.512 3.1-1.775c.44-.255.503-.578.5-.75-.005-.284-.185-.55-.488-.713-.264-.142-2.225-1.284-3.112-1.8zm-3.1 3.088L.774 18.387a.984.984 0 00.45-.125l7.263-4.2L11.9 12.1 9.512 9.725z'></path>
    </svg>
  );
};

export default PlayStoreIcon;
