'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroImage = () => {
  return (
    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
      <Image
        src='/images/hero-image3.png'
        alt='Hero Image'
        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
        width={300}
        height={300}
      />
    </div>
  );
};

const CvButtons = () => {
  return (
    <div>
      <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-800 via-blue-500 to-yellow-500 hover:bg-slate-200  text-white font-semibold'>
        Hire Me
      </button>
      <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-800 via-blue-500 to-yellow-500 hover:bg-slate-800 text-white font-semibold mt-3 '>
        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
          Download CV
        </span>
      </button>
    </div>
  );
};

const RotatingText = () => {
  // type animation sample component code
  return (
    <TypeAnimation
      sequence={[
        //
        'Gabriel',
        1000,
        'a Software Engineer',
        1000,
        'a Dancer',
        1000,
      ]}
      wrapper='span'
      speed={50}
      repeat={Infinity}
    />
  );
};

export const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-800 via-blue-500 to-yellow-500'>
              Hello, I&apos;m
            </span>{' '}
            <br />
            <RotatingText />
          </h1>
          <p className='text-[#AdB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            I&apos;m a 🌱 Full Stack Developer. Based in Singapore, consectetur
            adipisicing elit. Illum sunt quidem rem dolorum eius vero fugiat
            magni quas sint, harum iure veritatis, totam porro! Labore sit et
            pariatur est. Suscipit.
          </p>
          <CvButtons />
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <HeroImage />
        </div>
      </div>
    </section>
  );
};
