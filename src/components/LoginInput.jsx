import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import LocaleContext from '../contexts/LocaleContext';

function LoginInput({ login }){
    const { locale } = React.useContext(LocaleContext);
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

            <label htmlFor="password">{locale === 'id' ? 'Kata Sandi' : 'Password'}</label>
            <input name="password" type="password" value={password} onChange={setPassword} />

            <button>{locale === 'id' ? 'Masuk' : 'Login'}</button>
        </form>
    );
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
};

export default LoginInput;
