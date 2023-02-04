import React from "react";
import { NavLink } from 'react-router-dom';
// import { useMediaQuery } from "@mui/material";
// import DropdownMenu from "../MobileNav";

function Header(props) {

  // const isMobile = useMediaQuery('(max-width: 810px)');

  return (
    // include Nav in header return
    <div>
      <header className="hero">
        <div className="hero-div">
          <h1 className="hero-text">Vincent Toon</h1>
        </div>
        <nav className="hero-nav">
          <ul className="nav-link">
            <li>
                <NavLink to='/'>About</NavLink>
            </li>
            <li>
                <NavLink to='/portfolio'>Portfolio</NavLink>
            </li>
            <li>
                <NavLink to='/technologies'>Technologies</NavLink>
            </li>
          </ul>
        </nav>
        <div className="right-links">
            <NavLink to='/resume'>Resume</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </div>
      </header>
    </div>
  );
}

export default Header;