// src/components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        {/* Logo Section */}
        <Link href="/" passHref>
          <a className="navbar-brand">
            <Image src="/assets/logo.png" alt="Logo" width={150} height={50} />
          </a>
        </Link>
        
        {/* Hamburger Toggle Button (for mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" passHref>
                <Link className="nav-link active" aria-current="page">Home</Link>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" passHref>
                <Link className="nav-link">About</Link>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services" passHref>
                <Link className="nav-link">Services</Link>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" passHref>
                <Link className="nav-link">Contact</Link>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/login" passHref>
                <Link className="nav-link btn btn-outline-light">Login</Link>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
