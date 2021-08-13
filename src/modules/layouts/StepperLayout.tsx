import React from 'react';

interface StepperProps {
  step: number;
  changeStep: (step: number) => void;
}

const StepperLayout: React.FC<StepperProps> = ({
  children,
  step,
  changeStep,
}) => {
  return (
    <div className='flex flex-col flex-grow lg:flex-row mx-auto w-5/6 lg:w-3/5 justify-center py-10'>
      <div className='lg:flex flex-row lg:flex-col justify-center lg:w-1/6'>
        <p className='text-sm text-gray-accent'>
          Step{' '}
          <span className='font-extrabold'>{step == 1 ? 'one' : 'two'}</span> of
          two
        </p>
        <div className='my-2 sm:my-8 flex lg:block'>
          <button
            onClick={() => changeStep(1)}
            className={`border rounded-md my-2 mr-3 lg:mr-0 h-12 w-12 flex items-center justify-center ${
              step === 1 && 'bg-cyan text-black border-transparent'
            }`}
          >
            1
          </button>
          <button
            onClick={() => changeStep(2)}
            className={`border rounded-md my-2 h-12 w-12 flex items-center justify-center ${
              step === 2 && 'bg-cyan text-black border-transparent'
            }`}
          >
            2
          </button>
        </div>
      </div>
      <div className='lg:w-5/6'>{children}</div>
    </div>
  );
};

export default StepperLayout;
