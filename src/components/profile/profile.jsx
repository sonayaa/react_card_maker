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
      name: "꼬부기",
      company: "kakao",
      title: "Frontend Developer",
      email: "turtleman@daum.com",
      message: "don't forget to code your dream",
      theme: "light",
      fileName: "꼬부기",
      fileURL: "http://res.cloudinary.com/dnrdrwyas/image/upload/v1630330107/mk3pbiynob7tssoncuu5.jpg",
    },
    2: {
      id: 2,
      name: "파이리",
      company: "naver",
      title: "Backend Developer",
      email: "fire123@naver.com",
      message: "don't forget to code your dream",
      theme: "dark",
      fileName: "파이리",
      fileURL: "http://res.cloudinary.com/dnrdrwyas/image/upload/v1630330157/fdbzjr3dktklvmgu7oci.jpg",
    },
    3: {
      id: 3,
      name: "피카츄",
      company: "Coding Cafe",
      title: "CAFE CEO",
      email: "electro**@gmail.com",
      message: "pi- pi-",
      theme: "colorful",
      fileName: "피카츄",
      fileURL: "http://res.cloudinary.com/dnrdrwyas/image/upload/v1630330171/c5ezwzj52ajawsfseipz.png",
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
