import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

function NotesList({ notes, showFormattedDate }){
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
                            showFormattedDate={showFormattedDate}
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
    showFormattedDate: PropTypes.func.isRequired,
};

export default NotesList;
