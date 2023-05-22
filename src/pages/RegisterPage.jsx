import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';
import IsLoadingContext from '../contexts/IsLoadingContext';

function RegisterPage(){
    const { toggleIsLoading } = React.useContext(IsLoadingContext);
    const { locale } = React.useContext(LocaleContext);
    const navigate = useNavigate();

    function onRegisterHandler({ name, email, password }){
        toggleIsLoading(true);
        register({ name, email, password })
            .then(({ error }) => !error && navigate('/'))
            .finally(() => toggleIsLoading(false));
    }

    return (
        <section className="register-page">
            <h2>{locale === 'id' ? 'Isi formulir untuk mendaftar' : 'Fill in the form to register'}</h2>
            <RegisterInput register={onRegisterHandler} />
            <p>
                {locale === 'id' ? 'Sudah punya akun? ' : 'Already have an account? '}
                <Link to="/">{locale === 'id' ? 'Masuk di sini' : 'Login here'}</Link>
            </p>
        </section>
    );
}

export default RegisterPage;
