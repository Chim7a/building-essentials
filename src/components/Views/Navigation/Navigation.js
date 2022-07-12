import React, { useState } from 'react';
import './Navigation.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import LogoGold from '../../Assets/LogoGold.png';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [toggle, setToggle] = useState (false);
    const changeToggle = () => setToggle(!toggle);

  return (
    <div className="navbar">
        <div className="mobile-icons navbar_mobile_title" onClick={changeToggle} >
            <div className="logo__mobile">
                <img src={LogoGold} alt="logo" />
                {toggle ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
            </div>
            
        </div>
        <div className="logo">
            <img src={LogoGold} alt="logo" />
        </div>
        <nav className={toggle ? "nav_links_mobile" : "nav-links"}>
            <ul>
                <Link className="link" to="/" >
                    <li>Home</li>
                </Link>

                <Link className="link" to="/products">
                    <li>Products</li>
                </Link>

                <Link className="link" to="/contacts">
                    <li>Contact</li>
                </Link>

                <Link className="link" to="/about">
                    <li>About</li>
                </Link>
                
            </ul>
        </nav>
    </div>
  )
}

export default Navigation;