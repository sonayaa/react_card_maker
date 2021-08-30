import React, { useState } from "react";
import Card from "../card/card";
import Maker from "../maker/maker";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Style from "./profile.module.css";
import { useHistory } from "react-router-dom";
import MakerAdd from "../maker_add/maker";

const Profile = ({ FileBtn, authService }) => {
  const history = useHistory();
  const onLogin = () => {
    const userId = history.location.state.id;
    return userId;
  };

  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });

  const addCard = (addCard) => {
    setCards({ ...cards, addCard });
  };

  const updateCard = (card) => {
    // 방법1.
    // const updated = {...cards}; // 업데이트 하는 시점에 이미 cards값이 변경되었을수도 있다. 동기적으로 사용 할수 없는경우. 아래와같이 콜백 방식으로 바꿀수 있다.
    // updated[card.id] = card;
    // setCards(updated);

    // 방법2.
    setCards((cards) => {
      // 이전상태값의 cards를 받아온다.
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <>
      <Header onLogin={onLogin} authService={authService} />
      <section className={Style.profile}>
        <div className={Style.left}>
          <h2>Card Maker</h2>
          {Object.keys(cards).map((key) => (
            <Maker
              key={key}
              FileBtn={FileBtn}
              card={cards[key]}
              updateCard={updateCard}
              deleteCard={deleteCard}
              
            />
          ))}
          <MakerAdd
            FileBtn={FileBtn}
            addCard={addCard}
            updateCard={updateCard}
          />
        </div>
        <div className={Style.right}>
          <h2>Card Preview</h2>
          <ul>
            {Object.keys(cards).map((key) => (
              <Card key={key} card={cards[key]} />
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Profile;
