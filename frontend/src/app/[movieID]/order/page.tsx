"use client";
import { Movie } from "@/app/interfaces/movie";
import { nullBooking, nullMovie } from "@/app/globals";
import Showtimes from "@/app/components/ui/Showtimes";
import { useEffect, useState } from "react";
import { Booking } from "@/app/interfaces/booking";
import TicketSelect from "@/app/components/ui/TicketSelect";

export default function Order({
  params: { movieID },
}: {
  params: { movieID: string };
}) {
  const [booking, setBooking] = useState<Booking>(nullBooking);
  const [movie, setMovie] = useState<Movie>(nullMovie);
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    fetch(`http://localhost:8080/movie/get?id=${movieID}`, {
      headers: {
        "Cache-Control": "no-cache",
      },
    }).then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok when fetching movie");
      }
      res.json().then((obj) => {
        setMovie(obj);
      });
    });
  }, [movieID]);

  const editBooking = (newBooking: Partial<Booking>) => {
    setBooking((prevBooking) => ({ ...prevBooking, ...newBooking }));
  };

  const incStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="w-full h-[86vh] px-10 flex-col">
      <div className="w-full p-1 text-orange-500 text-5xl font-bold text-center leading-normal">
        {movie.title}
      </div>
      {step === 0 ? (
        <TicketSelect
          movie={movie}
          editBooking={editBooking}
          incStep={incStep}
        />
      ) : step === 1 ? (
        <Showtimes movie={movie} editBooking={editBooking} incStep={incStep} />
      ) : (
        <div></div>
      )}
    </div>
  );
}
