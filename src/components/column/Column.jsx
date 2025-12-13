import React from "react";
import Card from "../card/card";
import { ColumnWrapper, ColumnTitle, CardsContainer } from "./Column.styled";

export default function Column({ title, cards = [], onOpen }) {
  return (
    <ColumnWrapper className="main__column column">
      <ColumnTitle className="column__title">
        <p>{title}</p>
      </ColumnTitle>
      <CardsContainer className="cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            theme={card.theme}
            title={card.title}
            date={card.date}
            colorClass={card.colorClass}
            onOpen={() => {
              onOpen?.(card.id);
            }}
          />
        ))}
      </CardsContainer>
    </ColumnWrapper>
  );
}
