import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

function NoteAppHeader({ logout }){
    return (
        <header>
            <h1><Link to="/">Aplikasi Catatan</Link></h1>
            <nav className="navigation">
                <ul>
                    <li><Link to="/archives">Arsip</Link></li>
                    <li><button className="button-logout" onClick={logout}><FiLogOut /></button></li>
                </ul>
            </nav>
        </header>
    ); 
}

NoteAppHeader.propTypes = {
    logout: PropTypes.func.isRequired,
};

export default NoteAppHeader;
