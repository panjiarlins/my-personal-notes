import React from 'react';
import NoteItem from './NoteItem';

function NotesList({ notes, showFormattedDate, onDelete, onArchive }){
    return (
        <div>
            <h2>Catatan Aktif</h2>
            {
                !!notes.length ?
                <div className="notes-list">
                    {
                        notes.map((note) => (
                            <NoteItem
                            key={note.id}
                            {...note}
                            showFormattedDate={showFormattedDate}
                            onDelete={onDelete}
                            onArchive={onArchive}
                            />
                        ))
                    }
                </div>
                : <div className="notes-list__empty-message">Tidak Ada Catatan</div>
            }
        </div>
    );
}

export default NotesList;
