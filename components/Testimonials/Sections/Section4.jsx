import Image from 'next/image';
import React from 'react';
import ProductCard from '../ProductCard';
import img from '../../../public/images/img8.png'

const Section4 = () => {
  return (
    <div className='flex items-center justify-between px-12 space-x-8'>
      
<div className='flex-1 space-y-8'>

<div className='flex flex-col space-y-1 text-center'>

<h1 className='font-medium text-[48px]'>Pink is more than a color</h1>
<p>It s a feeling!</p>
</div>

<div className='flex items-center space-x-4'>
<ProductCard/>
<ProductCard/>
<ProductCard/>
</div>

</div>

<div className='flex-1'>
<Image src={img}  />
</div>

    </div>
  );
}

export default Section4;
