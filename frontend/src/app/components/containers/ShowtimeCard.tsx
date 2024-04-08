"use client";
import React from "react";

const ShowtimeCard = ({
  date,
  time,
  availableSeats,
  totalSeats,
}: {
  date: string;
  time: string;
  availableSeats: number;
  totalSeats: number;
}) => {
  return (
    <div className="flex flex-row justify-items-start space-x-5 p-2 justify-center">
      <div className="w-[100px] text-center text-white text-1xl font-bold">
        <label>Time: </label>
        <p>{time}</p>
      </div>
      <div className="h-[50px] border border-black" />
      <div className="w-[119px] h-[52px] text-center text-white text-1xl font-bold font-['Maven Pro'] leading-normal">
        <label> Date: </label>
        <p> {date} </p>
      </div>
      <div className="h-[50px] border border-black" />
      <div className="w-[187px] h-[52px] text-center text-white text-1xl font-bold font-['Maven Pro'] leading-normal">
        <label> Available Seats: </label>
        <p>
          {" "}
          {availableSeats} out of {totalSeats}
        </p>
      </div>
      <div className="h-[50px] border border-black" />
      <button className="w-fit px-8 py-2 rounded-br-3xl rounded-tl-3xl bg-orange-500 text-white font-bold leading-normal transition duration-200 hover:bg-orange-500 hover:text-black border-2 border-transparent ">
        <p className="text-justify"> Select</p>
      </button>
    </div>
  );
};

export default ShowtimeCard;
