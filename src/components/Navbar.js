import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styling/Navbar.css';
import '../styling/Responsive.css';

/**
 * Navbar component
 * 
 * This component renders a navigation bar with links to different sections of the page.
 * It's now responsive with a hamburger menu for mobile devices.
 */
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar navBar navbar-expand-lg navbar-black bg-black fixed-top">
            <div className="container-fluid d-flex align-items-center" style={{ position: 'relative', height: '40px' }}>
                <div className="d-flex align-items-center" style={{ position: 'absolute', left: '0px' }}>
                    <Link to="section1" smooth={true} duration={500} style={{ cursor: 'pointer', color: 'white', fontSize: '20px' }}>Nick van Gerwen</Link>
                </div>
                
                {/* Mobile menu button */}
                <button 
                    className="mobile-menu-button" 
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    ☰
                </button>
                
                <div className={`navbar-collapse justify-content-center ${menuOpen ? 'mobile-menu-open' : 'collapsed'}`} id="navbarNav">
                    <ul className="navbar-nav" style={{ color: 'white' }}>
                        <li className="nav-item navItem">
                            <Link 
                                className='navText' 
                                to="section1" 
                                smooth={true} 
                                duration={500}
                                onClick={() => setMenuOpen(false)}
                            >
                                About me
                            </Link>
                        </li>
                        <li className="nav-item navItem" >
                            <Link 
                                className='navText' 
                                to="section2" 
                                offset={-43} 
                                smooth={true} 
                                duration={500}
                                onClick={() => setMenuOpen(false)}
                            >
                                Serious games
                            </Link>
                        </li>
                        <li className="nav-item navItem" >
                            <Link 
                                className='navText' 
                                to="section3" 
                                offset={-43} 
                                smooth={true} 
                                duration={500}
                                onClick={() => setMenuOpen(false)}
                            >
                                Personal projects
                            </Link>
                        </li>
                        <li className="nav-item navItem">
                            <Link 
                                className='navText' 
                                to="section4" 
                                offset={-43} 
                                smooth={true} 
                                duration={500}
                                onClick={() => setMenuOpen(false)}
                            >
                                Game jam games
                            </Link>
                        </li>
                        <li className="nav-item navItem" >
                            <Link 
                                className='navText' 
                                to="section5" 
                                offset={-50} 
                                smooth={true} 
                                duration={500}
                                onClick={() => setMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
