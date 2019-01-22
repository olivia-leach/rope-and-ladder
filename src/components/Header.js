import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.svg'
import "../styles/Header.scss";

class Header extends Component {
    render() {
        return <header className="main-header">
            <div className="container">
              <nav className="main-menu">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/tour">Tour</Link></li>
                  <li><Link to="/store">Store</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </nav>
              <nav className="main-menu social">
                <ul className="social-list">
                  <li className="facebook">
                    <a href="https://www.facebook.com/RopeAndLadder" target="_blank" className="social-icon">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="instagram">
                    <a href="https://www.instagram.com/RopeAndLadder" target="_blank" className="social-icon">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li className="twitter">
                    <a href="https://www.twitter.com/RopeAndLadder" target="_blank" className="social-icon">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="youtube">
                    <a href="https://www.youtube.com/RopeAndLadder" target="_blank" className="social-icon">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                </ul>
              </nav>
                <div className='logo-container'>
                    <Link to="/">
                        <i className="fas fa-crown" />
                        {/*<img src={logo} alt="Rope and Ladder Logo" />*/}
                    </Link>
                </div>
            </div>
          </header>
    }
}

export default Header;
