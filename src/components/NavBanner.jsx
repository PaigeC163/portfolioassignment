import React, { useState } from 'react';
import '../index.css';
import { Outlet, Link } from 'react-router-dom';
import logoimg from '../assets/images/logo.png';

function NavBanner() {
    const [isResponsive, setIsResponsive] = useState(false);

    const toggleMenu = () => {
        setIsResponsive(!isResponsive);
    };

    return (
        <div>
            <nav className={`navbar ${isResponsive ? 'responsive' : ''}`} id="navbar">
                <div className="nav_logo">
                    <img src={logoimg} alt="PAIGE C in typewriter keys" />
                </div>
                <a
                    href="javascript:void(0);"
                    id="nav_icon"
                    className="nav_icon"
                    onClick={toggleMenu}
                >
                    {isResponsive ? '✖' : '☰'}
                </a>

                <ul className='nav_links'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/aboutme">About Me</Link></li>
                    <li><Link to="/contactme">Contact Me</Link></li>
                </ul>
            </nav>
            <div className='banner'>
                <div className='banner_item rose'>
                    <h1>IT<br></br>Student</h1>
                </div>
                <div className='banner_item pearl'>
                    <h1>Paige<br></br>Clay</h1>
                </div>
                <div className='banner_item rose'>
                    <h1>Checkout<br></br>Supervisor</h1>
                </div>
            </div>

        </div>
        
    );
}

export default NavBanner;
