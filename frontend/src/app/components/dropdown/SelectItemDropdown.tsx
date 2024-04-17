"use client";
import React from "react";
import { Card } from "@/app/interfaces/card";
import { cn } from "@/app/utils/cn";

const SelectItemDropdown = ({
  list,
  classname,
}: {
  list: String[];
  classname?: String;
}) => {
  const [isDisabled, setIsDisabled] = React.useState(list.length === 0);

  const cardNumFormatter = (cardStr: String) => {
    const formatNum = "XXXX XXXX XXXX " + cardStr.slice(cardStr.length - 4);
    return formatNum;
  };

  return (
    <select
      name="select"
      className={cn("bg-orange-50 rounded-md flex", classname)}
      // className="bg-orange-50 rounded-md flex w-[299px] h-[35.54px] mx-5 px-4"
      disabled={isDisabled}
    >
      <option className="w-full px-4 bg-transparent outline-none z-20">
        {isDisabled ? "No items left" : "Select option"}
      </option>
      {list.map((item: String, index) => (
        <option
          key={index}
          className="w-full px-4 bg-transparent  outline-none z-20"
        >
          {item}
        </option>
      ))}
    </select>
  );
};

export default SelectItemDropdown;
