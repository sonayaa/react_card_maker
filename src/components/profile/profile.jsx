import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "../card/card";
import Maker from "../maker/maker";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Style from "./profile.module.css";
import MakerAdd from "../maker_add/maker";

const Profile = ({ FileBtn, authService, cardRepository }) => {
  const historyState = useHistory().location.state;
  const [userId, setUserId] = useState(historyState && historyState.id);
  const [cards, setCards] = useState({});

  const history = useHistory();
  const onLogout = useCallback(() => { //useCallback
    authService.onLogout();
  }, [authService]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId, cardRepository]);

  useEffect(() => {
    authService.onAuthChange((user) => { // 2.이부분이 이해가 안갔었음! 다시 확인하자.
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  }, [authService, userId, history]);

  // addCard 함수를 아래 update 함수와 같이 쓸수 있음
  // const addCard = (addCard) => {
  //   setCards({ ...cards, addCard });
  //   cardRepository.saveCard(userId, addCard);
  // };

  const addOrUpdateCard = (card) => {
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
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  return (
    <>
      <Header onLogout={onLogout} authService={authService} />
      <section className={Style.profile}>
        <div className={Style.left}>
          <h2>Card Maker</h2>
          {Object.keys(cards).map((key) => (
            <Maker
              key={key}
              FileBtn={FileBtn}
              card={cards[key]}
              addOrUpdateCard={addOrUpdateCard}
              deleteCard={deleteCard}
            />
          ))}
          <MakerAdd FileBtn={FileBtn} addOrUpdateCard={addOrUpdateCard} />
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
