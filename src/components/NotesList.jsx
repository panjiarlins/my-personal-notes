import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';
import LocaleContext from '../contexts/LocaleContext';

function NotesList({ notes }){
    const { locale } = React.useContext(LocaleContext);

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
                    <p>{locale === 'id' ? 'Tidak ada catatan' : 'No Notes'}</p>
                </div>
            }
        </div>
    );
}

NotesList.propTypes = {
    notes: PropTypes.array.isRequired,
};

export default NotesList;
