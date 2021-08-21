import React from 'react';

type TextAreaProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  label: string;
  error?: boolean;
};

const TextArea: React.FC<TextAreaProps> = ({ label, error, className }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className='block'>{label}</label>
      <textarea
        className={`w-full resize-none rounded-md border border-gray-accent text-gray-accent bg-transparent px-2 py-2 mt-1 flex-grow focus:outline-none ${
          error ? 'focus:border-red' : `focus:border-cyan`
        }`}
      />
    </div>
  );
};

export default TextArea;
