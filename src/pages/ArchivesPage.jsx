import React from 'react';
import NoteAppBody from '../components/NoteAppBody';
import { useSearchParams } from 'react-router-dom';
import { getArchivedNotes } from '../utils/network-data';

function ArchivesPage(){
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword') || '';
    const [notes, setNotes] = React.useState([]);

    React.useEffect(() => {
        getArchivedNotes().then(({ data }) => {
            setNotes(data);
        });
    }, []);

    const onSearchHandler = event => {
        setSearchParams({
            keyword: event.target.value,
        });
    }

    return (
        <NoteAppBody
        isArchived={true}
        notes={notes}
        keyword={keyword}
        onSearch={onSearchHandler}
        />
    );
}

export default ArchivesPage;
