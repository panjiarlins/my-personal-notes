import React from 'react';
import PropTypes from 'prop-types';
import NoteSearch from './NoteSearch';
import NotesList from './NotesList';
import LocaleContext from '../contexts/LocaleContext';

function NoteAppBody({ notes, isArchived, keyword, onSearch }){
    const { locale } = React.useContext(LocaleContext);

    return (
        <>
        <h2>{isArchived ? (locale === 'id' ? 'Catatan Arsip' : 'Archived Note') : (locale === 'id' ? 'Catatan Aktif' : 'Active Note')}</h2>
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
        />
        </>
    );
}

NoteAppBody.propTypes = {
    notes: PropTypes.array.isRequired,
    isArchived: PropTypes.bool.isRequired,
    keyword: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
};

export default NoteAppBody;
