import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark main-header">
        <div className="container-fluid">
            <Link to="/" className='navbar-brand m-auto'>
                Frontend Interview Questions
            </Link>
        </div>
    </nav>
  )
}

export default Header