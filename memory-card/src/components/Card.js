import React from "react";
import First from "../img/d4c.jpg";
import Second from "../img/goldexp.jpg";
import Third from "../img/gratefuldead.jpg";
import Fourth from "../img/killerqueen.jpg";
import Fifth from "../img/kingcrimson.jpg";
import Sixth from "../img/kingnothing.jpg";
import Seventh from "../img/kiss.jpg";
import Eighth from "../img/madeinheaven.jpg";
import Ninth from "../img/nutkingcall.jpg";
import Tenth from "../img/starplatinum.jpg";
import Eleventh from "../img/stickyfingers.jpg";
import Twelveth from "../img/stonefree.jpg";

export default function Card(props) {
  const standPics = [
    First,
    Second,
    Third,
    Fourth,
    Fifth,
    Sixth,
    Seventh,
    Eighth,
    Ninth,
    Tenth,
    Eleventh,
    Twelveth,
  ];

  const { id } = props;
  return (
    <div className="card">
      <img src={standPics[id - 1]} alt={id}></img>
    </div>
  );
}
/*  <img src={standPics[id - 1]} alt={id}></img> */
