'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { ProjectTag } from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Will you be my Girlfriend?',
    description:
      'This is the public version of the project that I made to ask my girlfriend to be mine. Stack:  Next.js, styled components, Vercel.',
    imageUrl: '/images/projects/date_me.png',
    tag: ['All', 'Frontend'],
    githubUrl: 'https://github.com/Gabrieloxe/date-me',
    previewUrl: 'https://willyoudateme.vercel.app/',
  },
  {
    id: 2,
    title: 'Korean Lyrics Extractor',
    description: 'This is a project description',
    imageUrl: '/images/projects/melon.png',
    tag: ['All', 'Fullstack'],
    githubUrl:
      'https://github.com/Gabrieloxe/CircuitBreakerGab/tree/master/koreanLyricsExtractor',
    previewUrl: '/',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'This is a project description',
    imageUrl: '/images/projects/placeholder.png',
    tag: ['All', 'fullstack'],
    githubUrl: '/',
    previewUrl: '/',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'This is a project description',
    imageUrl: '/images/projects/placeholder.png',
    tag: ['All', 'fullstack'],
    githubUrl: '/',
    previewUrl: '/',
  },
];

export const ProjectsSection = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const handleTagChange = tag => {
    setSelectedTag(tag);
  };

  const filteredProjects = projectsData.filter(project => {
    return project.tag.includes(selectedTag);
  });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id='projects'>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag
          onClick={handleTagChange}
          name='All'
          isSelected={selectedTag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Frontend'
          isSelected={selectedTag === 'Frontend'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Fullstack'
          isSelected={selectedTag === 'Fullstack'}
        />
      </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => {
          return (
            <motion.li
              variants={cardVariants}
              initial='initial'
              animate={isInView ? 'animate' : 'initial'}
              key={project.id}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                imageUrl={project.imageUrl}
                title={project.title}
                description={project.description}
                githubUrl={project.githubUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};
