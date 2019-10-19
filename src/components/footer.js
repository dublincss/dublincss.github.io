import React, { Component } from "react";
import Twitter from "../images/twitter.svg"
import Meetup from "../images/meetup.svg"

class Footer extends Component {
  componentDidMount() {
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-142951025-2');
  }
  render() {
    return (
      <footer className="site-footer">
        <a
          href="https://meetup.com/DublinCSS"
          alt="DublinCSS group page"
          target="_blank"
          rel="noopener noreferrer"
        >DublinCSS community</a> - 2019

        <nav class="site-menu">
          <a aria-current="page" class="site-menu__item" href="https://twitter.com/DublinCSS" target="_blank"> <img src={Twitter} className="site-header__logoFooter" /> </a>
          <a class="site-menu__item" href="https://meetup.com/DublinCSS" target="_blank"> <img src={Meetup} className="site-header__logoFooter" /> </a>
        </nav>

      </footer>
    );
  }
}

export default Footer;
