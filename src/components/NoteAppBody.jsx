import React from 'react';
import NoteInput from './NoteInput';
import NotesList from './NotesList';

function NoteAppBody({ addNote, notes, showFormattedDate, onDelete, onArchive }){
    return (
        <div className="note-app__body">
            <NoteInput addNote={addNote} />
            <NotesList notes={notes} showFormattedDate={showFormattedDate} onDelete={onDelete} onArchive={onArchive} />
        </div>
    );
}

export default NoteAppBody;
