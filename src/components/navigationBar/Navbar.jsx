import "./Navbar.scss";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar ${isOpen ? "open" : ""}`}>
      <h4 className='tolerance'>Tolerance.</h4>
      <div className='hamburger-icon'>
        <FontAwesomeIcon icon={faBars} onClick={handleNavbar} />
      </div>

      <ul className={`navbar-container ${isOpen ? "open" : ""}`}>
        <li className='navbar-items'>Home</li>
        <li className='navbar-items'>Company</li>
        <li className='navbar-items'>Resources</li>
        <li className='navbar-items'>About</li>
        <li className='navbar-items'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
