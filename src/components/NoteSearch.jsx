import React from 'react';

function NoteSearch({ onSearch }){
    return (
        <div className="note-search">
            <input type="text" placeholder="Cari catatan ...." onKeyUp={event => onSearch(event.target.value)} />
        </div>
    );
}

export default NoteSearch;
