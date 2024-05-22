import React from 'react';
//import images 
// import WomanImg from '../img/woman_hero.png';
//import Link 
// import { Link } from 'react-router-dom';

const Hero = () => {
  return <section className='bg-pink-200 h-[800px] bg-no-repeat bg-cover bg-center py-24'>
    <div className='container mx-auto flex justify-center h-full'>
      {/* text */}
      <div className='flex flex-col justify-center'>
        {/* pretitle */}
        <div className='font-semibold flex items-center uppercase'>
          <div className='w-10 h-[2px] bg-red-500 mr-3 tracking-[2px]'></div>New Trend
        </div>
        {/* Title */}
        <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
          ELEVATE YOUR BEAUTY WITH <br/>
        <span className='font-semibold'>Luxe cosmetics</span>
        </h1>
        <div className='self-start uppercase font-semibold border-b-2 border-primary tracking-[2px]'>
          Don't miss out, shop now !
        </div>
      </div>
      {/* image */}
      {/* <div className='hidden lg:block '>
        <img src={WomanImg} alt=''/>
      </div> */}
    </div>
  </section>;
};

export default Hero;
