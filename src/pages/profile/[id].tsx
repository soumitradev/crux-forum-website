import React from 'react';
import AppLayout from '../../modules/layouts/AppLayout';
import PostItem from '../../modules/posts/PostItem';
import Avatar from '../../ui/Avatar';
import Button from '../../ui/Button';
import Container from '../../ui/Container';

interface TagProfilePageProps {}

const TagProfilePage: React.FC<TagProfilePageProps> = ({}) => {
  return (
    <>
      <AppLayout>
        <Container maxWidth='lg' className='p-4'>
          <div className='flex justify-between md:items-center mb-8 md:mb-5 flex-col md:flex-row'>
            <div className='flex items-center mb-4 md:mb-0 gap-4'>
              <Avatar size='md' />
              <h2 className='md:text-4xl text-2xl'>Crux BPHC</h2>
            </div>
            <Button>Follow</Button>
          </div>
          <p className='mb-10 text-sm md:text-md'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            officiis vitae debitis, recusandae facilis delectus itaque repellat
            quam corrupti sint quod vero sunt modi accusantium porro impedit
            nemo tenetur! Delectus ducimus nam impedit optio voluptatem unde
            exercitationem sed ut minima corrupti, consequatur blanditiis id
            doloremque, quibusdam magni, eligendi vel tenetur natus. Temporibus
            nostrum quis eum sapiente, vel est ipsam atque. Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Perferendis, commodi!
          </p>
          <div className='py-3'>
            <h3 className='mb-5'>Posts</h3>
            {Array(5)
              .fill(0)
              .map((_, i) => {
                return <PostItem key={i} />;
              })}
          </div>
        </Container>
      </AppLayout>
    </>
  );
};

export default TagProfilePage;
