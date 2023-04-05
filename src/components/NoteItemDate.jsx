import React from 'react';

function NoteItemDate({ createdAt, showFormattedDate }){
    return <p className="note-item__date">{showFormattedDate(createdAt)}</p>;
}

export default NoteItemDate;
