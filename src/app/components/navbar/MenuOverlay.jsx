import React from 'react';
import { NavLink } from './NavLink';

export const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link) => (
        <li key={link.title}>
          <NavLink title={link.title} href={link.path} />
        </li>
      ))}
    </ul>
  );
};
