import React, { Component, Fragment } from 'react';
import { Link } from 'react-scroll'
import SocialIcons from '../SocialIcons';

import './Header.scss'

const pages = ['home', 'store', 'about', 'listen']

class Header extends Component {
    constructor(props) {
      super(props)
      const hash = props.history.location.hash
      this.state = {
        showNav: false,
        isHeaderDark: hash && hash.substr(1),
      }
    }

    toggleNav = () => {
      this.setState(prevState => ({
        showNav: !prevState.showNav
      }))
    }

    handleOnSetActive = (route) => {
      this.setState({ isHeaderDark: route !== 'home'})
    }

    render() {
        return (
          <Fragment>
          <div className='vertical-nav'>
            <button onClick={this.toggleNav} className={`menu-button ${this.state.showNav ? 'hide' : ''}`}>
              {this.state.showNav ? <i className='fa fa-times' /> : <i className='fa fa-bars' />}
            </button>
            <div className={`nav-open ${!this.state.showNav ? 'hide' : ''}`}>
              <button onClick={this.toggleNav} className='menu-button'>
                {this.state.showNav ? <i className='fa fa-times' /> : <i className='fa fa-bars' />}
              </button>
              <div className='vertical-nav-links'>
                {pages.map(page => <div key={page} className='nav-item'><Link to={page} onClick={this.toggleNav}>{page}</Link></div>)}
              </div>
            </div>
          </div>
            <header className={`main-header ${this.state.isHeaderDark ? 'is-dark' : ''} ${window.scrollY}`}>
            <div className="container">
              <nav className="main-menu">
                <ul>
                  {pages.map(page => <li key={page}><Link to={page} offset={-90} hashSpy={page !== 'home'} spy onSetActive={this.handleOnSetActive}>{page}</Link></li>)}
                </ul>
              </nav>
              <nav className="social-menu">
                <SocialIcons />
              </nav>
            </div>
          </header>
          </Fragment>
        )
    }
}

export default Header;
