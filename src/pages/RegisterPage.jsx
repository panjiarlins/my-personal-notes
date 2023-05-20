import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';

function RegisterPage(){
    const { locale } = React.useContext(LocaleContext);
    const navigate = useNavigate();

    async function onRegisterHandler({ name, email, password }){
        const { error } = await register({ name, email, password });
        if (!error){
            navigate('/');
        }
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
