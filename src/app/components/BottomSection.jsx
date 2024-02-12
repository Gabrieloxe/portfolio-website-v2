'use client';
import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';

const Socials = () => {
  return (
    <div className='socials flex flex-row gap-2'>
      <Link className='mr-2' href='https://github.com/Gabrieloxe'>
        <BsGithub
          className='h-10 w-10 text-[#ADB&BE] cursor-pointer'
          alt='github icon'
        />
      </Link>
      <Link href='https://www.linkedin.com/in/gabriel-ong-bb3494159/'>
        <BsLinkedin
          className='h-10 w-10 text-[#ADB&BE] cursor-pointer'
          alt='Linked in icon'
        />
      </Link>
    </div>
  );
};

const BlueCircle = () => {
  return (
    <div
      className='
      bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2
      '
    ></div>
  );
};

export const BottomSection = () => {
  return (
    <section
      id='contact'
      className='container justify-start flex w-full my-12 md:my-12 py-24 gap-4 relative'
    >
      <BlueCircle />
      <div className='z-10 max-w-md'>
        <h5 className='text-xl font-bold text-white my-2'>
          Let&apos;s Connect
        </h5>
        <p className='text-[#ADB7BE] mb-4 max-w-xl'>
          I am currently happy with my job, but I am open to new opportunities
          in the software development field. If you have a role that you think I
          would be a good fit for feel free to reach out to me on linked in :D
        </p>
        <Socials />
      </div>
    </section>
  );
};
