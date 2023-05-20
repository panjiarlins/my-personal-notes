import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import ToggleTheme from './ToggleTheme';
import ToggleLocale from './ToggleLocale';
import LocaleContext from '../contexts/LocaleContext';

function NoteAppHeader({ name, logout }){
    const { locale } = React.useContext(LocaleContext);

    return (
        <header>
            <h1><Link to="/">{locale === 'id' ? 'Aplikasi Catatan' : 'Note App'}</Link></h1>
            <nav className="navigation">
                <ul>
                    {!!name && <li><Link to="/archives">{locale === 'id' ? 'Terarsip' : 'Archived'}</Link></li>}
                    <li><ToggleLocale /></li>
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
