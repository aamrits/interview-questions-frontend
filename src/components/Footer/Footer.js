import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
        This website is developed by <a href="https://github.com/aamrits" target="_blank" rel="noreferrer">Amrit</a>. &copy; {new Date().getFullYear()}
    </footer>
  )
}

export default Footer;