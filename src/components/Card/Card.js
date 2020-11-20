import { useState } from "react";
import "./Card.css";
import Suit from "./Suit";

// topRight, bottomLeft
const CardCorner = ({ position, suit, value }) => {
  return (
    <div className={`card_${position}__container`}>
      {position === "bottomLeft" && (
        <h1 className="card_value__text">{value}</h1>
      )}
      <Suit suit={suit} size="s" />
      {position === "topRight" && <h1 className="card_value__text">{value}</h1>}
    </div>
  );
};

const Card = ({ suit, value }) => {
  // 💡 1. Add the reverse state
  const [isFront, setIsFront] = useState(false);

  const toggleCard = () => {
    setIsFront(!isFront);
  };

  const showCard = () => setIsFront(true);
  const hideCard = () => setIsFront(true);

  console.log("Card: ", value, suit, isFront);

  // 💡 2. Change the color of the card based on the suit - Clases condicionales
  return (
    <div
      className="card__container"
      onMouseEnter={showCard}
      onMouseLeave={hideCard}
    >
      {/* si isFront es true -> renderiza lo que hay después del and */}
      {isFront && (
        <>
          <CardCorner position="topRight" suit={suit} value={value} />
          <div className="card_body__suit">
            <Suit suit={suit} size="m" />
          </div>
          <CardCorner position="bottomLeft" suit={suit} value={value} />
        </>
      )}
    </div>
  );
};

export default Card;
