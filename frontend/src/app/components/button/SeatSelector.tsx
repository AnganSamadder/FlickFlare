"use client";

import Seat from "@/public/seat.svg";
import React, { ReactNode, useEffect, useState } from "react";
import { cn } from "@/app/utils/cn";

// interface Layout {
//   cols: number;
//   rows: number;
// }

const SeatSelector = ({
  layout,
  occupiedSeats,
  maxSeats,
  selectedSeats,
  setSelectedSeats,
  className,
}: {
  layout: string;
  occupiedSeats: string[];
  maxSeats: number;
  selectedSeats: string[];
  setSelectedSeats: React.Dispatch<React.SetStateAction<string[]>>;
  className?: string;
}) => {
  let cols = 0;
  let rows = 0;
  let colsCN = "";
  let rowsCN = "";

  switch (layout) {
    case "s":
      cols = 6;
      rows = 3;
      colsCN = "grid-cols-6";
      rowsCN = "grid-rows-3";
      break;
    case "m":
      cols = 8;
      rows = 4;
      colsCN = "grid-cols-8";
      rowsCN = "grid-rows-4";
      break;
    case "l":
      cols = 12;
      rows = 6;
      colsCN = "grid-cols-12";
      rowsCN = "grid-rows-6";
      break;
    default:
      break;
  }

  const handleClick = (seatId: string) => {
    console.log(seatId);
    if (!occupiedSeats.includes(seatId)) {
      if (selectedSeats.includes(seatId)) {
        setSelectedSeats((prevSeats) =>
          prevSeats.filter((seat) => seat !== seatId),
        );
      } else {
        if (selectedSeats.length < maxSeats) {
          setSelectedSeats((prevSeats) => [...prevSeats, seatId]);
        }
      }
    }
  };

  // useEffect(() => {
  //   switch (layout) {
  //     case "s":
  //       setCols(6);
  //       setRows(3);
  //       break;
  //     case "m":
  //       setCols(8);
  //       setRows(4);
  //       break;
  //     case "l":
  //       setCols(12);
  //       setRows(6);
  //       break;
  //     default:
  //       break;
  //   }
  // }, [layout]);

  return (
    <div
      className={cn(
        `w-full h-[80%] grid ${colsCN} ${rowsCN} p-4 align-middle justify-center gap-2`,
        className,
      )}
    >
      {Array.from({ length: cols * rows }).map((_, i) => {
        const seatNumber = i + 1;
        const seatId = `${String.fromCharCode(Math.floor(i / cols) + "A".charCodeAt(0))}${seatNumber % cols === 0 ? cols : seatNumber % cols}`;
        const occupied = occupiedSeats.includes(seatId);
        const selected = selectedSeats.includes(seatId);

        return (
          <button
            key={seatId}
            onClick={() => handleClick(String(seatId))}
            className={
              "flex items-center justify-center" +
              "transition duration-200 hover:border-gray-300 hover:brightness-150"
            }
          >
            <Seat
              width={"100%"}
              height={"100%"}
              fill={occupied ? "#3f3f46" : selected ? "#f97316" : "#000000"}
              className="transition duration-200 hover:scale-110"
            />
          </button>
        );
      })}
    </div>
  );
};

export default SeatSelector;
