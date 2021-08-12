import React from 'react';
import SignUpLayout from '../modules/layouts/SignUpLayout';
import GoogleIcon from '../ui/icons/GoogleIcon';

const Home: React.FC = () => {
  return (
    <>
      <SignUpLayout>
        <div className='w-5/6 sm:w-1/2 mx-auto text-center mt-16 sm:mt-40'>
          <h1 className='text-2xl sm:text-4xl md:text-5xl'>
            Login to cruX Forum
          </h1>
          <h2 className='text-sm sm:text-base font-normal text-gray-accent my-2'>
            Login to post, view post and do other random bs Lorem Ipsum dolor
            sit amet consectetur adipiscing elit, sed do eiusmod{' '}
          </h2>
          <button className='my-5 flex mx-auto py-2 px-2 items-center border border-cyan rounded-md'>
            <GoogleIcon className='w-5' />

            <span className='font-extralight ml-2'>Login With Google</span>
          </button>
          <div className='flex items-center w-full justify-center'>
            <input className='mr-1 bg-black' type='checkbox' />
            <span className='text-sm'>Keep me Signed In</span>
          </div>
          <div className='text-sm my-5'>
            <span>By signing in to cruX forum you agree to the </span>
            <a href='/' className='underline'>
              Cookie Policy
            </a>
          </div>
        </div>
      </SignUpLayout>
    </>
  );
};

export default Home;
