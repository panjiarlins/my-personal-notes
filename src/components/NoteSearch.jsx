import React from 'react';
import PropTypes from 'prop-types';

function NoteSearch({ onSearch }){
    return (
        <div className="search-bar">
            <input type="text" placeholder="Cari catatan berdasarkan judul ...." onKeyUp={event => onSearch(event.target.value)} />
        </div>
    );
}

NoteSearch.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default NoteSearch;
