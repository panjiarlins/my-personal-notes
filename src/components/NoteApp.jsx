import React from 'react';
import { getInitialData, showFormattedDate } from '../utils';
import NoteAppBody from './NoteAppBody';

class NoteApp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notes: getInitialData(),
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
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

    onDeleteNoteHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchiveNoteHandler(id){

    }

    render(){
        return (
            <>
            <NoteAppBody
            addNote={this.onAddNoteHandler}
            notes={this.state.notes}
            showFormattedDate={showFormattedDate}
            onDelete={this.onDeleteNoteHandler}
            onArchive={this.onArchiveNoteHandler}
            />
            </>
        );
    }
}

export default NoteApp;