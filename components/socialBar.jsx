import React from 'react';
import {BiWorld} from 'react-icons/bi'
import {MdCall} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {RiFacebookFill} from 'react-icons/ri'
import {FiInstagram} from 'react-icons/fi'
import {BsPinterest} from 'react-icons/bs'

const SocialBar = () => {
  return (
  
      <div className='w-full text-[#fff] h-[47px] bg-[#000000] px-20 py-1 flex items-center text-[14px] font-normal justify-between'>

<div className='flex items-center space-x-4'>

<div className='flex items-center space-x-1'>
<BiWorld className='text-[18px]' />
<h3>USA</h3>
</div>
<div className='w-[1.5px] h-[17px] bg-white' />

<h3>English (UK)</h3>
<div className='w-[1.5px] h-[17px] bg-white' />

<h3>$ (USD)</h3>
</div>

{/* socials  */}
<div className='flex items-center space-x-4'>
<h3>Shop online or call</h3>
<div className='flex items-center'>
<MdCall/>
<h3>+33 677 745 207</h3>
</div>
<div className='w-[1.5px] h-[17px] bg-white' />

{/* social icons  */}
<div className='flex items-center space-x-3 cursor-pointer'>

<RiFacebookFill/>
<AiOutlineTwitter/>
<FiInstagram/>
<BsPinterest/>

</div>

</div>

      </div>




   
  );
}

export default SocialBar;
