'use client';
import React from 'react';
import Link from 'next/link';
import { NavLink } from './NavLink';
import { MenuOverlay } from './MenuOverlay';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const navLinks = [
  {
    path: '#about',
    title: 'About'
  },
  {
    path: '#projects',
    title: 'Projects'
  },
  {
    path: '#contact',
    title: 'Contact'
  }
];

const HamburgerButton = ({ navbarOpen, setNavbarOpen }) => {
  const hamburgerColourClasses =
    'border-slate-200 text-slate-200 hover:text-white hover:border-white';
  return (
    <>
      {!navbarOpen ? (
        <button
          className={`flex items-center px-3 py-2 border rounded ${hamburgerColourClasses}`}
          onClick={() => setNavbarOpen(true)}
        >
          <Bars3Icon className="h-5 w-5" />
        </button>
      ) : (
        <button
          className={`flex items-center px-3 py-2 border rounded ${hamburgerColourClasses}`}
          onClick={() => setNavbarOpen(false)}
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      )}
    </>
  );
};

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className="text-xl md:text-4xl text-white font-semibold">
          Welcome
        </Link>
        <div className="mobile-menu block md:hidden">
          <HamburgerButton navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link) => (
              <NavLink key={link.title} href={link.path} title={link.title} />
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};
