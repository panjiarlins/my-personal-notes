import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemAction';

function NoteItem({ title, createdAt, body, showFormattedDate, id, onDelete, onArchive }){
    return (
        <div className="note-item">
            <NoteItemContent title={title} createdAt={createdAt} body={body} showFormattedDate={showFormattedDate} />
            <NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive} />
        </div>
    );
}

export default NoteItem;
