import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';

const Testimonial = () => {
  return (
      <div>

    <div className='p-10 w-full flex flex-col items-center justify-center '>
      <Section1/>
      </div>

      <div className='py-3 px-8'>
      <Section2/>
      </div>
    </div>
  );
}

export default Testimonial;
