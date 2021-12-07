import { useState } from "react";
import "./App.css";
import Game from "./components/Game";

function App() {
  const [score, setScore] = useState(0);
  const [hiScore, setHiScore] = useState(0);

  return (
    <div className="App">
      <h1>Memory game</h1>
      <h3>Score: {score}</h3>
      <h3>Hi-Score: {hiScore}</h3>
      <p>Click a card! ...but only once!</p>
      <Game />
    </div>
  );
}

export default App;
