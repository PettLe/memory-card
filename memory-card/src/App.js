import { useState, useEffect } from "react";
import "./App.css";
import Game from "./components/Game";
import Card from "./components/Card";

function App() {
  //const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  //function to randomize cards

  const [score, setScore] = useState(0);
  const [hiScore, setHiScore] = useState(0);
  const [cardArray, setCardArray] = useState([]);

  //function to randomize card order
  const cards = [];
  function randomizeCards() {
    let position = 0;
    for (let i = 1; i <= 12; i++) {
      position = Math.floor(Math.random() * 2);
      if (position === 0) {
        cards.push(i);
      } else {
        cards.unshift(i);
      }
    }
    return cards;
  }
  console.log(randomizeCards());

  //Effect to randomize cards after every click
  useEffect(() => {
    randomizeCards();
  });

  //Temporary function for testing
  function updateScore() {
    setScore(score + 1);
  }

  return (
    <div className="App">
      <h1>Memory game</h1>
      <h3>Score: {score}</h3>
      <h3>Hi-Score: {hiScore}</h3>
      <p>Click a card! ...but only once!</p>
      <Game cardArray={cardArray} updateScore={updateScore} />
      <div className="firstRow">
        <Card id={cards[0]} />
        <Card id={cards[1]} />
        <Card id={cards[2]} />
        <Card id={cards[3]} />
        <Card id={cards[4]} />
        <Card id={cards[5]} />
      </div>
      <div className="secondRow">
        <Card id={cards[6]} />
        <Card id={cards[7]} />
        <Card id={cards[8]} />
        <Card id={cards[9]} />
        <Card id={cards[10]} />
        <Card id={cards[11]} />
      </div>
    </div>
  );
}

export default App;
