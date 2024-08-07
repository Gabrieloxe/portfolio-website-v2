'use client';
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import { TabButton } from './TabButton';
import { Education } from './Education';
import { Skills } from './Skills';
import { Certifications } from './Certifications';

const TABS_DATA = [
  {
    id: 'skills',
    title: 'Skills',
    content: <Skills />
  },
  {
    id: 'education',
    title: 'Education',
    content: <Education />
  },
  {
    id: 'certifications',
    title: 'Certifications',
    content: <Certifications />
  }
];

const AboutSectionImage = () => {
  return <Image src="/images/about-image2.jpeg" width="500" height="500" alt="about image" />;
};

const AboutSectionParagraphs = [
  `Ever been to a website and thought, this website sucks? I feel you, I've been there. Having started my career in technical product support,
   I am convicted that a great user experience is the fundamental pillar to a successful product. This fuels my passion for building technology that is human centric.`,
  `My educational background is in Information Systems and Business Administration with a minor in communications, a recipe to build web applications that make sense to everyone`,
  `After work you will either catch me in a dance studio taking a hip hop class, spending time with my loved ones or working on a new coding project`
];

export const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [_isPending, startTransition] = useTransition({
    timeoutMs: 3000
  });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <AboutSectionImage />
        <div className="mt4 md:mt-0 text-left flex flex-col h-full mt-4">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          {AboutSectionParagraphs.map((paragraph, index) => (
            <p key={index} className="text-base lg:text-lg mb-2">
              {paragraph}
            </p>
          ))}
          <div className="flex flex-row mt-8">
            <TabButton active={tab === 'skills'} selectTab={() => handleTabChange('skills')}>
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton active={tab === 'education'} selectTab={() => handleTabChange('education')}>
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
          <div className="mt-8 justify-start">
            {TABS_DATA.find((data) => data.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};
