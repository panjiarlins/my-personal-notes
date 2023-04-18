import React from 'react';
import PropTypes from 'prop-types';
import { addNote } from '../utils/local-data';
import { useNavigate } from 'react-router-dom';
import { BsCheckCircle } from 'react-icons/bs';

function AddNewPageWrapper(){
    const navigate = useNavigate();

    const onNavigate = path => {
        navigate(path);
    }

    return <AddNewPage onNavigate={onNavigate} />;
}

class AddNewPage extends React.Component{
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
        addNote(this.state);
        this.props.onNavigate('/');
    }

    render(){
        return (
            <div className="add-new-page__input">
                <p className="add-new-page__input__char-limit">Sisa karakter: {this.numTitleCharLimit - this.state.title.length}</p>
                <form onSubmit={this.onSubmitEventHandler}>
                    <input className="add-new-page__input__title" type="text" placeholder="Masukkan judul catatan ...." value={this.state.title} onChange={this.onTitleChangeEventHandler} required />
                    <textarea className="add-new-page__input__body" placeholder="Tuliskan catatanmu disini ...." value={this.state.body} onChange={this.onBodyChangeEventHandler} required />
                    <div className="add-new-page__action">
                        <button type="submit" className="action"><BsCheckCircle /></button>
                    </div>
                </form>
            </div>
        );
    }
}

AddNewPage.propTypes = {
    onNavigate: PropTypes.func.isRequired,
};

export default AddNewPageWrapper;
