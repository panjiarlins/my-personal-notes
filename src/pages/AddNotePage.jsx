import React from 'react';
import { addNote } from '../utils/network-data';
import { useNavigate } from 'react-router-dom';
import { BsCheckCircle } from 'react-icons/bs';
import useInput from '../hooks/useInput';

function AddNotePage(){
    const navigate = useNavigate();
    const [title, setTitle] = useInput('');
    const [body, setBody] = useInput('');

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        await addNote({ title, body })
        navigate('/');
    }

    return (
        <div className="add-new-page__input">
            <form onSubmit={onSubmitHandler}>
                <input className="add-new-page__input__title" type="text" placeholder="Masukkan judul catatan ...." value={title} onChange={setTitle} required />
                <textarea className="add-new-page__input__body" placeholder="Tuliskan catatanmu disini ...." value={body} onChange={setBody} required />
                <div className="add-new-page__action">
                    <button type="submit" className="action"><BsCheckCircle /></button>
                </div>
            </form>
        </div>
    );
}

export default AddNotePage;
