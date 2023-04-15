import React from 'react';
import { Link } from 'react-router-dom';

function NoteAppHeader(){
    return (
        <header>
            <nav className="navigation">
                <ul>
                    <li><h1><Link to="/">Aplikasi Catatan</Link></h1></li>
                    <li><Link to="/archives">Arsip</Link></li>
                </ul>
            </nav>
        </header>
    ); 
}

export default NoteAppHeader;
