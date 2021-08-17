import React from 'react';

type AppStoreIconProps = React.SVGProps<SVGSVGElement>;

const AppStoreIcon: React.FC<AppStoreIconProps> = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='20'
      fill='currentColor'
      viewBox='0 0 18 20'
      className={className}
      {...props}
    >
      <path d='M17.186 14.674c-.47 1.04-.695 1.506-1.298 2.425-.844 1.284-2.035 2.887-3.505 2.897-1.31.012-1.648-.854-3.426-.838-1.776.008-2.147.855-3.458.842-1.472-.014-2.598-1.457-3.442-2.74C-.304 13.665-.553 9.45.905 7.208c1.033-1.59 2.665-2.524 4.198-2.524 1.563 0 2.545.858 3.835.858 1.254 0 2.016-.86 3.823-.86 1.366 0 2.81.744 3.842 2.028-3.376 1.851-2.828 6.673.582 7.964zM11.389 3.247c.657-.844 1.157-2.034.975-3.247-1.072.073-2.325.757-3.057 1.644-.664.808-1.214 2.007-1 3.167 1.17.038 2.38-.66 3.082-1.564z'></path>
    </svg>
  );
};

export default AppStoreIcon;
