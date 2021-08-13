import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppStoreIcon from '../../ui/icons/AppStoreIcon';
import PlayStoreIcon from '../../ui/icons/PlayStoreIcon';
import Squares from '../../../public/images/squares.png';
import Parabolas from '../../../public/images/parabolas.png';

const SignUpLayout: React.FC<any> = ({ children }) => {
  return (
    <>
      <div className='min-h-screen relative flex flex-col'>
        {/* header */}
        <header className='px-8 py-4'>
          <Link href='/'>
            <a className='text-lg'>cruX Forum</a>
          </Link>
        </header>

        <div className='w-16 sm:w-32 lg:w-48 absolute top-2/3 sm:bottom-1/3 lg:top-1/3 z-0'>
          <Image src={Squares} className='w-full h-full' draggable={false} />
        </div>

        <div className='w-16 sm:w-32 lg:w-48 absolute top-10 right-0 lg:top-20 text-right z-0'>
          <Image src={Parabolas} className='w-full h-full' draggable={false} />
        </div>

        {/* body */}
        <div className='flex-grow z-10 flex flex-col'>{children}</div>

        {/* footer */}
        <footer className='w-full px-2 sm:px-8 py-4 text-gray-accent'>
          <div className='grid grid-cols-3 sm:gap-4'>
            <div className='text-center sm:text-left'>
              <a href='/' className='text-xs'>
                Privacy Policy
              </a>
            </div>

            <div className='inline text-center'>
              <button className='mx-2'>
                <PlayStoreIcon />
              </button>
              <button className='mx-2'>
                <AppStoreIcon />
              </button>
            </div>
            <div className='text-center sm:text-right'>
              <a href='/' className='text-xs'>
                Copyright 2021 cruX. All Rights Reserved
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SignUpLayout;
