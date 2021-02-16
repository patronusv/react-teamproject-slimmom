import React from 'react';
import scss from './IconClose.module.css';

const IconClose = () => {
  return (
    <svg
      className={scss.icon}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path d="M1 1L13 13" stroke="black" strokeWidth="2" />
      <path d="M1 13L13 0.999999" stroke="black" strokeWidth="2" />
    </svg>
  );
};

export default IconClose;
