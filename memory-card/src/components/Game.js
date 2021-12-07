import React from "react";

export default function Game(props) {
  //function to randomize cards
  function randomizeCards() {
    const cards = [];
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
  return <p>Here we goooo</p>;
}
