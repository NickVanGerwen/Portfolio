import React from 'react';
import { Link } from 'react-scroll';
import '../styling/Navbar.css';

/// Navbar component
/// This component renders a navigation bar with links to different sections of the page.
function Navbar() {
    return (
        <nav className="navbar navBar navbar-expand-lg navbar-black bg-black fixed-top">
            <div className="container-fluid d-flex align-items-center" style={{ position: 'relative', height: '40px' }}>
                <div className="d-flex align-items-center" style={{ position: 'absolute', left: '0px' }}>
                    <Link to="section1" smooth={true} duration={500} style={{ cursor: 'pointer', color: 'white', fontSize: '20px' }}>Nick van Gerwen</Link>
                </div>
                <div className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </div>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav" style={{ color: 'white' }}>
                        <li className="nav-item navItem">
                            <Link className='navText' to="section1" smooth={true} duration={500}>About me</Link>
                        </li>
                        <li className="nav-item navItem" >
                            <Link className='navText' to="section2" offset={-43} smooth={true} duration={500}>Serious games</Link>
                        </li>
                        <li className="nav-item navItem" >
                            <Link className='navText' to="section3" offset={-43} smooth={true} duration={500}>Personal projects</Link>
                        </li>
                        <li className="nav-item navItem">
                            <Link className='navText' to="section4" offset={-43} smooth={true} duration={500}>Game jam games</Link>
                        </li>
                        <li className="nav-item navItem" >
                            <Link className='navText' to="section5" offset={-50} smooth={true} duration={500}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
