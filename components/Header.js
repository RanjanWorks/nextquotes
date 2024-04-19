"use client"

import { usePathname } from 'next/navigation'
import React from 'react';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import Link from 'next/link';

export const Header = () => {
  const pathname = usePathname()
  const toggleNavLinks = () => {
    document.querySelector('.nav_links').classList.toggle('active');
    document.querySelector('.toggle').classList.toggle('active');

  };
console.log("pathName:", pathname)
  return (
    <nav className='navbar'>
      <div className="left_nav">
        <CategoryRoundedIcon/>
        <div className="brand_name">Quotes</div>
      </div>
      <div className='toggle' onClick={toggleNavLinks}>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
      <div className="nav_links">
        <ul>
          <li><Link className={`link ${pathname === '/Random' ? 'active' : ''}`} href="/Random">Random</Link></li>
          <li><Link className={`link ${pathname === '/Success' ? 'active' : ''}`} href="/Success">Success</Link></li>
          <li><Link className={`link ${pathname === '/Motivation' ? 'active' : ''}`} href="/Motivation">Motivation</Link></li>
          <li><Link className={`link ${pathname === '/Love' ? 'active' : ''}`} href="/Love">Love</Link></li>
          <li><Link className={`link ${pathname === '/Sad' ? 'active' : ''}`} href="/Sad">Sad</Link></li>
          <li><Link className={`link ${pathname === '/Attitude' ? 'active' : ''}`} href="/Attitude">Attitude</Link></li>
          <li><Link className={`link ${pathname === '/Positive' ? 'active' : ''}`} href="/Positive">Positive</Link></li>
        </ul>
      </div>
    </nav>
  );
};
