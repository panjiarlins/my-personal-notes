import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';

function LoginPage({ loginSuccess }){
    const { locale } = React.useContext(LocaleContext);
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
            <h2>{locale === 'id' ? 'Login untuk menggunakan aplikasi' : 'Login to use app'}</h2>
            <LoginInput login={onLoginHandler} />
            <p>
                {locale === 'id' ? 'Belum punya akun? ' : 'Don\'t have an account? '}
                <Link to="/register">{locale === 'id' ? 'Daftar di sini' : 'Register here'}</Link>
            </p>
        </section>
    );
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
