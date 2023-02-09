import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import MobileNav from "../MobileNav";

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 810px)");

  return (
    // include Nav in header return
    <header className="hero">
      <div className="hero-div">
        <Link to="/">
          <h1 className="hero-text">Vincent Toon</h1>
        </Link>
      </div>
      <nav className="hero-nav">
        <ul className="nav-link">
          {/* <li>
            <NavLink to="/">About</NavLink>
          </li> */}
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/technologies">Technologies</NavLink>
          </li>
          <li>
            <NavLink to="/resume">Resume</NavLink>
          </li>
        </ul>
      </nav>
      <div className="right-links">
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="mobile-div">{isMobile && <MobileNav />}</div>
    </header>
  );
};

export default Header;
