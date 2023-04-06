import React from 'react';
import NoteItem from './NoteItem';

function NotesList({ notes, showFormattedDate, onDelete, onArchive, isArchived }){
    return (
        <div>
            <h2>{isArchived ? 'Arsip' : 'Catatan Aktif'}</h2>
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
                            isArchived={isArchived}
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
