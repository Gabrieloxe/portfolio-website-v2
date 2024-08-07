import React from 'react';


export const Card = ({ children }) => {
  return (
    <div className="flex items-center rounded-md leading-5 bg-sky-500/30 py-6 px-4 mb-4">
      {children}
    </div>
  );
};
