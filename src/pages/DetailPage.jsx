import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNote } from '../utils/local-data';
import { showFormattedDate } from '../utils';
import ArchiveButton from '../components/ArchiveButton';
import DeleteButton from '../components/DeleteButton';
import { archiveNote, unarchiveNote, deleteNote } from '../utils/local-data';

function DetailPage(){
    const { id } = useParams();
    const note = getNote(id);
    const navigate = useNavigate();

    function onArchive(id, isArchived){
        if (isArchived){
            unarchiveNote(id);
            navigate('/archives');
        } else{
            archiveNote(id);
            navigate('/');
        }
    }

    function onDelete(id){
        deleteNote(id);
        navigate('/');
    }

    return (
        <div className="detail-page">
            <div className="detail-page__title">{note.title}</div>
            <div className="detail-page__createdAt">{showFormattedDate(note.createdAt)}</div>
            <div className="detail-page__body">{note.body}</div>
            <div className="detail-page__action">
                <ArchiveButton id={id} onArchive={onArchive} isArchived={note.archived} />
                <DeleteButton id={id} onDelete={onDelete} />
            </div>
        </div>
    );
}

export default DetailPage;
