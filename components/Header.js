"use client"

import React from 'react';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';

export const Header = () => {
  const toggleNavLinks = () => {
    document.querySelector('.nav_links').classList.toggle('active');
    document.querySelector('.toggle').classList.toggle('active');
  };

  return (
    <nav className='navbar'>
      <div className="left_nav">
        <CategoryRoundedIcon/>
        <div className="brand_name">Quotes</div>
      </div>
      <a href="#" className='toggle' onClick={toggleNavLinks}>
        <span className='bar'></span>
        <span className='bar'></span>
      </a>
      <div className="nav_links">
        <ul>
          <li><a href="#">Random</a></li>
          <li><a href="#">Success</a></li>
          <li><a href="#">Motivation</a></li>
          <li><a href="#">Love</a></li>
          <li><a href="#">Sad</a></li>
          <li><a href="#">Attitude</a></li>
          <li><a href="#">Positive</a></li>
        </ul>
      </div>
    </nav>
  );
};
