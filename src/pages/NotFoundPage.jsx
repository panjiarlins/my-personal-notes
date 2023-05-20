import React from 'react';
import LocaleContext from '../contexts/LocaleContext';

function NotFoundPage(){
    const { locale } = React.useContext(LocaleContext);
    
    return (
        <div>
            <h2>404</h2>
            <p>{locale === 'id' ? 'Halaman tidak ditemukan' : 'Page not found'}</p>
        </div>
    );
}

export default NotFoundPage;
