import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }){
    const [email, setEmail] = useInput('');
    const [password, setPassword] = useInput('');

    const onSubmitHandler = event => {
        event.preventDefault();

        login({
            email,
            password,
        });
    }

    return (
        <form onSubmit={onSubmitHandler} className='input-login'>
            <label htmlFor="email">Email</label>
            <input name="email" type="email" value={email} onChange={setEmail} />

            <label htmlFor="password">Password</label>
            <input name="password" type="password" value={password} onChange={setPassword} />

            <button>Login</button>
        </form>
    );
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
};

export default LoginInput;
