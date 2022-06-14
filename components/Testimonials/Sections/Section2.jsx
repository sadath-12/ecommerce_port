import React from 'react';
import img1 from '../../../public/images/img16.png'
import Image from 'next/image'
import ProductCard from '../ProductCard'

const Section2 = () => {
  return (
    <div className=" flex space-x-20 justify-around">

    <Image src={img1} objectFit='contain' width={500} height={400} />
    <div className='flex '>
    
    <div className='flex flex-col space-y-4'>

    <div className='flex flex-col items-center p-5 space-y-3'>
        <h2 className='text-3xl font-bold'> Don t try to be fashionable... </h2>
        <p className='text-xs font-medium'>Just be yourself!</p>
    </div>

<div className='flex'>

<ProductCard/>
<ProductCard/>
<ProductCard/>
</div>
    </div>

    </div>
    
    </div>
  );
}

export default Section2;
