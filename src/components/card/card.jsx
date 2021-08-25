import React from 'react';
import Style from './card.module.css';

const Card = (props) => {
    return (
        <li className={`${Style.preview} ${Style.bg_light}`}>
            <div className={Style.img_area}>
                <img src="./favicon.ico" alt="" />
            </div>
            <div className={Style.txt_area}>
                <p className={Style.name}>Sona</p>
                <p className={Style.company}>LG CNS</p>
                <p className={Style.title}>Frontend Developer</p>
                <p className={Style.email}>ysona63@gmail.com</p>
                <p className={Style.message}>don't forget to code your dream</p>
            </div>
        </li>
    )
};

export default Card;