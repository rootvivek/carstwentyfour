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
          <Link href="/pages/accordion">Accordion</Link>
        </li>
        <li>
          <Link href="/pages/badge">Badge</Link>
        </li>
         <li>
          <Link href="/pages/switch">Switch</Link>
        </li>
         <li>
          <Link href="/pages/button">Button</Link>
        </li>
         <li>
          <Link href="/pages/checkbox">Checkbox</Link>
        </li>
         <li>
          <Link href="/pages/radio">Radio Button</Link>
        </li>
         <li>
          <Link href="/pages/chip">Chip</Link>
        </li>
         <li>
          <Link href="/pages/pagination">Pagination</Link>
        </li>
         <li>
          <Link href="/pages/slider">Slider</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
