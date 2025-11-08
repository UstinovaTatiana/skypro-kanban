import React from "react";
import Card from "../Card/card";
import "./Column.css";

export default function Column({ title, cards = [] }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>{" "}
      <div className="cards">
        {" "}
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
