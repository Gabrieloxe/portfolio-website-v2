import React from 'react';

const achievementsList = [
  {
    title: 'Projects',
    value: '3',
  },
  {
    title: 'Years of experience',
    value: '3+',
  },
  {
    title: 'Github Repositories',
    value: '12',
  },
  {
    title: 'Github Repositories',
    value: '12',
  },
];

export const AchievementSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      <div className='border-[#33353F] border rounded-md py-8 px-17 flex flex-row items-center justify-between'>
        {achievementsList.map(achivement => {
          return (
            <div
              key={achivement.title}
              className='flex flex-col items-center justify-center mx-4'
            >
              <h2 className='text-white text-4xl font-bold'>
                {achivement.value}
              </h2>
              <p className='text-[#ADB7BE] text-base'>{achivement.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
