import Image from "next/image";
import React from "react";
import img from "../../../public/images/img7.png";
import emailIcon from '../../../public/images/vector.png'

const Section5 = () => {
  return (
    <div className="w-full h-[690px] h-[701px] relative">
      <div className="w-full ">
        <Image src={img} objectFit="contain" />
      </div>

      <div className="w-[710px] w-[411px] absolute lg:top-[170px] lg:left-[420px] flex-col py-5 px-16 rounded-xl bg-[#FFFFFF] space-y-5 flex items-center text-center justify-center">
      <Image src={emailIcon} />
        <h2 className="text-2xl font-bold">Join Our Club</h2>
        <p>
          If you're always on the lookout for the latest trends, new arrivals
          and unique creations, subscribe to our newsletter to make sure you
          don't miss anything.
        </p>
        <div className="flex justify-between w-full border-2 shadow-sm">
<input type="text" placeholder="E-mail address" className="bg-white outline-none px-3 py-2.5 w-full" />
<button className="text-sm bg-black px-3 py-2.5 text-white ">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Section5;
