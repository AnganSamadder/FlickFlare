"use client";
import { adultPrice, childPrice } from "@/app/globals";
import { Movie } from "@/app/interfaces/movie";
import { Booking, Tickets } from "@/app/interfaces/booking";
import React, { useEffect, useState } from "react";

const TicketSelect = ({
  movie,
  editBooking,
  incStep,
}: {
  movie: Movie;
  editBooking: (newBooking: Partial<Booking>) => void;
  incStep: () => void;
}) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [tickets, setTickets] = useState<Tickets>({ adult: 0, child: 0 });

  const handleClick = (type: string, change: number) => {
    if (type === "adult" && tickets.adult + change >= 0) {
      setTickets((prevTickets) => ({
        ...prevTickets,
        adult: prevTickets.adult + change,
      }));
    } else if (type === "child" && tickets.child + change >= 0) {
      setTickets((prevTickets) => ({
        ...prevTickets,
        child: prevTickets.child + change,
      }));
    }
  };

  const handleSubmit = () => {
    editBooking({
      tickets: tickets,
      price: tickets.adult * adultPrice + tickets.child * childPrice,
    });
    incStep();
  };

  useEffect(() => {
    if (tickets.adult > 0 || tickets.child > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [tickets]);

  return (
    <div className="flex flex-row">
      <div className="w-1/4 px-10 py-4 flex-col">
        <img src={movie.poster} className="rounded-2xl object-cover" />
      </div>
      <div className="w-2/3 flex-col">
        <div className="w-full max-h-fit p-2 py-10 bg-zinc-700 bg-opacity-50 rounded-[17px]">
          <div className="p-4 text-orange-500 text-5xl font-bold text-center leading-normal">
            Select Tickets
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <div className="flex-col grow">
                <div className="p-4 flex justify-around">
                  <label className="mr-16 text-orange-500 text-3xl font-bold">
                    Adult:
                  </label>
                  <div>
                    <button
                      onClick={() => handleClick("adult", -1)}
                      className="w-8 h-8 cursor-pointer transition-all bg-orange-500 text-white rounded-lg border-orange-600
                border-b-[4px] text-3xl text-center font-extrabold leading-none hover:brightness-110 hover:-translate-y-[1px]
                hover:border-b-[6px] active:border-b-[2px] active:brightness-110 active:translate-y-[2px]"
                    >
                      -
                    </button>
                    <label className="mx-4 text-white text-3xl font-bold">
                      {tickets.adult}
                    </label>
                    <button
                      onClick={() => handleClick("adult", 1)}
                      className="w-8 h-8 cursor-pointer transition-all bg-orange-500 text-white rounded-lg border-orange-600
                border-b-[4px] text-3xl text-center font-extrabold leading-none hover:brightness-110 hover:-translate-y-[1px]
                hover:border-b-[6px] active:border-b-[2px] active:brightness-110 active:translate-y-[2px]"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="p-4 flex justify-around">
                  <label className="mr-16 text-orange-500 text-3xl font-bold">
                    Child:
                  </label>
                  <div>
                    <button
                      onClick={() => handleClick("child", -1)}
                      className="w-8 h-8 cursor-pointer transition-all bg-orange-500 text-white rounded-lg border-orange-600
                border-b-[4px] text-3xl text-center font-extrabold leading-none hover:brightness-110 hover:-translate-y-[1px]
                hover:border-b-[6px] active:border-b-[2px] active:brightness-110 active:translate-y-[2px]"
                    >
                      -
                    </button>
                    <label className="mx-4 text-white text-3xl font-bold">
                      {tickets.child}
                    </label>
                    <button
                      onClick={() => handleClick("child", 1)}
                      className="w-8 h-8 cursor-pointer transition-all bg-orange-500 text-white rounded-lg border-orange-600
                border-b-[4px] text-3xl text-center font-extrabold leading-none hover:brightness-110 hover:-translate-y-[1px]
                hover:border-b-[6px] active:border-b-[2px] active:brightness-110 active:translate-y-[2px]"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-1/3 mr-4 flex-col">
                <div className="text-orange-500 text-3xl font-bold text-right">
                  ${adultPrice * tickets.adult}
                </div>
                <div className="text-orange-500 text-3xl font-bold text-right">
                  (${adultPrice})
                </div>
                <div className="ml-16 text-orange-500 text-3xl font-bold text-right">
                  ${childPrice * tickets.child}
                </div>
                <div className="ml-16 text-orange-500 text-3xl font-bold text-right">
                  (${childPrice})
                </div>
              </div>
            </div>
            <label className="self-center mx-4 text-orange-500 text-3xl font-bold">
              Subtotal: $
              {tickets.adult * adultPrice + tickets.child * childPrice}
            </label>
            <button
              disabled={buttonDisabled}
              onClick={handleSubmit}
              className="w-[10vw] h-[6vh] m-4 self-center bg-orange-500 rounded-[20px] text-white text-2xl font-bold font-['Maven Pro'] leading-normal
              disabled:bg-amber-900 disabled:text-gray-500 disabled:cursor-not-allowed"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSelect;
