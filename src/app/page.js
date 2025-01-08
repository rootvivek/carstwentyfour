"use client"

import React from 'react';
import Image from 'next/image';
import App from './components/Layout';
import styles from './components/Layout.module.css';
import "./globals.css";
import test from './Assets/test.avif'


const Page = () => {
  return (
    <>          
     <App/>
      <div className={styles.content}>
        <h1 className='heading'>Welcome</h1>
        <h5 className='para'>Here you should find everything you need regarding Cal.com's design system and branding guidelines.</h5>
        <Image className='my-4'
            src={test}
            width={800}
            height={500}
            alt="Picture of the author"
          />
         <h1 className='head-2'>
          Introduction
         </h1> 
        <p className='para-2'>Everything here is split into three sections: basics, assets and Figma.</p>
        <p className='para-2'><b>Basics,</b> as the name infers, is a lot of the design tokens and simple stuff that you should base all designs upon.</p>
        <p className='para-2'><b>Assets</b> is an excellent collection of each of the different types of asset we've prepared, which are great to use in content and publications.</p>
        <p className='para-2'><b>Figma</b> contains all of the links to our Figma documents, which are considered the ultimate source of truth.</p>

      </div>
    </>
  );
};

export default Page;
