import React from 'react';
import { motion } from 'framer-motion';

import { ArrowTurnUpRightIcon } from '@heroicons/react/24/solid';

export const Smartly = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className='w-full'
    >
      <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
        Senior Support Solutions Engineer{' '}
        <span className='text-primary-500 tracking-wide'>@Smartly</span>
      </h3>
      <p>April 2024 - Present</p>
      <ul className='mt-6 flex flex-col gap-3'>
        <li className='text-base flex gap-2 text-secondary-50 mt-1'>
          <span className='text-primary-500 mt-1'>
            <ArrowTurnUpRightIcon className='h-5 w-5' />
          </span>
          Building and maintaining a company wide admin panel using using React
          typescript connected to endpoints in the respective product team
          microservices
        </li>
        <li className='text-base flex gap-2 text-secondary-50 mt-1'>
          <span className='text-primary-500 mt-1'>
            <ArrowTurnUpRightIcon className='h-5 w-5' />
          </span>
          Project lead for architecting and building a company wide emergency
          internal and external communication tool
        </li>
        <li className='text-base flex gap-2 text-secondary-50 mt-1'>
          <span className='text-primary-500 mt-1'>
            <ArrowTurnUpRightIcon className='h-5 w-5' />
          </span>
          Tech Stack Exposure: React, PostgreSQL, Snowflake, Python, ES6,
          Node.js+TypeScript, PHP, Ruby
        </li>
      </ul>
      <h3 className='flex gap-1 font-medium text-xl font-titleFont mt-6'>
        Support Solutions Engineer{' '}
        <span className='text-primary-500 tracking-wide'>@Smartly</span>
      </h3>
      <p>Aug 2020 - April 2024</p>
      <ul className='mt-6 flex flex-col gap-3'>
        <li className='text-base flex gap-2 text-secondary-50 mt-1'>
          <span className='text-primary-500 mt-1'>
            <ArrowTurnUpRightIcon className='h-5 w-5' />
          </span>
          Resolving advertisers’ issues, supporting escalations and identifying
          product bugs using our internal troubleshooting tools, ElasticSearch,
          Kibana and Grafana.
        </li>
        <li className='text-base flex gap-2 text-secondary-50 mt-1'>
          <span className='text-primary-500 mt-1'>
            <ArrowTurnUpRightIcon className='h-5 w-5' />
          </span>
          Writing python DAGs on airflow for custom automations
        </li>
        <li className='text-base flex gap-2 text-secondary-50 mt-1'>
          <span className='text-primary-500 mt-1'>
            <ArrowTurnUpRightIcon className='h-5 w-5' />
          </span>
          Writing Common Table Expressions for internal data consumption on
          snowflake .
        </li>
      </ul>
    </motion.div>
  );
};
