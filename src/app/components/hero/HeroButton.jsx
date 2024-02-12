import React from 'react';

export const HeroButton = ({
  href,
  styles,
  children,
  textStyles,
  colourClasses,
}) => {
  return (
    <button
      className={`${colourClasses} ${styles}`}
    >
      <a href={href} className={textStyles}>
        {children}
      </a>
    </button>
  );
};
