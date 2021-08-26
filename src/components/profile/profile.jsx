import React, { useState } from "react";
import Card from "../card/card";
import Maker from "../maker/maker";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Style from "./profile.module.css";
import { useHistory } from "react-router-dom";
import MakerAdd from "../maker_add/maker";

const Profile = ({ authService }) => {
  const history = useHistory();
  const onLogin = () => {
    const userId = history.location.state.id;
    return userId;
  };

  const [cards, setCards] = useState([
    {
      id: 1,
      name: "sona1",
      company: "LG CNS",
      title: "Frontend Developer",
      email: "ysona63@gmail.com",
      message: "don't forget to code your dream",
      theme: "light",
      fileName: "",
      fileURL: "",
    },
    {
      id: 2,
      name: "sona2",
      company: "메이드인헤븐",
      title: "Frontend Developer",
      email: "ysona63@gmail.com",
      message: "don't forget to code your dream",
      theme: "dark",
      fileName: "",
      fileURL: "",
    },
    {
      id: 3,
      name: "sona3",
      company: "성수카페",
      title: "Frontend Developer",
      email: "ysona63@gmail.com",
      message: "don't forget to code your dream",
      theme: "colorful",
      fileName: "",
      fileURL: "",
    },
  ]);

  const onAdd = (addCard) => {
    setCards([...cards, addCard]);
  };

  const onDelete = (cardId) => {
    const changeCard = cards.filter(card => card.id !== cardId)
    setCards(changeCard);
  };

  return (
    <>
      <Header onLogin={onLogin} authService={authService} />
      <section className={Style.profile}>
        <div className={Style.left}>
          <h2>Card Maker</h2>
          {cards.map((card) => (
            <Maker key={card.id} card={card} onDelete={onDelete}/>
          ))}
          <MakerAdd onAdd={onAdd} />
        </div>
        <div className={Style.right}>
          <h2>Card Preview</h2>
          <ul>
            {cards.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Profile;
