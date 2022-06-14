import Image from "next/image";
import React from "react";
import img1 from "../../../public/images/img1.png";
import ReactStars from "react-rating-stars-component";

const Section7 = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-[785px] h-[516px] mx-auto">
      <h2 className="text-3xl font-semibold">What our clients say</h2>

      <div className="rounded-full p-1 border-2">
        <Image src={img1} className="rounded-full" objectFit="contain" />
      </div>

      <ReactStars count={5} size={24} activeColor="#ffd700" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus dolor
        fermentum amet in. Mi semper sed at quam egestas pulvinar. Amet, quis
        vitae suspendisse venenatis purus ultricies. At commodo vitae nunc
        accumsan suscipit proin tincidunt.{" "}
      </p>
      <h3>D.Verginine</h3>
      <div className="flex space-x-3">
          <div className="bg-lightBrown rounded-full w-[20px] h-[20px]"/>
          <div className="bg-gray-400 rounded-full w-[20px] h-[20px]"/>
      </div>
    </div>
  );
};

export default Section7;
