import React from 'react';
import PropTypes from 'prop-types';
import NoteItemTitle from './NoteItemTitle';
import NoteItemDate from './NoteItemDate';
import NoteItemBody from './NoteItemBody';

function NoteItem({ title, createdAt, body, showFormattedDate }){
    return (
        <div className="note-item">
            <NoteItemTitle title={title} />
            <NoteItemDate createdAt={createdAt} showFormattedDate={showFormattedDate} />
            <NoteItemBody body={body} />
        </div>
    );
}

NoteItem.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    showFormattedDate: PropTypes.func.isRequired,
};

export default NoteItem;
