import React from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';

function NoteSearch({ keyword, onSearch }){
    const { locale } = React.useContext(LocaleContext);
    
    return (
        <div className="search-bar">
            <input
            type="text"
            placeholder={locale === 'id' ? "Cari berdasarkan judul ...." : "Search by title ...."}
            value={keyword}
            onChange={onSearch}
            />
        </div>
    );
}

NoteSearch.propTypes = {
    keyword: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
};

export default NoteSearch;
