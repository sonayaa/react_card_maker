import { firebaseDatabase } from "./firebase";

class CardRepository {
  syncCards(userId, onUpdate) {
    const dbRef = firebaseDatabase.ref(`${userId}/cards`);
    dbRef.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => dbRef.off();
  }

  saveCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
  }

  removeCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
  }
}
export default CardRepository;
