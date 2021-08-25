import React from 'react';
import Header from '../layout/header';
import Footer from '../layout/footer';
import Style from './auth.module.css';

const Auth = (props) => {
    
    const loginGoogle = () => {
        console.log('muyaho!')
    }

    const loginGithub = () => {
        console.log('muyaho!')
    }

    return (
        <>
        <div className={Style.modal}>
            <Header />
            <section className={Style.auth}>
                <h2>Login</h2>
                <button onClick={loginGoogle}>Google</button>
                <button>Github</button>
            </section>
            <Footer />
        </div>
        <div className={Style.dim}></div>
        </>
    )
};

export default Auth;