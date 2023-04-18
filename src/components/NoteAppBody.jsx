import React from 'react';
import PropTypes from 'prop-types';
import NoteSearch from './NoteSearch';
import NotesList from './NotesList';

function NoteAppBody({ notes, isArchived, keyword, onSearch, showFormattedDate}){
    return (
        <>
        <h2>Catatan {isArchived ? 'Arsip' : 'Aktif'}</h2>
        <NoteSearch keyword={keyword} onSearch={onSearch} />
        <NotesList
        notes={
            keyword.trim() === '' ?
            notes
            :
            notes.filter(
                note => note.title.trim().toLowerCase().includes(
                    keyword.trim().toLowerCase()
                )
            )
        }
        showFormattedDate={showFormattedDate}
        />
        </>
    );
}

NoteAppBody.propTypes = {
    isArchived: PropTypes.bool.isRequired,
    notes: PropTypes.array.isRequired,
    keyword: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
    showFormattedDate: PropTypes.func.isRequired,
};

export default NoteAppBody;
