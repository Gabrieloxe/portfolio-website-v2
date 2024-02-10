'use client';
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import { TabButton } from './TabButton';

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
  { id: 13, skill: 'Next JS' },
];

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
const CERTIFICATIONS = [
  {
    id: 1,
    title: 'Supervised Learning with scikit-learn',
    issuingOrganization: 'DataCamp',
    issueDate: 'May 2020',
    credentialId: '13565737',
  },
];

const MovableSkillsComponent = ({ skills }) => {
  return (
    <div className='flex flex-wrap flex-row justify-center z-10 md:justify-start'>
      {skills.map(item => {
        return (
          <p
            key={item.id}
            className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold'
          >
            {item.skill}
          </p>
        );
      })}
    </div>
  );
};

//card component with rounded edges
const Card = ({ children }) => {
  return (
    <div className='rounded-xl bg-slate-700 py-6 px-4 mb-4'>{children}</div>
  );
};

const EducationComponent = ({ educationItems }) => {
  return educationItems.map(item => {
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

const CertificationsComponent = ({ certifications }) => {
  return certifications.map(item => {
    return (
      <Card key={item.id}>
        <ul>
          <li className='text-2xl mb-2 sm:text-xl font-bold'>{item.title}</li>
          <li>
            <span className='font-bold'>Organization: </span>{' '}
            {item.issuingOrganization}
          </li>
          <li>
            <span className='font-bold'>Issue Date: </span> {item.issueDate}
          </li>
          <li>
            <span className='font-bold'>Credential ID: </span>{' '}
            {item.credentialId}
          </li>
        </ul>
      </Card>
    );
  });
};

const TABS_DATA = [
  {
    id: 'skills',
    title: 'Skills',
    content: <MovableSkillsComponent skills={SKILLS} />,
  },
  {
    id: 'education',
    title: 'Education',
    content: <EducationComponent educationItems={EDUCATION} />,
  },
  {
    id: 'certifications',
    title: 'Certifications',
    content: <CertificationsComponent certifications={CERTIFICATIONS} />,
  },
];

const AboutSectionIntroParagraph = `
I have a passion for building technology that is human centric. Quo
ratione hic quaerat voluptatibus voluptatem quidem, animi eos, vero
blanditiis rerum sequi consequuntur accusantium optio adipisci?
`;

const AboutSectionImage = () => {
  return (
    <Image
      src='/images/about-image2.jpeg'
      width='500'
      height='500'
      alt='about image'
    />
  );
};

export const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition({
    timeoutMs: 3000,
  });

  const handleTabChange = id => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id='about' className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16'>
        <AboutSectionImage />
        <div className='mt4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About me</h2>
          <p className='text-base lg:text-lg'>{AboutSectionIntroParagraph}</p>
          <div className='flex flex-row mt-8'>
            <TabButton
              active={tab === 'skills'}
              selectTab={() => handleTabChange('skills')}
            >
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton
              active={tab === 'education'}
              selectTab={() => handleTabChange('education')}
            >
              {' '}
              Education{' '}
            </TabButton>
            <TabButton
              active={tab === 'certifications'}
              selectTab={() => handleTabChange('certifications')}
            >
              {' '}
              Certifications{' '}
            </TabButton>
          </div>
          <div className='mt-8 justify-start'>
            {TABS_DATA.find(data => data.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};
