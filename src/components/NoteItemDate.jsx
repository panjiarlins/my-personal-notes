import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils';

function NoteItemDate({ createdAt }){
    return <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>;
}

NoteItemDate.propTypes = {
    createdAt: PropTypes.string.isRequired,
};

export default NoteItemDate;
