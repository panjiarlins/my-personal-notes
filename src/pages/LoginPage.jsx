import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';
import IsLoadingContext from '../contexts/IsLoadingContext';

function LoginPage({ loginSuccess }){
    const { toggleIsLoading } = React.useContext(IsLoadingContext);
    const { locale } = React.useContext(LocaleContext);
    const navigate = useNavigate();

    function onLoginHandler({ email, password }){
        toggleIsLoading(true);
        login({ email, password })
            .then(({ error, data }) => {
                if (!error){
                    loginSuccess(data);
                    navigate('/');
                }
            })
            .finally(() => toggleIsLoading(false));
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
