import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NoteItemTitle from './NoteItemTitle';
import NoteItemDate from './NoteItemDate';
import NoteItemBody from './NoteItemBody';

function NoteItem({ id, title, createdAt, body }){
    return (
        <div className="note-item">
            <h3><Link to={`/notes/${id}`}><NoteItemTitle title={title} /></Link></h3>
            <NoteItemDate createdAt={createdAt} />
            <NoteItemBody body={body} />
        </div>
    );
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

export default NoteItem;
