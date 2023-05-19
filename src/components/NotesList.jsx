import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

function NotesList({ notes }){
    return (
        <div>
            {
                !!notes.length ?
                <div className="notes-list">
                    {
                        notes.map((note) => (
                            <NoteItem
                            key={note.id}
                            {...note}
                            />
                        ))
                    }
                </div>
                :
                <div className="notes-list-empty">
                    <p>Tidak ada catatan</p>
                </div>
            }
        </div>
    );
}

NotesList.propTypes = {
    notes: PropTypes.array.isRequired,
};

export default NotesList;
