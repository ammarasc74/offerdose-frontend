import React from "react";
import "./Dashboard.json";
import "tachyons";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <img src="https://c.top4top.io/p_2034kwkll1.jpg" alt="imag" />
      <div className="card-text">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
// "pa50 mg10 bg-gry dib br3 ma2 grow"
export default Card;
