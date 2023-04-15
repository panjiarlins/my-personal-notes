import React from 'react';
import PropTypes from 'prop-types';

function NoteItemDate({ createdAt, showFormattedDate }){
    return <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>;
}

NoteItemDate.propTypes = {
    createdAt: PropTypes.string.isRequired,
    showFormattedDate: PropTypes.func.isRequired,
};

export default NoteItemDate;
