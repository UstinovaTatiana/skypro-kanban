import React from "react";
import "./Main.css";


import Column from "../column/Column";

export default function Main({ columns = [] }) {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columns.map((col) => (
              <Column key={col.id} title={col.title} cards={col.cards} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

