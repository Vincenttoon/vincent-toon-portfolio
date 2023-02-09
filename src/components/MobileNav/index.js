import { React, useState } from 'react';
import { NavLink } from "react-router-dom"
import MenuIcon from "@mui/icons-material/Menu";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

const MobileNav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MenuIcon
        id="mobile-nav-menu"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><NavLink to="/" className="mobile-nav-link">About</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/portfolio" className="mobile-nav-link">Portfolio</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/technologies" className="mobile-nav-link">Technologies</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/resume" className="mobile-nav-link">Resume</NavLink></MenuItem>
        <Divider /> 
        <MenuItem onClick={handleClose}><NavLink to="/contact" className="mobile-nav-link contact-link">Contact</NavLink></MenuItem>
      </Menu>
    </div>
  );
}

export default MobileNav;