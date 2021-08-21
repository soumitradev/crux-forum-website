import React from 'react';

type FormInputProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  label: string;
  error?: boolean;
};

const styles = {
  active: 'focus:border-cyan',
  error: 'focus:border-red',
};

const FormInput: React.FC<FormInputProps> = ({ error, label, ...props }) => {
  return (
    <div {...props}>
      <label className='block'>{label}</label>
      <input
        type='text'
        className={`w-full rounded-md border border-gray-accent text-gray-accent bg-transparent px-2 py-2 mt-1 focus:outline-none ${
          error ? styles.error : styles.active
        }`}
      />
    </div>
  );
};

export default FormInput;
