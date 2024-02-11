import React from 'react';
import { Card } from './Card';

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

export const Education = () => {
  return EDUCATION.map(item => {
    return (
      <Card key={item.id}>
        <ul>
          <li className='text-2xl sm:text-xl font-bold'>{item.school}</li>
          <li className='mb-2'>{item.title}</li>
          <li>
            <span className='font-bold'>Period: </span>
            {item.timeline}
          </li>
        </ul>
      </Card>
    );
  });
};
