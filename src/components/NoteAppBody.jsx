import React from 'react';
import NoteInput from './NoteInput';
import NotesList from './NotesList';

function NoteAppBody({ addNote, notes, showFormattedDate, onDelete, onArchive }){
    return (
        <div className="note-app__body">
            <NoteInput addNote={addNote} />
            <NotesList
            notes={notes.filter(note => note.archived === false)}
            showFormattedDate={showFormattedDate}
            onDelete={onDelete}
            onArchive={onArchive}
            isArchived={false}
            />
            <NotesList
            notes={notes.filter(note => note.archived === true)}
            showFormattedDate={showFormattedDate}
            onDelete={onDelete}
            onArchive={onArchive}
            isArchived={true}
            />
        </div>
    );
}

export default NoteAppBody;
