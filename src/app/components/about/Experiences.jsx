import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTurnUpRightIcon } from '@heroicons/react/24/solid';

export const CompanyExperience = ({ company }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className='w-full'
    >
      {company.positions.map((position, index) => (
        <div key={index}>
          <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
            {position.title}{' '}
            <span className='text-primary-500 tracking-wide'>
              @{company.name}
            </span>
          </h3>
          <p>{position.duration}</p>
          <ul className='mt-6 flex flex-col gap-3'>
            {position.responsibilities.map((responsibility, idx) => (
              <li
                key={idx}
                className='text-base flex gap-2 text-secondary-50 mt-1'
              >
                <span className='text-primary-500 mt-1'>
                  <ArrowTurnUpRightIcon className='h-5 w-5' />
                </span>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
};
