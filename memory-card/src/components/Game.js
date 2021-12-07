import React, { useEffect } from "react";
//import Card from "./components/Card.js";

export default function Game(props) {
  const { updateScore } = props;

  return (
    <div>
      <button onClick={updateScore}>Click</button>
    </div>
  );
}
