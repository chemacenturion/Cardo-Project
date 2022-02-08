import React from 'react';
import { GridRow } from 'emotion-flex-grid';
import Vector from '../../images/Vector.png';
import './Navbar.css';
import Desktop from '../Navbar/Desktop';
import Mobile from '../Navbar/Mobile'


const Navbar = () => {
  return (
    <GridRow>
      <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'flex',
        }}>
          <img style={{ paddingLeft: '1.5rem' }} src={Vector} alt='Stars' />
          <h1 style={{
            fontFamily: 'Cormorant Garamond',
            paddingTop: '0.5rem',
            paddingLeft: '1rem'
          }}>Cardo</h1>
        </div>
        <Desktop />
        <Mobile />
      </div>
    </GridRow>
  )
};

export default Navbar;
