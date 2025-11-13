import React from "react";
import Card from "../Card/card";

import "./Column.css";

export default function Column({ title, cards = [] }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            theme={card.theme}
            title={card.title}
            date={card.date}
            colorClass={card.colorClass}
            onOpen={() => {
              // здесь можно открыть попап или что-то ещё
              console.log("Open card", card.id);
            }}
          />
        ))}
      </div>
    </div>
  );
}
