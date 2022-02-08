import React from 'react';
import './Navbar.css'

const Desktop = () => {

    const sansStyle = {
        fontFamily: 'sans-serif',
        fontWeight: 400,
        padding: '1rem'
    }

    return (
        <div className='desktop__nav'>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                paddingLeft: '5rem'
            }}>
                <li style={sansStyle}>Deposit</li>
                <li style={sansStyle}>Dashboard</li>
                <li style={sansStyle}>Company</li>
                <li style={sansStyle}>Pricing</li>
            </ul>
        </div>
    )
};

export default Desktop;
