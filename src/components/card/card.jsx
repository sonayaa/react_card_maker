import React from "react";
import Style from "./card.module.css";

const Card = ({ card }) => {
  const { name, company, theme, title, email, message } = card;
  return (
    <li className={`${Style.preview} ${getStyles(theme)}`}>
      <div className={Style.img_area}>
        <img src="./favicon.ico" alt="" />
      </div>
      <div className={Style.txt_area}>
        <p className={Style.name}>{name}</p>
        <p className={Style.company}>{company}</p>
        <p className={Style.title}>{title}</p>
        <p className={Style.email}>{email}</p>
        <p className={Style.message}>{message}</p>
      </div>
    </li>
  );
};

function getStyles(theme) {
  switch (theme) {
    case "light":
      return Style.bg_light;
    case "dark":
      return Style.bg_dark;
    case "colorful":
      return Style.bg_colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;
