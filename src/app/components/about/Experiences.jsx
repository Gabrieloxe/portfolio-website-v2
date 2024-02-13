import React from 'react';

const EXPERIENCE = [
  {
    id: 1,
    title: 'Support Solutions Engineer',
    responsibilities: ['responsbility 1'],
    period: '2021 may - present',
  },
  {
    id: 2,
    title: 'Support Solutions Engineer',
    responsibilities: ['responsbility 1'],
  },
  {
    id: 2,
    title: 'Support Solutions Engineer',
    responsibilities: ['responsbility 1'],
  },
];

export const Experiences = () => {
  return (
    <section id='experience' className='max-w-containerxs mx-auto px-2'>
      <div className='w-full flex flex-col md:flex-row gap-16'>
        <ul className='md:w-32 flex flex-col'>
          <li className='border-1-2 border-l-blue-500 bg-transparent text-slate-600 hover:text-primary-500 hover:bg-[#33353F] px-8 py-3 text-sm cursor-pointer duration-300 font-medium'>
            Smartly.io
          </li>
          <li className='border-1-2 border-l-blue-500 bg-transparent text-slate-600  hover:text-primary-500 hover:bg-[#33353F] px-3 py-3 text-sm cursor-pointer duration-300 font-medium'>
            Smartly.io
          </li>
          <li className='border-1-2 border-l-blue-500 bg-transparent text-slate-600  hover:text-primary-500 hover:bg-[#33353F] px-3 py-3 text-sm cursor-pointer duration-300 font-medium'>
            Smartly.io
          </li>
        </ul>
      </div>
      <div></div>
    </section>
  );
};
