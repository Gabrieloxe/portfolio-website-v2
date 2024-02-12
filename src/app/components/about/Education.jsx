'use client';
import React, { useRef } from 'react';
import { Card } from './Card';
import { motion, useInView } from 'framer-motion';

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};
const EDUCATION = [
  {
    id: 1,
    title: 'B.sc Information Systems',
    school: 'Singapore Management University',
    timeline: '2016 - 2020',
  },
  {
    id: 2,
    title: 'Business Administration',
    school: 'Hanyang University (Exchange Semester)',
    timeline: '2019 Fall',
  },
  {
    id: 3,
    title: 'Diploma in Aviation Management & Services',
    school: 'Temasek Polytechnic',
    timeline: '2011 - 2014',
  },
];

const EducationCard = ({ id, school, title, timeline }) => {
  return (
    <Card>
      <div>
        <li className='text-2xl sm:text-xl font-bold'>{school}</li>
        <li className='mb-2'>{title}</li>
        <li>
          <span className='font-bold'>Period: </span>
          {timeline}
        </li>
      </div>
    </Card>
  );
};

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });
  return EDUCATION.map((item, index) => {
    return (
      <ul
        ref={ref}
        key={item.id}
      >
        <motion.li
          variants={cardVariants}
          initial='initial'
          animate={isInView ? 'animate' : 'initial'}
          key={item.id}
          transition={{ duration: 0.3, delay: index * 0.4 }}
        >
          <EducationCard
            key={item.id}
            id={item.id}
            school={item.school}
            title={item.school}
            timeline={item.timeline}
          />
        </motion.li>
      </ul>
    );
  });
};
