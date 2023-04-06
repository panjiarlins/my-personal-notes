import React from 'react';

function NoteAppHeader({ onSearch }){
    return (
        <div className="note-app__header">
            <h1>Catatan</h1>
            <input type="text" placeholder="Cari catatan ...." onKeyUp={event => onSearch(event.target.value)} />
        </div>
    ); 
}

export default NoteAppHeader;
