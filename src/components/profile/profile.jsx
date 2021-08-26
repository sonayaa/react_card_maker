import React from 'react';
import Card from '../card/card';
import Maker from '../maker/maker';
import Header from '../layout/header';
import Footer from '../layout/footer';
import Style from './profile.module.css';
import { useHistory } from 'react-router-dom';

const Profile = ({ authService }) => {
    
    const history = useHistory();
    const onLogin = () => {
        const userId = history.location.state.id
        return userId;
    }

    return (
        <>
        <Header onLogin={onLogin} authService={authService}/>
        <section className={Style.profile}>
            <div className={Style.left}>
                <h2>Card Maker</h2>
                <Maker />
            </div>
            <div className={Style.right}>
                <h2>Card Preview</h2>
                <ul>
                    <Card />
                </ul>
            </div>
        </section>
        <Footer />
        </>
    )
};

export default Profile;