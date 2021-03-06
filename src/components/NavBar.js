import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <div className="sidenav">
            <ul className="nav_ul">
                <li>
                <img src="https://christina-houston-portfolio.web.app/images/profile.png" height="150" alt="portrait image"/>
                </li>
                <h3>Christina Houston</h3>
                <p>Graduate Software Developer</p>
                <li className="navLink" id="text">
                    <Link to="/">Home</Link>
                </li>
                <li className="navLink" id="text">
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="navLink" id="text">
                    <Link to="/cv">CV</Link>
                </li>
            </ul>
            </div>
        </header>
    )
}

export default NavBar;