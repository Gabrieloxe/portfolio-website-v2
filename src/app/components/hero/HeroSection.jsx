'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { RotatingText } from './RotatingText';
import { HeroButton } from './HeroButton';

const heroColourClasses = 'from-primary-800 via-primary-500 to-secondary-500';

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

export const HeroSection = () => {
  return (
    <section className='lg:py-16  '>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-8 place-self-center text-center sm:text-left justify-self-start'
        >
          <h1 className='text-white mb-4 text-4xl lg:text-7xl lg:leading-normal font-extrabold'>
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-br ${heroColourClasses}`}
            >
              Hello, I&apos;m
            </span>{' '}
            <br />
            <RotatingText
              textSequence={[
                'Gabriel',
                1000,
                'a Software Engineer',
                1000,
                'a Dancer',
                1000,
              ]}
            />
          </h1>
          <p className='text-[#AdB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            🌱 Full Stack Developer based in Singapore, currently plowing my
            craft at Smartly.io
          </p>
          <div>
            <HeroButton
              href='/#contact'
              styles='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br hover:bg-slate-200 text-white font-semibold'
              text='Hire Me'
              textStyles='rounded-full block'
              colourClasses={heroColourClasses}
            >
              {' '}
              Hire Me
            </HeroButton>
            <HeroButton
              href='https://docs.google.com/document/d/1IPh2X0XcyQnoZP4u6OpSDaxuuY0W8Wcy/export?format=pdf'
              styles='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br hover:bg-slate-800 text-white font-semibold mt-3'
              textStyles='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'
              colourClasses={heroColourClasses}
            >
              {' '}
              Download CV
            </HeroButton>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-4 place-self-center mt-4 lg:mt-0'
        >
          <HeroImage />
        </motion.div>
      </div>
    </section>
  );
};
