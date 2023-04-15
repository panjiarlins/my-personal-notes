import React from 'react';
import NoteAppHeader from '../components/NoteAppHeader';
import NoteAppBody from '../components/NoteAppBody';
import { getActiveNotes } from '../utils/local-data';
import { showFormattedDate } from '../utils';

class HomePage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notes: getActiveNotes(),
        };
    }

    render(){
        return (
            <>
            <NoteAppHeader />
            <NoteAppBody
            isArchived={false}
            notes={this.state.notes}
            showFormattedDate={showFormattedDate}
            />
            </>
        );
    }
}

export default HomePage;
