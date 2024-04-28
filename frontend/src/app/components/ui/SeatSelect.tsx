"use client";
import { Movie } from "@/app/interfaces/movie";
import ShowtimeCard from "@/app/components/containers/ShowtimeCard";
import { Booking, Tickets } from "@/app/interfaces/booking";
import Seat from "@/public/seat.svg";
import React, { useEffect, useState } from "react";
import SeatSelector from "@/app/components/ui/SeatSelector";

const SeatSelect = ({
  movie,
  tickets,
  editBooking,
  incStep,
}: {
  movie: Movie;
  tickets: Tickets;
  editBooking: (newBooking: Partial<Booking>) => void;
  incStep: () => void;
}) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSubmit = () => {
    editBooking({ seats: selectedSeats });
    incStep();
  };

  useEffect(() => {
    if (selectedSeats.length === tickets.adult + tickets.child) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [selectedSeats, tickets.adult, tickets.child]);

  return (
    <div className="flex">
      <div className="w-1/6 h-full flex-col">
        <div className="p-4">
          <img src={movie.poster} className="rounded-2xl" />
        </div>
        <div className="text-white text-3xl font-bold text-center leading-normal">
          {movie.title}
        </div>
        <div className="text-white text-3xl font-bold leading-normal">
          [showtime info here]
        </div>
      </div>
      <div className="w-5/6 flex-col">
        <div className="w-full h-[70vh] p-2 flex-cols bg-zinc-700 bg-opacity-50 rounded-[17px]">
          <div className="p-3 pb-6 text-orange-500 text-5xl font-bold text-center">
            Select Showtime
          </div>
          <div className="flex">
            <div className="w-3/4 px-2 flex-col">
              <div className="w-full h-8 bg-gray-400 rounded-md text-2xl font-bold text-center leading-normal">
                Screen
              </div>
              <SeatSelector
                layout="l"
                occupiedSeats={["A2", "A3", "C1", "C2"]}
                maxSeats={tickets.adult + tickets.child}
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
              />
            </div>
            <div className="w-1/4 flex-col">
              <div className="w-full h-8 mx-2 rounded-md text-white text-2xl leading-normal">
                Total Seats: {tickets.adult + tickets.child}
              </div>
              <div className="w-full h-1 my-4 bg-stone-950" />
              <div className="w-full h-8 mx-2 rounded-md text-white text-2xl leading-normal">
                Subtotal: ${tickets.adult * 14.99 + tickets.child * 8.99}
              </div>
              <div className="w-full h-1 my-4 bg-stone-950" />
              <div className="w-full h-16 flex">
                <Seat width={"20%"} height={"100%"} />
                <div className="w-4/5 h-full px-4 py-2 text-white text-2xl leading-loose ">
                  Available
                </div>
              </div>
              <div className="w-full h-16 flex">
                <Seat width={"20%"} height={"100%"} fill={"#f97316"} />
                <div className="w-4/5 h-full px-4 py-2 text-white text-2xl leading-loose ">
                  Selected
                </div>
              </div>
              <div className="w-full h-16 flex">
                <Seat width={"20%"} height={"100%"} fill={"#3f3f46"} />
                <div className="w-4/5 h-full px-4 py-2 text-white text-2xl leading-loose ">
                  Occupied
                </div>
              </div>
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
    </div>
  );
};

export default SeatSelect;
