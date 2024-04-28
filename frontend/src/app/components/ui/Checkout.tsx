"use client";
import { Movie } from "@/app/interfaces/movie";
import { Booking, Tickets } from "@/app/interfaces/booking";
import Seat from "@/public/seat.svg";
import React, { useEffect, useState } from "react";
import SeatSelector from "@/app/components/ui/SeatSelector";
import PaymentCardSection from "@/app/components/ui/PaymentCardSection";

const Checkout = ({
  movie,
  booking,
  editBooking,
  incStep,
}: {
  movie: Movie;
  booking: Booking;
  editBooking: (newBooking: Partial<Booking>) => void;
  incStep: () => void;
}) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSubmit = () => {
    incStep();
  };

  // @ts-ignore
  return (
    <div className="flex">
      <div className="w-1/5 h-full flex-col">
        <div className="p-4">
          <img src={movie.poster} className="rounded-2xl" />
        </div>
        <div className="text-white text-3xl font-bold text-center leading-normal">
          {movie.title}
        </div>
        <div className="text-white text-2xl font-bold leading-normal">
          [showtime info here]
        </div>
        <div className="text-white text-2xl font-bold leading-normal">
          [seat info here]
        </div>
        <div className="text-white text-2xl font-bold leading-normal">
          [price]
        </div>
      </div>
      <div className="w-4/5 flex-col">
        <div className="w-full h-[72vh] p-2 flex-cols bg-zinc-700 bg-opacity-50 rounded-[17px]">
          <div className="p-2 text-orange-500 text-5xl font-bold text-center">
            Checkout
          </div>
          <PaymentCardSection checkout={true} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
