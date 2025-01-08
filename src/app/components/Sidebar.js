// components/Sidebar.js

import Link from 'next/link';
import styles from '../components/Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2>Navigation</h2>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
