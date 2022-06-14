import Image from 'next/image';
import React from 'react';
import img from '../../../public/images/img3.png'
import ytIcon from '../../../public/images/youtubeIcon.png'

const Section6 = () => {
  return (
    <div className='flex  justify-center p-5 space-x-10'>
      
<div className='mt-5 space-y-10'>
<div className='space-y-2'>
<h3 className='text-gray-600 font-medium'>Our Designers</h3>
<h2 className='font-medium text-lg'>An experience, a story to share with you</h2>
</div>
<div>
<div className='relative'>
<Image src={img} width={700} height={300} objectFit='cover'/>

<div className=' absolute bottom-3 left-3 ' >

<Image src={ytIcon} width={50} height={40} />
</div>
</div>

</div>

</div>

<div className='flex flex-col'>

<div className='relative'>
<Image src={img} width={300} height={200} objectFit='contain'/>
<div className=' absolute bottom-10 left-3 ' >
<Image src={ytIcon} width={30} height={20} />
</div>
</div>
<div className='relative'>
<Image src={img} width={300} height={200} objectFit='contain'/>
<div className=' absolute bottom-10 left-3 ' >
<Image src={ytIcon} width={30} height={20} />
</div>
</div>
<div className='relative'>
<Image src={img} width={300} height={200} objectFit='contain'/>
<div className=' absolute bottom-10 left-3 ' >
<Image src={ytIcon} width={30} height={20} />
</div>
</div>





</div>

<div>

</div>


    </div>
  );
}

export default Section6;
