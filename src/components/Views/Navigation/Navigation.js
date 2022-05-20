import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Navigation.css';

const Navigation = () => {
    const [toggle, setToggle] = useState (false);
    const changeToggle = () => setToggle(!toggle);

  return (
    <div className="navbar">
        <div className="mobile-icons navbar_mobile_title" onClick={changeToggle} >
            {toggle ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
        </div>
        <nav className={toggle ? "nav_links_mobile" : "nav-links"}>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation;