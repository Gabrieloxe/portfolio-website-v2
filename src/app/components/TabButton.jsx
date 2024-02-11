import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  default: { width: 0 },
  active: { width: 'calc(100% - 0.75rem' },
};

export const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? 'text-white border-primary-500'
    : 'text-[#ADB7BE]';

  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold hover:text-white text-[#ADB7BE] ${buttonClasses}`}
      >
        {children}
      </p>
      <motion.div
        variants={variants}
        animate={active ? 'active' : 'default'}
        className='h-1 bg-primary-500 mt-2 mr-3'
      ></motion.div>
    </button>
  );
};
