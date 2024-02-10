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

const EmailForm = () => {
  return (
    <form className='flex flex-col'>
      <div className='mb-6'>
        <label
          htmlFor='email'
          type='email'
          className='text-white block mb-2 text-sm font-medium'
        >
          Your email
        </label>
        <input
          type='email'
          id='email'
          required
          placeholder='email@gmail.com'
          className='bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5'
        />
      </div>
      <div className='mb-6'>
        <label
          htmlFor='subject'
          type='subject'
          className='text-white block mb-2 text-sm font-medium'
        >
          Subject
        </label>
        <input
          type='text'
          id='subject'
          required
          placeholder='Just saying hi'
          className='bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5'
        />
      </div>
      <div className='mb-6'>
        <label
          htmlFor='message'
          type='message'
          className='text-white block mb-2 text-sm font-medium'
        >
          Message
        </label>
        <textarea
          name='message'
          id='message'
          className='bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5'
          placeholder='Lets talk about ...'
        />
      </div>
      <button
        type='submit'
        className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
      >
        Send Message
      </button>
    </form>
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

export const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
      <BlueCircle />
      <div className='z-10'>
        <h5 className='text-xl font-bold text-white my-2'>
          Let&apos;s Connect
        </h5>

        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          delectus eligendi officia maxime natus, ullam, saepe reprehenderit hic
          repellendus inventore eaque quasi distinctio omnis libero et nobis
          doloremque nisi quis.
        </p>
        <Socials />
      </div>
      <div>
        <EmailForm />
      </div>
    </section>
  );
};
