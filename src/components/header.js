import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/dublincss-logo.png"

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <Link
      to='/'
      className="site-header__logo-link"
    >
      <img
        src={Logo}
        alt={siteTitle}
        className="site-header__logo"
      />
    </Link>
    <nav className="site-menu">
      <Link
        to='/'
        className="site-menu__item"
      >
        Home
      </Link>
      <Link
        to='/posts'
        className="site-menu__item"
      >
        Posts
      </Link>
      <Link
        to='/about'
        className="site-menu__item"
      >
        About
      </Link>
      <Link
        to='/code-of-conduct'
        className="site-menu__item"
      >
        Code of conduct
      </Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
