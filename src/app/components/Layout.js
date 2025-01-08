// components/Layout.js

import Sidebar from './Sidebar';
import Navbar from './Navbar';
import styles from '../components/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Sidebar />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
