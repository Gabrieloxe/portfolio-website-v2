import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTurnDownRightIcon } from '@heroicons/react/24/solid';

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

export const CompanyExperience = ({ company }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="w-full"
    >
      {company.positions.map((position, index) => (
        <div key={index} className="mb-5">
          <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            {position.title}{' '}
            <a
              className="text-primary-500 tracking-wide"
              href={company.url}
              target="_blank"
              rel="noreferrer"
            >
              @{company.name}
            </a>
          </h3>
          <p>{position.duration}</p>
          <ul className="mt-3 flex flex-col gap-3">
            {position.responsibilities?.map((responsibility, idx) => (
              <li key={idx} className="text-base flex gap-2 text-secondary-50 mt-1">
                <span className="text-primary-500 mt-1">
                  <ArrowTurnDownRightIcon className="h-5 w-5" />
                </span>
                <p className="text-base lg:text-lg">{responsibility}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <ul className="mt-2 mb-5 flex flex-wrap">
        {company.techStack?.map((tech, idx) => (
          <li key={idx} className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300 ">
              {tech}
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
