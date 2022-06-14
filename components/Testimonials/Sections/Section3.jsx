import Image from "next/image";
import React from "react";
import img from '../../../public/images/img12.png';

const Section3 = () => {
  return (
    <div className="flex px-12 py-3 w-[1600px] h-[623px] items-center mx-auto ml-7">
      <div className=" bg-darkCream space-y-8 p-4 flex flex-col flex-1  h-[470px] w-[700px] items-center justify-center">
        <h2 className="font-medium text-[64px] text-creamText">Limited Time Deals</h2>

        <div className="flex items-start justify-center flex-col px-6 space-y-4">
          <h3 className="font-semibold text-[38px]">Twiggy dresss 55€</h3>
          <p className="text-sm text-gray-600 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            nihil quidem eligendi totam id? Veniam quasi laboriosam ipsam
            necessitatibus quam quibusdam molestias commodi distinctio minima
            doloribus quidem fuga, facilis, incidunt maxime non, iste ut? Autem
            est distinctio nobis, dolor vero non quibusdam. Facere, alias
            asperiores quas accusamus et neque nemo.
          </p>
        </div>

        <button className=" w-[298.94px]  mx-auto px-5 py-2 text-sm bg-[#F2EBE1] shadow-md rounded-lg font-medium tracking-widest">View Product</button>
      </div>

      <div className='flex-1'>
        <Image src={img} width={524} height={470} objectFit='cover' />
      </div>
    </div>
  );
};

export default Section3;
