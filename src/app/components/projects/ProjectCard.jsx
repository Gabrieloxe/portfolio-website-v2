import React from 'react';
import { EyeIcon } from '@heroicons/react/24/outline';
import { BsGithub } from 'react-icons/bs';
import Link from 'next/link';

const ProjectCard = ({ imageUrl, title, description, githubUrl, previewUrl, stack }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imageUrl})`, backgroundSize: 'cover' }}
      >
        {' '}
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={githubUrl}
            className="h-14 w-14 border-2 mr-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
          >
            <BsGithub className="h-10 w-10 text-[#ADB&BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB&BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white mt-3 rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
      <ul className="mt-2 mb-5 flex flex-wrap">
        {stack?.map((tech, idx) => (
          <li key={idx} className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300 ">
              {tech}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
