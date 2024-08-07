'use client';
import React, { useState } from 'react';
import { CompanyExperience } from '../about/Experiences';

const smartlyData = {
    name: 'Smartly',
    url: 'https://smartly.io',
    positions: [
        {
            title: 'Senior Support Solutions Engineer',
            duration: 'April 2024 - Present',
            responsibilities: [
                'Building and maintaining a company wide admin panel using using React typescript connected to endpoints in the respective product team microservices',
                'Project lead for designing and building a company wide emergency internal and external communication tool'
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
};

const rgaData = {
    name: 'RGA',
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
};

export const ExperienceSection = () => {
    const [activeTabId, setActiveTabId] = useState(0);

    return (
        <section id="experience">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Experience
            </h2>
            <div className="w-full flex flex-col md:flex-row gap-16">
                <ul className="md:w-32 flex flex-col">
                    <li
                        className={`border-1-2 border-l ${
                            activeTabId === 0 ? 'border-primary-500' : 'border-gray-500'
                        } bg-transparent hover:bg-[#33353F] px-3 py-3 text-sm cursor-pointer duration-300 font-medium`}
                        onClick={() => setActiveTabId(0)}
                    >
                        Smartly
                    </li>
                    <li
                        className={`border-1-2 border-l ${
                            activeTabId === 1 ? 'border-primary-500' : 'border-gray-500'
                        } bg-transparent hover:bg-[#33353F] px-3 py-3 text-sm cursor-pointer duration-300 font-medium`}
                        onClick={() => setActiveTabId(1)}
                    >
                        RGA
                    </li>
                </ul>
                <div className="flex-1">
                    {activeTabId === 0 && <CompanyExperience company={smartlyData} />}
                    {activeTabId === 1 && <CompanyExperience company={rgaData} />}
                </div>
            </div>
        </section>
    );
};
