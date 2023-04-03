import React from 'react';
import { getInitialData } from '../utils';
import NoteInput from './NoteInput';

class NoteApp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notes: getInitialData(),
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onAddNoteHandler({ title, body }){
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        archived: false,
                    },
                ],
            };
        });
    }

    render(){
        return (
            <>
            <NoteInput addNote={this.onAddNoteHandler} />
            </>
        )
    }
}

export default NoteApp;