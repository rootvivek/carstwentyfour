"use client"; 

import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './index';


function page() {
  return (
    <>
        <Navbar/>
        <Sidebar/>
    </>
  )
}

export default page