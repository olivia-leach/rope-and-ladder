import React from 'react'
import SocialIcons from './SocialIcons'
import '../styles/Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => (
  <footer>
    <SocialIcons />
    <p className="copyright">
      Copyright {new Date().getFullYear()} - Rope and Ladder. All rights
      reserved.
    </p>
    <p className="copyright">
      <Link to="/privacy-policy">Privacy Policy</Link> |{' '}
      <Link to="/return-policy">Return Policy</Link>
    </p>
  </footer>
)

export default Footer
