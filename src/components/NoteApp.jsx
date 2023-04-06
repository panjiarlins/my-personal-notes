import React from 'react';
import { getInitialData, showFormattedDate } from '../utils';
import NoteAppHeader from './NoteAppHeader';
import NoteAppBody from './NoteAppBody';

class NoteApp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notes: getInitialData(),
            keyword: '',
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
        this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
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
        console.log(notes);
        this.setState({ notes });
    }

    onArchiveNoteHandler(id){
        this.setState((prevState) => {
            const notes = prevState.notes.map(note => {
                if (note.id === id){
                    note.archived = !note.archived;
                }
                return note;
            });
            return { notes };
        });
    }

    onSearchNoteHandler(keyword){
        this.setState({ keyword });
    }

    render(){
        return (
            <>
            <NoteAppHeader onSearch={this.onSearchNoteHandler} />
            <NoteAppBody
            addNote={this.onAddNoteHandler}
            notes={
                this.state.keyword.trim() === '' ?
                this.state.notes
                : this.state.notes.filter(note => {
                    const keyword = this.state.keyword.trim().toLowerCase();
                    const title = note.title.trim().toLowerCase();
                    return title.includes(keyword);
                })
            }
            showFormattedDate={showFormattedDate}
            onDelete={this.onDeleteNoteHandler}
            onArchive={this.onArchiveNoteHandler}
            />
            </>
        );
    }
}

export default NoteApp;