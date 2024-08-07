import React from 'react';

//// <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300 ">

export const Card = ({ children }) => {
  return (
    <div className="flex items-center rounded-xl leading-5 bg-secondary-100/10 py-6 px-4 mb-4">
      {children}
    </div>
  );
};
