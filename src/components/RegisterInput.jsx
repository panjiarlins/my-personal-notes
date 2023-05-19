import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }){
    const [name, setName] = useInput('');
    const [email, setEmail] = useInput('');
    const [password, setPassword] = useInput('');
    const [confirmPassword, setConfirmPassword] = useInput('');

    const onSubmitHandler = event => {
        event.preventDefault();

        if (password !== confirmPassword){
            alert("Password and password confirm must be same.");
            return;
        }

        register({
            name,
            email,
            password,
        });
    }

    return (
        <form onSubmit={onSubmitHandler} className='input-register'>
            <label htmlFor="name">Nama</label>
            <input name="name" type="text" value={name} onChange={setName} />

            <label htmlFor="email">Email</label>
            <input name="email" type="email" value={email} onChange={setEmail} />

            <label htmlFor="password">Password</label>
            <input name="password" type="password" value={password} onChange={setPassword} />

            <label htmlFor="confirm-password">Konfirmasi Password</label>
            <input name="confirm-password" type="password" value={confirmPassword} onChange={setConfirmPassword} />

            <button>Register</button>
        </form>
    );
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
};

export default RegisterInput;
