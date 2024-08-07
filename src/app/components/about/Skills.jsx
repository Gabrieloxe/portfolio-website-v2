import React from 'react';

const SKILLS = [
  { id: 1, skill: 'TypeScript' },
  { id: 2, skill: 'JavaScript' },
  { id: 3, skill: 'Python' },
  { id: 4, skill: 'Ruby on Rails' },
  { id: 5, skill: 'React' },
  { id: 6, skill: 'SQL' },
  { id: 7, skill: 'GitHub' },
  { id: 8, skill: 'Tailwind CSS' },
  { id: 9, skill: 'Snowflake' },
  { id: 10, skill: 'Tableau' },
  { id: 11, skill: 'CSS' },
  { id: 12, skill: 'Tailwind' },
  { id: 13, skill: 'Next JS' }
];

export const Skills = () => {
  return (
    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
      {SKILLS.map((item) => {
        return (
          <p
            key={item.id}
            className="flex items-center rounded-full bg-teal-400/10 px-4 py-2 mr-2 mt-2  font-semibold leading-5 text-slate-100 "
          >
            {item.skill}
          </p>
        );
      })}
    </div>
  );
};
