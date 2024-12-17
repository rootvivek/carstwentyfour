import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import styles from './css/Layout.module.css'

export default function Page({children}) {
  return (
    <>
      <Navbar />
        <div className={styles.layout}>
          <Sidebar />
          <main className={styles.content}>
            {children}
          </main>
        </div>
    </>
  )
}

