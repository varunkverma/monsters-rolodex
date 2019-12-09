import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

export const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
        // <h1>{monster.name}</h1>
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
  //   return <div className="card-list"> {props.children} </div>;
};
