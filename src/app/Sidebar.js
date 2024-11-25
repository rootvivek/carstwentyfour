'use client'

import React from 'react';
import Link from 'next/link';
// import '../components/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar w-auto scroll-auto">
      <ul className="sidebar-list">
        <li className="sidebar-item active">
          <Link href="/" className="sidebar-link mb-1">Foundations</Link>
        </li>
        <li className="sidebar-item">
          <Link href="#" className="sidebar-link disabled fw-bold">Basics</Link>
          <ul className="submenu">
            <li><Link href="/settings/Colors" className="submenu-link">Color</Link></li>
            <li><Link href="/settings/privacy" className="submenu-link">Typography</Link></li>
            <li><Link href="/settings/security" className="submenu-link">Shadows</Link></li>
            <li><Link href="/settings/security" className="submenu-link">Grid</Link></li>
            <li><Link href="/settings/security" className="submenu-link">Icons</Link></li>
            <li><Link href="/settings/security" className="submenu-link">Breakpoints</Link></li>
          </ul>
        </li>
        <li className="sidebar-item">
          <Link href="/profile" className="sidebar-link ">Assets</Link>
        </li>
        <li className="sidebar-item">
          <Link href="/messages" className="sidebar-link">Logo</Link>
        </li>
        <li className="sidebar-item">
          <Link href="/messages" className="sidebar-link">Background</Link>
        </li><li className="sidebar-item">
          <Link href="/messages" className="sidebar-link">Covers</Link>
        </li><li className="sidebar-item">
          <Link href="/messages" className="sidebar-link">Badges</Link>
        </li><li className="sidebar-item">
          <Link href="/messages" className="sidebar-link">Thumbnails</Link>
        </li><li className="sidebar-item">
          <Link href="/messages" className="sidebar-link">Screenshot</Link>
        </li><li className="sidebar-item">
          <Link href="/messages" className="sidebar-link">Illustrations</Link>
        </li><li className="sidebar-item">
          <Link href="/messages" className="sidebar-link">Apps</Link>
        </li><li className="sidebar-item">
          <Link href="/messages" className="sidebar-link">Message</Link>
        </li><li className="sidebar-item">
          <Link href="/messages" className="sidebar-link">Messages</Link>
        </li><li className="sidebar-item">
          <Link href="/messages" className="sidebar-link">Messages</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
