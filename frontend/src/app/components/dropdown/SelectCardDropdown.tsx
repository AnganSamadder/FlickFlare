"use client";
import React from "react";
import { Card } from "@/app/interfaces/card";

const SelectCardDropdown = ({
  cards,
  classname,
}: {
  cards: Card[];
  classname?: String;
}) => {
  const [isDisabled, setIsDisabled] = React.useState(cards.length === 0);

  const cardNumFormatter = (cardStr: String) => {
    const formatNum = "XXXX XXXX XXXX " + cardStr.slice(cardStr.length - 4);
    return formatNum;
  };

  return (
    <select
      name="select"
      className="bg-orange-50 rounded-md flex w-[299px] h-[35.54px] mx-5 px-4"
      disabled={isDisabled}
    >
      <option className="w-full px-4 bg-transparent outline-none z-20">
        {isDisabled ? "Please add a card" : "Select a card"}
      </option>
      {cards.map((card: Card, index) => (
        <option
          key={index}
          className="w-full px-4 bg-transparent outline-none z-20"
          value={card.cardNumber}
        >
          {"Card " + (index + 1) + ": " + cardNumFormatter(card.cardNumber)}
        </option>
      ))}
    </select>
  );
};

export default SelectCardDropdown;
