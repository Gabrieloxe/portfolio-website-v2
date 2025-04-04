'use client';
import React, { useState } from 'react';
import { CompanyExperience } from './CompanyExperience';
import { TabItem } from './TabItem';

// Experience data
const experienceData = [
  {
    name: 'Smartly',
    url: 'https://smartly.io',
    positions: [
      {
        title: 'Senior Support Solutions Engineer',
        duration: 'April 2024 - Present',
        responsibilities: [
          'Building and maintaining a company wide admin panel using using React typescript connected to endpoints in the respective product team microservices',
          'Project lead for designing and building a company wide emergency internal and external communication tool',
          'Built an internal changelog for tiktok objects'
        ]
      },
      {
        title: 'Support Solutions Engineer',
        duration: 'Aug 2020 - April 2024',
        responsibilities: [
          'Resolving advertisers’ issues, supporting escalations and identifying product bugs using our internal troubleshooting tools, ElasticSearch, Kibana and Grafana.',
          'Writing python DAGs on Airflow for custom automation scripts',
          'Writing Common Table Expressions for internal data consumption on snowflake.'
        ]
      }
    ],
    techStack: [
      'React',
      'PostgreSQL',
      'Snowflake',
      'Python',
      'ES6',
      'Node.js+TypeScript',
      'PHP',
      'Ruby'
    ]
  },
  {
    name: 'RGA',
    url: 'https://rga.com',
    positions: [
      {
        title: 'Strategy Intern',
        duration: 'April 2024 - Present',
        responsibilities: [
          'Research on new technologies that can help to answer our client briefs',
          'Worked with brands like Samsung to design a marketplace concept'
        ]
      }
    ]
  }
];

export const ExperienceSection = () => {
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <section id="experience">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Experience
      </h2>
      <div className="w-full flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          {experienceData.map((company, index) => (
            <TabItem
              key={index}
              activeTabId={activeTabId}
              tabId={index}
              label={company.name}
              onClick={() => setActiveTabId(index)}
            />
          ))}
        </ul>

        <div className="flex-1">
          <CompanyExperience company={experienceData[activeTabId]} />
        </div>
      </div>
    </section>
  );
};
