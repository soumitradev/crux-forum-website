import React from 'react';
import ClubTagIcon from './icons/ClubTagIcon';

interface ClubTagProps {
  name: string;
  color: string;
  selectedTags: string[];
  onSelect: (club: string) => void;
  classname?: string;
}

const ClubTag: React.FC<ClubTagProps> = ({
  name,
  color,
  selectedTags,
  onSelect,
  classname,
}) => {
  return (
    <button
      onClick={() => onSelect(name)}
      className={`inline-flex items-center rounded-full px-1 py-1 transition-colors bg-${
        selectedTags.includes(name) ? color : 'gray-disabled'
      } ${classname}`}
      // className={
      //   'inline-flex items-center rounded-full px-1 py-1 transition-colors bg-gray-disabled'
      // }
    >
      <ClubTagIcon className='h-5 w-5 mr-2' />
      <span className='text-sm mr-4'>{name}</span>
    </button>
  );
};

export default ClubTag;
