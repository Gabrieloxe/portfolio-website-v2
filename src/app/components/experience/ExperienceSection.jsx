'use client';
import React, { useState } from 'react';
import { Smartly } from './companies/Smartly';

export const ExperienceSection = () => {
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <section id='experience'>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        My Experience
      </h2>
      <div className='w-full flex flex-col md:flex-row gap-16'>
        <ul className='md:w-32 flex flex-col'>
          <li className='border-1-2 border-l border-primary-500 bg-transparent hover:bg-[#33353F] px-3 py-3 text-sm cursor-pointer duration-300 font-medium'>
            Smartly
          </li>
          <li className='border-1-2 border-l border-hoverColor bg-transparent hover:bg-[#33353F] px-3 py-3 text-sm cursor-pointer duration-300 font-medium'>
            RGA
          </li>
        </ul>
        <Smartly />
      </div>
      <div></div>
    </section>
  );
};
