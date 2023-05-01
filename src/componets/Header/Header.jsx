import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ligo from '../../../src/images/logo.png'

const Header = () => {
    return (
        <nav className='mx-auto d-flex justify-content-around mt-4'>
            <img style={{ height: 50, marginLeft: 20 }} src={ligo} alt="" />
            <input className='ps-4 rounded' type="text" name="" placeholder='Your Destination' />
            <Link to='/'>Home</Link>
            <Link to='/news'>News</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contact'>Contact</Link>
            <button className='yellow '><Link to='/login'>Login</Link></button>
        </nav>
    );
};

export default Header;