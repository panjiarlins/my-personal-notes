import React from 'react';
import { addNote } from '../utils/network-data';
import { useNavigate } from 'react-router-dom';
import { BsCheckCircle } from 'react-icons/bs';
import useInput from '../hooks/useInput';
import LocaleContext from '../contexts/LocaleContext';

function AddNotePage(){
    const { locale } = React.useContext(LocaleContext);
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
                <input className="add-new-page__input__title" type="text" placeholder={locale === 'id' ? 'Judul catatan ....' : 'Note title ....'} value={title} onChange={setTitle} required />
                <textarea className="add-new-page__input__body" placeholder={locale === 'id' ? 'Tuliskan catatanmu disini ....' : 'Type your note here ....'} value={body} onChange={setBody} required />
                <div className="add-new-page__action">
                    <button type="submit" className="action"><BsCheckCircle /></button>
                </div>
            </form>
        </div>
    );
}

export default AddNotePage;
