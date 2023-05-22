import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import LocaleContext from '../contexts/LocaleContext';
import IsLoadingContext from '../contexts/IsLoadingContext';
import { BiLoaderCircle } from 'react-icons/bi';

function RegisterInput({ register }){
    const { isLoading } = React.useContext(IsLoadingContext);
    const { locale } = React.useContext(LocaleContext);
    const [name, setName] = useInput('');
    const [email, setEmail] = useInput('');
    const [password, setPassword] = useInput('');
    const [confirmPassword, setConfirmPassword] = useInput('');

    const onSubmitHandler = event => {
        event.preventDefault();
        if (password === confirmPassword){
            register({ name, email, password });
        } else {
            alert(locale === 'id' ? 'Kata Sandi dan Kata Sandi Konfirmasi harus sama!' : 'Password and Password Confirmation must be same!');
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className="input-register">
            <label htmlFor="name">{locale === 'id' ? 'Nama' : 'Name'}</label>
            <input name="name" type="text" value={name} onChange={setName} required />

            <label htmlFor="email">Email</label>
            <input name="email" type="email" value={email} onChange={setEmail} required />

            <label htmlFor="password">{locale === 'id' ? 'Kata Sandi' : 'Password'}</label>
            <input name="password" type="password" value={password} onChange={setPassword} required />

            <label htmlFor="confirm-password">{locale === 'id' ? 'Kata Sandi Konfirmasi' : 'Password Confirmation'}</label>
            <input name="confirm-password" type="password" value={confirmPassword} onChange={setConfirmPassword} required />

            {
                isLoading ?
                <button disabled><BiLoaderCircle /></button>
                :
                <button>{locale === 'id' ? 'Daftar' : 'Register'}</button>
            }
        </form>
    );
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
};

export default RegisterInput;
