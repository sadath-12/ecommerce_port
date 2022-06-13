import React from 'react';
import logo from '../public/images/img18.png'
import Image from 'next/image';
import {FiChevronDown,FiSearch,FiMenu} from 'react-icons/fi'
import {RiUserFill} from 'react-icons/ri'
import {BsHeartFill,BsBagFill} from 'react-icons/bs'



const Navbar = () => {
  return (
    <div className='px-20 w-full h-[70px] flex items-center py-1 justify-between text-[14px] font-medium '>
      
{/* logo  */}
<div className='w-[45%] cursor-pointer'>
<Image src={logo} width={92} height={64} objectFit='contain'/>
</div>

{/* navlinks  */}
<div className='flex items-center space-x-10 w-[65%] pl-14'>

<div className='flex items-center space-x-6 text-sm list-none'>


<div className='flex items-center space-x-1 cursor-pointer'>
<li>Women</li>
<FiChevronDown/>
</div>

<div className='flex items-center space-x-1 cursor-pointer'>
<li>Men</li>
<FiChevronDown/>
</div>

<div className='flex items-center space-x-1 cursor-pointer'>
<li>Child</li>
<FiChevronDown/>
</div>

<div className='flex items-center space-x-1 cursor-pointer'>
<li>Wedding</li>
</div>

</div>

<button className='px-3 py-2 text-[#fff] bg-lightBrown rounded-[140px] cursor-pointer'>JOIN OUR CREATORS</button>


{/* right icons */}
<div className='text-lightGray flex space-x-5 items-center' >

<RiUserFill className='text-lg cursor-pointer'/>
<BsHeartFill className='text-lg cursor-pointer'/>
<BsBagFill className='text-lg cursor-pointer'/>
<FiSearch className='text-lg cursor-pointer'/>
<FiMenu className='text-lg cursor-pointer'/>
</div>

</div>

    </div>
);
}

export default Navbar;


