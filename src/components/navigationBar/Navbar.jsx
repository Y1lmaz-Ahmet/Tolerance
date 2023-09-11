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
        <li className='navbar-items'>Onze oplossing</li>
        <li className='navbar-items'>Voor wie</li>
        <li className='navbar-items'>Over ons</li>
        <li className='navbar-items'>Nieuws</li>
        <li className='navbar-items'>Referenties</li>
        <li className='navbar-items'>Vacatures</li>
        <button className='navbar-item-button'>Contact</button>
      </ul>
    </div>
  );
};

export default Navbar;
