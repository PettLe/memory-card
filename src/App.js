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
  randomizeCards();

  //Function to handle clicked cards
  function cardClicked(e) {
    if (cardArray.includes(e.target.alt)) {
      if (score > hiScore) {
        setHiScore(score);
      }
      setScore(0);
      setCardArray([]);
    } else {
      if (score < 11) {
        setScore(score + 1);
        setCardArray(cardArray.concat(e.target.alt));
      } else if (score === 11) {
        setScore(score + 1);
        setHiScore(score + 1);
        alert("YOU THOUGHT YOU WON THE GAME BUT IT WAS ME, DIO!");
        setScore(0);
        setCardArray([]);
      }
    }
  }

  //Effect to randomize cards after every click
  useEffect(() => {
    randomizeCards();
  });

  return (
    <div className="App">
      <div className="frontText">
        <h1>Bizarre Memory Game</h1>
        <h2>Score: {score}</h2>
        <h3>Hi-Score: {hiScore}</h3>
        <div className="bottomText">
          <h3>Click a card! ...but only once!</h3>
          <h3>&copy; Petteri Leino, 2021</h3>
        </div>
      </div>
      <Game cardArray={cardArray} />
      <div className="firstRow">
        <Card id={cards[0]} cardClicked={cardClicked} />
        <Card id={cards[1]} cardClicked={cardClicked} />
        <Card id={cards[2]} cardClicked={cardClicked} />
        <Card id={cards[3]} cardClicked={cardClicked} />
        <Card id={cards[4]} cardClicked={cardClicked} />
        <Card id={cards[5]} cardClicked={cardClicked} />
      </div>
      <div className="secondRow">
        <Card id={cards[6]} cardClicked={cardClicked} />
        <Card id={cards[7]} cardClicked={cardClicked} />
        <Card id={cards[8]} cardClicked={cardClicked} />
        <Card id={cards[9]} cardClicked={cardClicked} />
        <Card id={cards[10]} cardClicked={cardClicked} />
        <Card id={cards[11]} cardClicked={cardClicked} />
      </div>
    </div>
  );
}

export default App;
