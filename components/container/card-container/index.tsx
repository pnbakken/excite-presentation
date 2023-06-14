import React from "react";
import style from "./index.style.module.scss";
import Link from "next/link";

const CardContainer = () => {
  return (
    <div
      className={`${style.CardContainer} full-width flex-c align-center justify-center`}
    >
      <ul className={`${style.CardList} no-list-style full-width full-height`}>
        {cards.map((card, index) => (
          <Card key={card.href} card={card} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default CardContainer;

function Card({ card, index }) {
  return (
    <li className={style.card}>
      <Link href={card.href}>
        <h2>{card.title}</h2>
        <p>{card.brief}</p>
      </Link>
    </li>
  );
}

const cards = [
  {
    title: "Spørsmål 1",
    href: "svar/1",
    brief: "Scope",
  },
  { title: "Spørsmål 2", href: "svar/2", brief: "JavaScript og jQuery" },
  { title: "Spørsmål 3", href: "svar/3", brief: "Prinsipper av jQuery" },
  { title: "Spørsmål 4", href: "svar/4", brief: "HTML og hardware tilgang" },
  { title: "Spørsmål 5", href: "svar/5", brief: "Tellerfunksjon" },
  { title: "Spørsmål 6 & 7", href: "svar/6", brief: "jQuery DOM-manipulering" },
];
