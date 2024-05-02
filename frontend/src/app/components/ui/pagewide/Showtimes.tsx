"use client";
import { Movie } from "@/app/interfaces/movie";
import ShowtimeCard from "@/app/components/containers/ShowtimeCard";
import { Booking } from "@/app/interfaces/booking";
import { Showtime } from "@/app/interfaces/showtime";
import React, { useEffect, useState } from "react";

const Showtimes = ({
  movie,
  selectedShowtimes,
  editSelectedShowtimes,
  editBooking,
  incStep,
}: {
  movie: Movie;
  selectedShowtimes: Showtime;
  editSelectedShowtimes: (newShowtimes: Showtime) => void;
  editBooking: (newBooking: Partial<Booking>) => void;
  incStep: () => void;
}) => {
  const [showtimes, setShowtimes] = useState<Showtime[]>([]);

  const handleSelect = () => {
    editBooking({ showtime: selectedShowtimes });
    incStep();
  };

  useEffect(() => {
    fetch(`http://localhost:8080/showtime/get?movieID=${movie.id}`, {
      headers: {
        "Cache-Control": "no-cache",
      },
    }).then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok when fetching showtimes");
      }
      res.json().then((obj) => {
        setShowtimes(obj);
      });
    });
  }, []);

  return (
    <div className="flex">
      <div className="w-1/4 px-10 py-4 flex-col">
        <img src={movie.poster} className="rounded-2xl object-cover" />
      </div>
      <div className="w-2/3 h-fit flex-col">
        <div className="w-full h-[70vh] p-2 bg-zinc-700 bg-opacity-50 rounded-[17px]">
          <div className="p-4 text-orange-500 text-5xl font-bold text-center leading-normal">
            Select Showtime
          </div>
          <div className="flex flex-col">
            {showtimes.map((showtime) => (
              <ShowtimeCard
                key={showtime.id}
                date={showtime.date}
                time={showtime.time}
                availableSeats={
                  (showtime.layout === "1"
                    ? 18
                    : showtime.layout === "2"
                      ? 32
                      : 72) - showtime.occupiedSeats.length
                }
                totalSeats={
                  showtime.layout === "1"
                    ? 18
                    : showtime.layout === "2"
                      ? 32
                      : 72
                }
                onClick={handleSelect}
              />
            ))}
            <ShowtimeCard
              date={"9/25"}
              time={"11:00 AM"}
              availableSeats={12}
              totalSeats={40}
              onClick={handleSelect}
            />
            {/*<ShowtimeCard*/}
            {/*  date={"10/5"}*/}
            {/*  time={"1:00 PM"}*/}
            {/*  availableSeats={26}*/}
            {/*  totalSeats={40}*/}
            {/*  onClick={handleSelect}*/}
            {/*/>*/}
            {/*<ShowtimeCard*/}
            {/*  date={"10/10"}*/}
            {/*  time={"12:00 PM"}*/}
            {/*  availableSeats={6}*/}
            {/*  totalSeats={40}*/}
            {/*  onClick={handleSelect}*/}
            {/*/>*/}
            {/*<ShowtimeCard*/}
            {/*  date={"10/25"}*/}
            {/*  time={"10:00 AM"}*/}
            {/*  availableSeats={1}*/}
            {/*  totalSeats={40}*/}
            {/*  onClick={handleSelect}*/}
            {/*/>*/}
            {/*<ShowtimeCard*/}
            {/*  date={"1/15"}*/}
            {/*  time={"1:00 PM"}*/}
            {/*  availableSeats={33}*/}
            {/*  totalSeats={40}*/}
            {/*  onClick={handleSelect}*/}
            {/*/>*/}
          </div>
          {/*{movie.showtimes.map(())}*/}
        </div>
      </div>
    </div>
  );
};

export default Showtimes;
