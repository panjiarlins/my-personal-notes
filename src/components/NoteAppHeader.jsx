import React from 'react';
import NoteSearch from './NoteSearch';

function NoteAppHeader({ onSearch }){
    return (
        <div className="note-app__header">
            <h1>Catatan</h1>
            <NoteSearch onSearch={onSearch} />
        </div>
    ); 
}

export default NoteAppHeader;
