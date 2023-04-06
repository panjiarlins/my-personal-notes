import React from 'react';

class NoteInput extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.numTitleCharLimit = 50;

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event){
        this.setState(() => {
            return {
                title: event.target.value.slice(0, this.numTitleCharLimit),
            };
        });
    }

    onBodyChangeEventHandler(event){
        this.setState(() => {
            return {
                body: event.target.value,
            };
        });
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render(){
        return (
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <p className="note-input__title__char-limit">Sisa karakter: {this.numTitleCharLimit - this.state.title.length}</p>
                <form onSubmit={this.onSubmitEventHandler}>
                    <input className="note-input__title" type="text" placeholder="Masukkan judul catatan ...." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    <textarea className="note-input__body" placeholder="Tuliskan catatanmu disini ...." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                    <button type="submit">Buat</button>
                </form>
            </div>
        );
    }
}

export default NoteInput;
