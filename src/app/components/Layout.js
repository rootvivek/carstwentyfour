// components/Layout.js

import Sidebar from "./Sidebar";
import styles from '../components/Layout.module.css';
import Navbar from './Navbar';


const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
        <div className={styles.container}>
          <Sidebar />
          <div className={styles.content}>{children}</div>
        </div>  
    </>
  );
};

export default Layout;
