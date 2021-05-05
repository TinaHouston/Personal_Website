import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <div className="sidenav">
            <ul className="nav_ul">
                <li>
                <img src="http://localhost:3000/images/portrait.png" height="150" alt="portrait image"/>
                </li>
                <h3>Christina Houston</h3>
                <p>Graduate Software Developer</p>
                <li className="navLink" id="text">
                    <Link to="/">Home</Link>
                </li>
                <li className="navLink" id="text">
                    <Link>Projects</Link>
                </li>
                <li className="navLink" id="text">
                    <Link>CV</Link>
                </li>
            </ul>
            </div>
        </header>
    )
}

export default NavBar;