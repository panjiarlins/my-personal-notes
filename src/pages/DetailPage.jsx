import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { showFormattedDate } from '../utils';
import ArchiveButton from '../components/ArchiveButton';
import DeleteButton from '../components/DeleteButton';
import { getNote, archiveNote, unarchiveNote, deleteNote } from '../utils/network-data';
import IsLoadingContext from '../contexts/IsLoadingContext';
import Loading from '../components/Loading';

function DetailPage(){
    const { isLoading, toggleIsLoading } = React.useContext(IsLoadingContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const [note, setNote] = React.useState(null);
    
    React.useEffect(() => {
        toggleIsLoading(true);
        getNote(id)
            .then(({ data }) => setNote(data))
            .finally(() => toggleIsLoading(false));
    }, [id]);
    
    const onArchiveHandler = async () => {
        toggleIsLoading(true);
        if (note.archived){
            try {
                await unarchiveNote(id);
            } finally {
                toggleIsLoading(false);
                navigate('/archives');
            }
        } else{
            try {
                await archiveNote(id);
            } finally {
                toggleIsLoading(false);
                navigate('/');
            }
        }
    }
    
    const onDeleteHandler = async () => {
        toggleIsLoading(true);
        try {
            await deleteNote(id);
        } finally {
            toggleIsLoading(false);
            navigate('/');
        }
    }
    
    if (isLoading){
        return <Loading />;
    } else if (note === null){
        return null;
    } else {
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
}

export default DetailPage;
