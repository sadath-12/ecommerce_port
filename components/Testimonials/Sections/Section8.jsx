import React from "react";
import FashionCard from "../FashionCard";

const Section8 = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-3">
      <div className="text-center  space-y-3">
        <h2 className="text-2xl font-bold">Fashion News</h2>
        <p className="text-gray-600 font-medium">
          Let our designers make your dreams true. Each creator is a universe,
          choose your universe and be unique!
        </p>
      </div> 
      <div className="flex flex-wrap space-x-3">

        <FashionCard/>
        <FashionCard/>
        <FashionCard/>
      </div>
    </div>
  );
};

export default Section8;
