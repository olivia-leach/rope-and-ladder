import React, { useCallback, useState } from 'react';
import { Link } from 'react-scroll'
import { useHistory } from 'react-router';

import SocialIcons from '../SocialIcons';

import './Header.scss'

const pages = ['home', 'store', 'about', 'listen']

const Header = () => {
  const { hash } = useHistory().location
  const [showNav, setShowNav] = useState(false)
  const [isHeaderDark, setIsHeaderDark] = useState(hash?.substr(1) || false)

  const toggleNav = useCallback(() => {
    setShowNav(!showNav)
  }, [showNav])

  const handleOnSetActive = useCallback((route: string) => {
    setIsHeaderDark(route !== 'home')
  }, [])

  return (
    <>
    <div className='vertical-nav'>
      <button onClick={toggleNav} className={`menu-button ${showNav ? 'hide' : ''}`}>
        {showNav ? <i className='fa fa-times' /> : <i className='fa fa-bars' />}
      </button>
      <div className={`nav-open ${!showNav ? 'hide' : ''}`}>
        <button onClick={toggleNav} className='menu-button'>
          {showNav ? <i className='fa fa-times' /> : <i className='fa fa-bars' />}
        </button>
        <div className='vertical-nav-links'>
          {pages.map(page => <div key={page} className='nav-item'><Link to={page} onClick={toggleNav}>{page}</Link></div>)}
        </div>
      </div>
    </div>
      <header className={`main-header ${isHeaderDark ? 'is-dark' : ''} ${window.scrollY}`}>
      <div className="container">
        <nav className="main-menu">
          <ul>
            {pages.map(page => <li key={page}><Link to={page} offset={-90} hashSpy={page !== 'home'} spy onSetActive={handleOnSetActive}>{page}</Link></li>)}
          </ul>
        </nav>
        <nav className="social-menu">
          <SocialIcons />
        </nav>
      </div>
    </header>
    </>
  )
}

export default Header
