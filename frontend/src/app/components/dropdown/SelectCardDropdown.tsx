"use client";
import React, { useState } from "react";
import { Card } from "@/app/interfaces/card";
import { cn } from "@/app/utils/cn";

const SelectCardDropdown = ({
  cards,
  selectedCard,
  setSelectedCard,
  classname,
}: {
  cards: Card[];
  selectedCard: Card;
  setSelectedCard: React.Dispatch<React.SetStateAction<Card>>;
  classname?: String;
}) => {
  const [isDisabled, setIsDisabled] = React.useState(cards.length === 0);

  const cardNumFormatter = (cardStr: String) => {
    return "XXXX XXXX XXXX " + cardStr.slice(cardStr.length - 4);
  };
  const handleCardChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // setSelectedCard(e.target.value); //get the card id
  };

  return (
    <select
      id="cardSelect"
      value={selectedCard.cardNumber}
      onChange={handleCardChange}
      className={cn(
        isDisabled
          ? "bg-zinc-400 rounded-md flex w-[299px] h-[35.54px] mx-5 px-4"
          : "bg-orange-50 rounded-md flex w-[299px] h-[35.54px] mx-5 px-4",
        classname,
      )}
      disabled={isDisabled}
    >
      <option className="w-full px-4 bg-transparent outline-none z-20">
        {isDisabled ? "No saved cards" : "Select a card"}
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
      <p> Selected card: {selectedCard.cardNumber}</p>
    </select>
  );
};

export default SelectCardDropdown;
