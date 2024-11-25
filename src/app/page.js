"use client"; 

import React from 'react'
import Navbar from './Navbar'
// import { Router } from 'next/router'
import Sidebar from './Sidebar'


function page() {
  return (
    <>
      <Navbar/>
          <Sidebar/>

    </>
      // <Router>
        
      // </Router>
  )
}

export default page