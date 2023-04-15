import React from 'react';
import PropTypes from 'prop-types';
import NoteSearch from './NoteSearch';
import NotesList from './NotesList';

class NoteAppBody extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            keyword: '',
        };

        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onSearchHandler(keyword){
        this.setState({ keyword });
    }

    render(){
        return (
            <main>
                <h2>Catatan {this.props.isArchived ? 'Arsip' : 'Aktif'}</h2>
                <NoteSearch onSearch={this.onSearchHandler} />
                <NotesList
                notes={
                    this.state.keyword.trim() === '' ?
                    this.props.notes
                    :
                    this.props.notes.filter(note => {
                        const keyword = this.state.keyword.trim().toLowerCase();
                        const title = note.title.trim().toLowerCase();
                        return title.includes(keyword);
                    })
                }
                showFormattedDate={this.props.showFormattedDate}
                />
            </main>
        );
    }
}

NoteAppBody.propTypes = {
    isArchived: PropTypes.bool.isRequired,
    notes: PropTypes.array.isRequired,
};

export default NoteAppBody;
