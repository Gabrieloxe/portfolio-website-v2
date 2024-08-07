'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(
  () => {
    return import('react-animated-numbers');
  },
  { ssr: false }
);

const achievementsList = [
  {
    title: 'Projects',
    value: '3',
    postfix: '+',
  },
  {
    title: 'Years',
    value: '4',
    postfix: '+',
  },
  {
    prefix: '~',
    title: 'Github Repos',
    value: '12',
  },
];

export const AchievementSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      <div className='sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between'>
        {achievementsList.map(achivement => {
          return (
            <div
              key={achivement.title}
              className='flex flex-col items-center justify-center mx-4 my-4 sm:my-0'
            >
              <h2 className='text-white text-4xl font-bold flex flex-row'>
                {achivement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achivement.value)}
                  className='text-white text-4xl font-bold'
                  locale='en-US'
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achivement.postfix}
              </h2>
              <p className='text-[#ADB7BE] text-base'>{achivement.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
