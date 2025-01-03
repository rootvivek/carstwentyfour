import React from 'react';
import Navbar from './Navbar'; // Assuming the Navbar component exists
import Sidebar from './Sidebar'; // Assuming the Sidebar component exists
import styles from './Layout.module.css'; // Assuming this CSS exists

const Page = () => {
  return (
    <>
      <Navbar />
      <div className={styles.layout}>
        <Sidebar />
        <main className={styles.content}>
          {children} {/* Render the children passed from the layout */}
        </main>
      </div>
    </>
  );
};

export default Page;
