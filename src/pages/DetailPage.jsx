import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { showFormattedDate } from '../utils';
import ArchiveButton from '../components/ArchiveButton';
import DeleteButton from '../components/DeleteButton';
import { getNote, archiveNote, unarchiveNote, deleteNote } from '../utils/network-data';

function DetailPage(){
    const navigate = useNavigate();
    const { id } = useParams();
    const [note, setNote] = React.useState(null);

    React.useEffect(() => {
        getNote(id).then(({ data }) => {
            setNote(data);
        });
    }, [id]);
    
    const onArchiveHandler = async () => {
        if (note.archived){
            await unarchiveNote(id);
            navigate('/archives');
        } else{
            await archiveNote(id);
            navigate('/');
        }
    }
    
    const onDeleteHandler = async () => {
        await deleteNote(id);
        navigate('/');
    }

    if (note === null){
        return null;
    }
    
    return (
        <div className="detail-page">
            <div className="detail-page__title">{note.title}</div>
            <div className="detail-page__createdAt">{showFormattedDate(note.createdAt)}</div>
            <div className="detail-page__body">{note.body}</div>
            <div className="detail-page__action">
                <ArchiveButton id={id} onArchive={onArchiveHandler} isArchived={note.archived} />
                <DeleteButton id={id} onDelete={onDeleteHandler} />
            </div>
        </div>
    );
}

export default DetailPage;
