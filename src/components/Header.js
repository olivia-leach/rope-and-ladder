import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SocialIcons from './SocialIcons';
import logo from '../logo.svg'
import "../styles/Header.scss";

class Header extends Component {
    render() {
        return <header className="main-header">
            <div className="container">
              <nav className="main-menu">
                {/*<ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/tour">Tour</Link></li>
                  <li><Link to="/store">Store</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>*/}
              </nav>
              <nav className="main-menu social">
                <SocialIcons />
              </nav>
                {/*<div className='logo-container'>
                    <Link to="/">
                        <i className="fas fa-crown" />
                        {/*<img src={logo} alt="Rope and Ladder Logo" />
                    </Link>
              </div>*/}
            </div>
          </header>
    }
}

export default Header;
