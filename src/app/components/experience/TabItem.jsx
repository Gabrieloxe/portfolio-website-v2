import React from 'react';

export const TabItem = ({ activeTabId, tabId, label, onClick }) => {
  return (
    <li
      className={`border-1-2 border-l ${
        activeTabId === tabId ? 'border-primary-500 text-primary-500' : 'border-gray-500'
      } bg-transparent hover:bg-[#33353F] px-3 py-3 text-sm cursor-pointer duration-300 font-medium hover:text-primary-300`}
      onClick={onClick}
    >
      {label}
    </li>
  );
};
