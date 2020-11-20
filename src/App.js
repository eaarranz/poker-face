import { useState } from "react";
import "./App.css";
import deck from "./utils/deck.json";
import Hand from "./components/Hand/Hand";

const drawRandomHand = () => {
  // 💡 We want to drawn 5 radom cards!
  return deck.slice(5, 10);
};

const drawRandomCard = () => {
  // 💡 We want to draw 1 radom card!
  return deck[11];
};

function App() {
  const [drawnCards, setDrawnCards] = useState(drawRandomHand);

  // 💯 What if we want to add another hand for another player? Think about a way to add a Player name
  return (
    <div className="app__container">
      <Hand cards={drawnCards} />
    </div>
  );
}

export default App;
