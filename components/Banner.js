import React from 'react';
import bannerImg from '../public/images/img17.png'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='w-full  '>
      <Image src={bannerImg} width={1600} height={700} objectFit='cover' />
    </div>
  );
}

export default Banner;
