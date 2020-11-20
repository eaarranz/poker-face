import { ReactComponent as Spades } from "../../assets/spades.svg";
import { ReactComponent as Hearts } from "../../assets/hearts.svg";
import { ReactComponent as Diamonds } from "../../assets/diamonds.svg";
import { ReactComponent as Clubs } from "../../assets/clubs.svg";
import "./Card.css";

// s, m
const Suit = ({ suit, size }) => {
  return (
    <div className={size === "s" ? "small_suit" : "medium_suit"}>
      {suit === "diamonds" && <Diamonds />}
      {suit === "hearts" && <Hearts />}
      {suit === "spades" && <Spades />}
      {suit === "clubs" && <Clubs />}
    </div>
  );
};

export default Suit;
