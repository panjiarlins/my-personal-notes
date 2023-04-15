import React from 'react';
import PropTypes from 'prop-types';

function NoteItemTitle({ title }){
    return <p className="note-item__title">{title}</p>;
}

NoteItemTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default NoteItemTitle;
