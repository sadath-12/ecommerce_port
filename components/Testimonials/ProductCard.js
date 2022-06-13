import React from 'react';
import Image from 'next/image';
import img from '../../public/images/img14.png'
import {AiFillEye} from 'react-icons/ai'
import {BsHeartFill} from 'react-icons/bs'

const productCard = () => {
  return (
    <div className=' p-2 space-y-4 flex items-center justify-center flex-col shadow-md text-gray-700'>
<Image src={img} alt="" className='w-[200px] h-[200px]' />

<h3>Champagne Dress</h3>
<button className='px-2 py-1 border border-gray-500'>$262.90</button>

<div className='flex space-x-2'>
    <h2>SELECT OPTIONS</h2>
   

    <p className='border rounded-full p-1'>
<AiFillEye/>
    </p>
    <p className='border rounded-full p-1'>
<BsHeartFill/>
    </p>

    
</div>
      
    </div>
  );
}

export default productCard;
