"use client";
import { Movie } from "@/app/interfaces/movie";
import { nullBooking, nullMovie, nullShowtime } from "@/app/globals";
import { useEffect, useState } from "react";
import { Booking } from "@/app/interfaces/booking";
import Showtimes from "@/app/components/ui/pagewide/Showtimes";
import TicketSelect from "@/app/components/ui/pagewide/TicketSelect";
import SeatSelect from "@/app/components/ui/pagewide/SeatSelect";
import Checkout from "@/app/components/ui/pagewide/Checkout";
import OrderSummary from "@/app/components/ui/pagewide/OrderSummary";
import OrderConfirmation from "@/app/components/ui/pagewide/OrderConfirmation";
import { router } from "next/client";
import { useRouter } from "next/navigation";
import { Showtime } from "@/app/interfaces/showtime";
import { useLocalStorage } from "@/app/utils/useLocalStorage";
import { User } from "@/app/interfaces/user";
import { step } from "next/dist/experimental/testmode/playwright/step";

export default function Order({
  params: { movieID },
}: {
  params: { movieID: string };
}) {
  const [booking, setBooking] = useState<Booking>(nullBooking);
  const [movie, setMovie] = useState<Movie>(nullMovie);
  const [showtime, setShowtime] = useState<Showtime>(nullShowtime);
  const [promocodeUsed, setPromocodeUsed] = useState<string>("");
  const [step, setStep] = useState<number>(0);
  const [user, setUser, resetUser] = useLocalStorage<User>("user");
  const router = useRouter();

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
  const decStep = () => {
    setStep(step - 1);
  };
  const handleBackButtonClick = () => {
    if (step === 0) {
      router.push(`/${movieID}`);
    } else {
      decStep();
    }
  };

  useEffect(() => {
    const finalBooking = {
      ...booking,
      seat: booking.seats.join(", "),
    };

    if (step > 4) {
      fetch(
        `http://localhost:8080/booking/book?booking=${JSON.stringify(booking)}&promoCode=${promocodeUsed}&userId=${user.userId}&showtimeId=${showtime.id}`,
        {
          method: "POST",
          headers: {
            "Cache-Control": "no-cache",
          },
        },
      ).then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok when booking");
        }
      });
    }
  }, [step]);

  return (
    <div className="w-full h-[86vh] px-10 flex-col mb-20">
      <div className="flex flex-row">
        {step <= 4 ? (
          <button
            onClick={handleBackButtonClick}
            className="mx-10 mt-5 h-fit px-8 py-2 rounded-bl-3xl rounded-tr-3xl bg-orange-500 text-white font-bold font-['Maven Pro'] leading-normal transition duration-200 hover:bg-orange-500 hover:text-black border-2 border-transparent"
          >
            Back
          </button>
        ) : null}

        {step <= 4 ? (
          <div className="w-full p-1 text-orange-500 text-5xl font-bold text-center leading-normal">
            {movie.title}
          </div>
        ) : null}
      </div>

      {step === 0 ? (
        <Showtimes
          movie={movie}
          selectedShowtimes={showtime}
          editSelectedShowtimes={setShowtime}
          editBooking={editBooking}
          incStep={incStep}
        />
      ) : step === 1 ? (
        <TicketSelect
          movie={movie}
          editBooking={editBooking}
          incStep={incStep}
        />
      ) : step === 2 ? (
        <SeatSelect
          movie={movie}
          layout={
            showtime.layout === "1" ? "s" : showtime.layout === "2" ? "m" : "l"
          }
          tickets={booking.tickets}
          occupiedSeats={showtime.occupiedSeats}
          editBooking={editBooking}
          incStep={incStep}
        />
      ) : step === 3 ? (
        <OrderSummary
          movie={movie}
          booking={booking}
          editBooking={editBooking}
          promocodeUsed={promocodeUsed}
          setPromocodeUsed={setPromocodeUsed}
          incStep={incStep}
        />
      ) : step === 4 ? (
        <Checkout
          movie={movie}
          booking={booking}
          editBooking={editBooking}
          incStep={incStep}
        />
      ) : (
        <OrderConfirmation movie={movie} booking={booking} />
      )}
    </div>
  );
}
