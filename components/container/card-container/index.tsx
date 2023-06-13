import React from "react";
import style from "./index.style.module.scss";
import Link from "next/link";

const CardContainer = () => {
  return (
    <div className={`${style.CardContainer}`}>
      <ul className={`${style.CardList} no-list-style`}>
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
    <li>
      <Link href={card.href}>{card.title}</Link>
    </li>
  );
}

const cards = [
  {
    title: "Spørsmål 1",
    href: "svar/1",
  },
  { title: "Spørsmål 2", href: "svar/2" },
  { title: "Spørsmål 3", href: "svar/3" },
  { title: "Spørsmål 4", href: "svar/4" },
];
