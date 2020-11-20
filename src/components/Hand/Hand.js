import Card from "../Card/Card";
import "./Hand.css";

const Hand = ({ cards }) => {
  // 💡 Move here the state of the cards
  // 📃 (Hint -> the cards belong to the hand and are something that changes inside the component life -> state)
  // 💡 Add here the state of the best card of the ones visible

  // 💡 Add a button to draw another card
  // 💯 limit the cards to 5 and create a restart button
  return (
    <div className="hand__container">
      {cards.map((card) => (
        <Card suit={card.suit} value={card.value} />
      ))}
    </div>
  );
};

export default Hand;
