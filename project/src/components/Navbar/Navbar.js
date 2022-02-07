import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import './Navbar.css';

const Navbar = ({ currentPage, handlePageChange}) => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon =   <FaBars 
                            className="mobile-icon"
                            onClick={() => setOpen(!open)}
                            />

    const closeIcon =   <MdOutlineClose
                        className="mobile-icon"
                        onClick={() => setOpen(!open)}
                        />

    return (
        <>
        <nav className="navigation">
            <header className="header">Cardo</header>
        </nav>
        </>
    )
}

export default Navbar