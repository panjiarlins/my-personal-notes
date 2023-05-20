import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import ToggleTheme from './ToggleTheme';

function NoteAppHeader({ name, logout }){
    return (
        <header>
            <h1><Link to="/">Aplikasi Catatan</Link></h1>
            <nav className="navigation">
                <ul>
                    <li><Link to="/archives">Arsip</Link></li>
                    <li><ToggleTheme /></li>
                    {!!logout && <li><button className="button-logout" onClick={logout}><FiLogOut /></button></li>}
                    {!!name && <li>{name}</li>}
                </ul>
            </nav>
        </header>
    ); 
}

NoteAppHeader.propTypes = {
    name: PropTypes.string,
    logout: PropTypes.func,
};

export default NoteAppHeader;
