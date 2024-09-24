import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import './styles/responsiveMenu.css'

function ResponsiveMenu() {
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
    setIsOpen(!isOpen);
}

  return (
    <div>
      <button className="menu-icon" onClick={toggleMenu}>
        <IoMenu />
      </button>
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contacts</li>
      </ul>
    </div>
  );
}

export default ResponsiveMenu;
