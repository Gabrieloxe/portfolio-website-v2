import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTurnUpRightIcon } from '@heroicons/react/24/solid';

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
            {position.responsibilities.map((responsibility, idx) => (
              <li key={idx} className="text-base flex gap-2 text-secondary-50 mt-1">
                <span className="text-primary-500 mt-1">
                  <ArrowTurnUpRightIcon className="h-5 w-5" />
                </span>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <ul className="mt-2 mb-5 flex flex-wrap">
        {company.techStack.map((tech, idx) => (
          <li key={idx} className="mr-1.5 mt-2">
            <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300 ">
              {tech}
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
