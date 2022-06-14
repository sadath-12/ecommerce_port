import React from 'react';
import Section1 from './Sections/Section1';
import Section10 from './Sections/Section10';
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3';
import Section4 from './Sections/Section4';
import Section5 from './Sections/Section5';
import Section6 from './Sections/Section6';
import Section7 from './Sections/Section7';
import Section8 from './Sections/Section8';
import Section9 from './Sections/Section9';

const Testimonial = () => {
  return (
      <div>

    <div className='p-10 w-full flex flex-col items-center justify-center '>
      <Section1/>
      </div>

      <div className='py-3 px-8 space-y-10'>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
   <Section6/>
<Section7/>
<Section8/>
<Section9/>
<Section10/>
      
      </div>
    </div>
  );
}

export default Testimonial;
