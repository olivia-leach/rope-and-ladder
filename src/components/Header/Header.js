import React, { Component, Fragment } from 'react';
import { Link, NavLink } from "react-router-dom";
import SocialIcons from '../SocialIcons';
import Logo from '../../logo.png'

import './Header.scss'

class Header extends Component {
    constructor(props) {
      super(props)
      this.state = {
        showNav: false
      }
    }

    toggleNav = () => {
      this.setState(prevState => ({
        showNav: !prevState.showNav
      }))
    }

    render() {
        return (
          <Fragment>
          {/*<div className='vertical-nav'>
            <button onClick={this.toggleNav} className={`menu-button ${this.state.showNav ? 'hide' : ''}`}>
              {this.state.showNav ? <i className='fa fa-times' /> : <i className='fa fa-bars' />}
            </button>
            <div className={`nav-open ${!this.state.showNav ? 'hide' : ''}`}>
              <button onClick={this.toggleNav} className='menu-button'>
                {this.state.showNav ? <i className='fa fa-times' /> : <i className='fa fa-bars' />}
              </button>
              <div className='nav-item'><Link to='/' onClick={this.toggleNav}>Home</Link></div>
              <div className='nav-item'><Link to='/store' onClick={this.toggleNav}>Store</Link></div>
            </div>
          </div>*/}
            <header className="main-header">
            <div className="container">
              <nav className="main-menu">
                <ul>
                  <li><NavLink to="/" exact activeClassName='isActive'>Home</NavLink></li>
                  <li><NavLink to="/about" activeClassName='isActive'>About</NavLink></li>
                  {/*<li><NavLink to="/store" activeClassName='isActive'>Store</NavLink></li>*/}
                </ul>
              </nav>
              <nav className="social-menu">
                <SocialIcons />
              </nav>
                {/*<div className='logo-container'>
                    <Link to="/">
                        <i className="fas fa-crown" />
                        {/*<img src={logo} alt="Rope and Ladder Logo" />
                    </Link>
              </div>*/}
            </div>
            <div className='header-logo-container'>
              <Link to="/">
                <img src={Logo} className='logo' />
              </Link>
            </div>
          </header>
          </Fragment>
        )
    }
}

export default Header;
