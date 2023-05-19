import React from 'react';
import PropTypes from 'prop-types';

function NoteSearch({ keyword, onSearch }){
    return (
        <div className="search-bar">
            <input
            type="text"
            placeholder="Cari catatan berdasarkan judul ...."
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
