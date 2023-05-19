import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/network-data';

function LoginPage({ loginSuccess }){
    const navigate = useNavigate();

    async function onLoginHandler({ email, password }){
        const { error, data } = await login({ email, password });

        if (!error){
            loginSuccess(data);
            navigate('/');
        }
    }

    return (
        <section className='login-page'>
            <h2>Yuk, login untuk menggunakan aplikasi.</h2>
            <LoginInput login={onLoginHandler} />
            <p>Belum punya akun? <Link to="/">Daftar di sini</Link></p>
        </section>
    );
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
