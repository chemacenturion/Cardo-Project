import React from 'react';
import './Navbar.css'
import { VscThreeBars } from 'react-icons/vsc'
import { VscChromeClose } from 'react-icons/vsc'
import { useState } from 'react';

const Mobile = () => {

  const sansStyle = {
    fontFamily: 'sans-serif',
    fontWeight: 400,
    padding: '2rem',
    cursor: 'pointer'
  }

  const [open, setOpen] = useState(false);

  const hamburgerIcon = <VscThreeBars className='menu__hamburger'
    onClick={() => setOpen(!open)} />

  const closeIcon = <VscChromeClose className='menu__close'
    onClick={() => setOpen(!open)} />

  return (
    <nav className='mobile__nav'>
      {open ? closeIcon : hamburgerIcon}
      {open && <ul style={{
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        top: 100,
        backgroundColor: 'whitesmoke',
        width: '100%',
        zIndex: 2,
        position: 'absolute',
        right: 0
      }}>
        <li style={sansStyle}>Deposit</li>
        <li style={sansStyle}>Dashboard</li>
        <li style={sansStyle}>Company</li>
        <li style={sansStyle}>Pricing</li>
      </ul>}
    </nav>
  )
};

export default Mobile;
