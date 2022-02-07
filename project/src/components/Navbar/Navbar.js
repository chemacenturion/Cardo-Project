import React from 'react';
import { GridRow } from 'emotion-flex-grid';
import Vector from '../../images/Vector.png';
import hamburger from '../../images/hamburger.png'
import './Navbar.css'

const Navbar = () => {
  return (
      <GridRow>
        <div className='navigation__container'>
            <div className='navigation__container-stars'>
                <img className='container__star-1' src={Vector} alt='Stars' />
                <img className='container__star-2' src={Vector} alt='Stars' />
            </div>
            <h1 className='navigation__container-header'>Cardo</h1>
            <ul className='navigation__container-menu'>
                <li>Deposit</li>
                <li>Dashboard</li>
                <li>Company</li>
                <li>Pricing</li>
            </ul>
            <img className='navigation__container-hamburger' src={hamburger} alt='hamburger-menu' />
        </div>
      </GridRow>
  )
};

export default Navbar;
