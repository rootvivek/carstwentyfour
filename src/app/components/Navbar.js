import React from 'react'
import Logo from '../Assets/logo.png';
import Image from 'next/image';
import '../components/Navbar.module.css';

function Navbar() {
  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
            <a className="navbar-brand d-flex justify-between align-items-center" href="#">
                <Image src={Logo} alt="Logo" width="80" height="40" className=" me-3"/>
                LEBO Design Systems
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-4">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Docs</a>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </nav>
  )
}

export default Navbar