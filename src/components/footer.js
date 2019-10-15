import React, { Component } from "react";

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
      </footer>
    );
  }
}

export default Footer;
