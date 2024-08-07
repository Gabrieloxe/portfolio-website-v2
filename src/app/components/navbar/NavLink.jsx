import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

export const NavLink = ({ href, title }) => {
    return (
        <li>
            <Link
                href={href}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
            >
                {title}
            </Link>
        </li>
    );
};

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};
