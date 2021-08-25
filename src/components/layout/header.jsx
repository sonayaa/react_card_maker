import React from 'react';
import Style from './layout.module.css';

const Header = (props) => {
    return (
        <header>
            <h1>Business Card Maker</h1>
            <button className={Style.logout_btn}>Logout</button>
        </header>
    )
};

export default Header;