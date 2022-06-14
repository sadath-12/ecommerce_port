import React from 'react';
import img from '../../../public/images/img19.png'
import Image from 'next/image';

const Section9 = () => {
  return (
    <div className='flex items-center justify-center'>
      <Image src={img} objectFit='cover' />
    </div>
  );
}

export default Section9;
