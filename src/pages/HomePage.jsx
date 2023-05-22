import React from 'react';
import NoteAppBody from '../components/NoteAppBody';
import NewNoteButton from '../components/NewNoteButton';
import { useSearchParams } from 'react-router-dom';
import { getActiveNotes } from '../utils/network-data';
import IsLoadingContext from '../contexts/IsLoadingContext';

function HomePage(){
    const { toggleIsLoading } = React.useContext(IsLoadingContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword') || '';
    const [notes, setNotes] = React.useState([]);

    React.useEffect(() => {
        toggleIsLoading(true);
        getActiveNotes()
            .then(({ data }) => setNotes(data))
            .finally(() => toggleIsLoading(false));
    }, []);

    const onSearchHandler = event => {
        setSearchParams({
            keyword: event.target.value,
        });
    }
    
    return (
        <>
        <NoteAppBody
        isArchived={false}
        notes={notes}
        keyword={keyword}
        onSearch={onSearchHandler}
        />
        <div className="homepage__action">
            <NewNoteButton />
        </div>
        </>
    );
}

export default HomePage;
