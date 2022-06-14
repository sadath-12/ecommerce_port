import React from 'react';
import Image from 'next/image';
import logo from '../public/images/img18.png'
import {AiOutlineTwitter} from 'react-icons/ai'
import {RiFacebookFill} from 'react-icons/ri'
import {FiInstagram} from 'react-icons/fi'
import {BsPinterest} from 'react-icons/bs'
import {BiWorld} from 'react-icons/bi'



const Footer = () => {
  return (
    <div className='px-20'>
      
    {/* logo  */}
    <div className='flex items-center justify-center py-6'>
<Image src={logo} />
    </div>

    <div className='flex justify-between py-4'> 
   
{/* column-1  */}

    <div className='flex flex-col space-y-4 items-start list-none'>

<h2 className='font-semibold'>THE SHOP</h2>
<div className='w-[120px] h-[6px] bg-lightBrown'/>
<li>Home</li>
<li>Delivery Information</li>
<li>Returns</li>
<li>Track Orders</li>
<div className='flex items-center space-x-6 py-6 cursor-pointer'>
<RiFacebookFill/>
<AiOutlineTwitter/>
<FiInstagram/>
<BsPinterest/>
</div>
    </div>
{/* column-2  */}
<div className='flex flex-col space-y-4 items-start list-none'>

<h2 className='font-semibold'>INFORMATION</h2>
<div className='w-[120px] h-[6px] bg-lightBrown'/>
<li>About Us</li>
<li>FAQ</li>
<li>Terms & Conditions</li>
<li>Privacy Policy</li>
<div className='flex items-center py-5 space-x-4'>

<div className='flex items-center space-x-1'>
<BiWorld className='text-[18px]' />
<h3>USA</h3>
</div>
<div className='w-[1.5px] h-[17px] bg-white' />

<h3>English (UK)</h3>
<div className='w-[1.5px] h-[17px] bg-white' />

<h3>$ (USD)</h3>
</div>
    </div>
{/* column-3  */}
<div className='flex flex-col space-y-4 items-start list-none'>

<h2 className='font-semibold'>EXTRAS</h2>
<div className='w-[120px] h-[6px] bg-lightBrown'/>
<li>Our Brand</li>
<li>Affiliation</li>
<li>Contact us</li>

    </div>
    </div>

    {/* footer navs  */}
<div className='flex space-x-20 lg:space-x-96'>





</div>


    </div>
  );
}

export default Footer;
