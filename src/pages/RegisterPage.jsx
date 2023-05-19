import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';

function RegisterPage(){
    const navigate = useNavigate();

    async function onRegisterHandler({ name, email, password }){
        const { error } = await register({ name, email, password });

        if (!error){
            navigate('/');
        }
    }

    return (
        <section className='register-page'>
            <h2>Isi form untuk mendaftar akun.</h2>
            <RegisterInput register={onRegisterHandler} />
            <p>Sudah punya akun? <Link to="/">Login di sini</Link></p>
        </section>
    );
}

export default RegisterPage;
