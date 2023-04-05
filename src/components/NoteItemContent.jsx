import React from 'react';
import NoteItemTitle from './NoteItemTitle';
import NoteItemDate from './NoteItemDate';
import NoteItemBody from './NoteItemBody';

function NoteItemContent({ title, createdAt, body, showFormattedDate }){
    return (
        <div className="note-item__content">
            <NoteItemTitle title={title} />
            <NoteItemDate createdAt={createdAt} showFormattedDate={showFormattedDate} />
            <NoteItemBody body={body} />
        </div>
    );
}

export default NoteItemContent;
