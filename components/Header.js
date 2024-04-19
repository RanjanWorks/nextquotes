"use client"


import React from 'react';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import Link from 'next/link';

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
          <li><Link href="/Random">Random</Link></li>
          <li><Link href="/Success">Success</Link></li>
          <li><Link href="/Motivation">Motivation</Link></li>
          <li><Link href="/Love">Love</Link></li>
          <li><Link href="/Sad">Sad</Link></li>
          <li><Link href="/Attitude">Attitude</Link></li>
          <li><Link href="/Positive">Positive</Link></li>
        </ul>
      </div>
    </nav>
  );
};
