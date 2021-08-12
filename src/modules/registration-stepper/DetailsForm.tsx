import React from 'react';

interface StepOneProps {
  changeStep: (step: number) => void;
}

const DetailsForm: React.FC<StepOneProps> = ({ changeStep }) => {
  return (
    <div className=''>
      <h1 className='text-2xl sm:text-4xl md:text-5xl'>Register</h1>
      <h3 className='text-sm sm:text-base font-normal text-gray-accent my-2'>
        Looks like this is your first time here, asd qwe sdf trert dfg Tell us
        more about yourself, asd xc v wer c
      </h3>
      <div className='text-sm sm:text-base grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6 gap-y-3 sm:gap-y-6 w-full text-left'>
        <div>
          <label className='block'>Name</label>
          <input
            type='text'
            className='w-full rounded-md border border-gray-accent text-gray-accent bg-transparent px-2 py-2 focus:outline-none focus:border-cyan'
          />
        </div>
        <div>
          <label className='block'>Email</label>
          <input
            type='text'
            className='w-full rounded-md border border-gray-accent text-gray-accent bg-transparent px-2 py-2 focus:outline-none focus:border-red'
          />
        </div>
        <div>
          <label className='block'>Batch</label>
          <input
            type='text'
            className='w-full rounded-md border border-gray-accent text-gray-accent bg-transparent px-2 py-2'
          />
        </div>
        <div>
          <label className='block'>Phone Number</label>
          <input
            type='text'
            className='w-full rounded-md border border-gray-accent text-gray-accent bg-transparent px-2 py-2'
          />
        </div>
        <div>
          <label className='block'>Profile Picture</label>
          <img
            className='object-cover mx-auto my-2'
            //random image. To be changed after adding form validation
            src='https://picsum.photos/200'
          />
        </div>
        <div>
          <label className='block'>Bio</label>
          <textarea className='w-full rounded-md border border-gray-accent text-gray-accent bg-transparent px-2 py-2 h-32 max-h-48' />
        </div>
        <div className='py-6'>
          <button
            onClick={() => changeStep(2)}
            className='text-center w-full bg-cyan rounded-md py-2 text-black font-bold'
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsForm;
