"use client"

import styles from './Sidebar.module.css';
import { useRouter } from 'next/navigation'


const Sidebar = () => {

  const router = useRouter();
  const basic = [
    { name: 'Button', href: '/' },
    { name: 'Checkbox', href: '/pages/accordion' },
    { name: 'Radio', href: '/pages/badge' },
    { name: 'Paginationx', href: '/pages/pagination' },
    { name: 'Switch', href: '/blog' },
    { name: 'Badge', href: '/contact' },
    { name: 'Input Field', href: '/testimonials' },
    { name: 'Accordion', href: '/pricing' },
    { name: 'Slider', href: '/faq' },
    { name: 'Progress Bar', href: '/careers' },
  ];

    const comp = [
    { name: 'set', href: '/' },
    { name: 'Checkbox', href: '/pages/accordion' },
    { name: 'Radio', href: '/services' },
    { name: 'Paginationx', href: '/portfolio' },
    { name: 'Switch', href: '/blog' },
    { name: 'Badge', href: '/contact' },
    { name: 'Input Field', href: '/testimonials' },
    { name: 'Accordion', href: '/pricing' },
    { name: 'Slider', href: '/faq' },
    { name: 'Progress Bar', href: '/careers' },
  ];

  return (
      <div className={styles.sidebar}>
        <a className="nav-link" href="/">Welcome</a>
        <ul className={styles.navList}>
          <p className='mt-4'>Basic</p>
          {basic.map((link) => (
            <li className="list-group-item active" key={link.name}>
              <a
                href={link.href}
                className={router.pathname === link.href ? styles.active : ''}>
                {link.name}
              </a>            
            </li>
          ))}
        </ul>
      </div>
  );
};

export default Sidebar;
