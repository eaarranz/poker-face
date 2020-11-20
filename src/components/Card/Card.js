import { ReactComponent as Spades } from "../../assets/spades.svg";
import { ReactComponent as Hearts } from "../../assets/hearts.svg";
import { ReactComponent as Diamonds } from "../../assets/diamonds.svg";
import { ReactComponent as Clubs } from "../../assets/clubs.svg";
import "./Card.css";

const Card = ({ suit, value }) => {
  // 💡 1. Add the reverse state
  // 💡 2. Change the color of the card based on the suit
  return (
    <div className="card__container">
      {/* 💡 We can improve this! It's getting repetitive */}
      <div className="card_topRight__container">
        {/* 💡 We can improve this! It's getting hard to read*/}
        {suit === "diamonds" && <Diamonds />}
        {suit === "hearts" && <Hearts />}
        {suit === "spades" && <Spades />}
        {suit === "clubs" && <Clubs />}
        <h1 className="card_value__text">{value}</h1>
      </div>
      <div className="card_body__suit">
        {suit === "diamonds" && <Diamonds />}
        {suit === "hearts" && <Hearts />}
        {suit === "spades" && <Spades />}
        {suit === "clubs" && <Clubs />}
      </div>
      {/* 💡 We can improve this! It's getting repetitive */}
      <div className="card_bottomLeft__container">
        {/* 💡 We can improve this! It's getting hard to read*/}
        <h1 className="card_value__text">{value}</h1>
        {suit === "diamonds" && <Diamonds />}
        {suit === "hearts" && <Hearts />}
        {suit === "spades" && <Spades />}
        {suit === "clubs" && <Clubs />}
      </div>
    </div>
  );
};

export default Card;
