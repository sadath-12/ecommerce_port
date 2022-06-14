import React from 'react';
import Image from 'next/image'
import  img from '../../public/images/img2.png'
import {RiFolderUploadFill} from 'react-icons/ri'

const FashionCard = () => {
  return (
    <div className='flex flex-col items-start p-2 shadow-md w-[410px] justify-center space-y-2 text-gray-600'>
      <Image src={img} objectFit='contain' width={400} height={400} />
      <p className='flex items-center space-x-2'> <RiFolderUploadFill/> <span className='text-sm'>Post</span> </p>
      <p className='text-md font-medium'>How to become an independent fashion designer?</p>
    </div>
  );
}

export default FashionCard;
