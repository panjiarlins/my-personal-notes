import React from 'react';
import NoteAppHeader from '../components/NoteAppHeader';
import NoteAppBody from '../components/NoteAppBody';
import { getArchivedNotes } from '../utils/local-data';
import { showFormattedDate } from '../utils';

class ArchivesPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notes: getArchivedNotes(),
        };
    }

    render(){
        return (
            <>
            <NoteAppHeader />
            <NoteAppBody
            isArchived={true}
            notes={this.state.notes}
            showFormattedDate={showFormattedDate}
            />
            </>
        );
    }
}

export default ArchivesPage;
