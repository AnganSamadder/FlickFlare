"use client";
import { Movie } from "@/app/interfaces/movie";
import { Booking } from "@/app/interfaces/booking";
import { adultPrice, childPrice } from "@/app/globals";
import { formatUSD } from "@/app/utils/formatUSD";
import React, { useState } from "react";

const OrderSummary = ({
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
  const [promocode, setPromocode] = useState<string>("");
  const [promocodeUsed, setPromocodeUsed] = useState<string>("");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setPromocodeUsed(promocode);
    }
  };

  const handleSubmit = () => {
    editBooking({
      price: parseFloat(
        (
          (booking.tickets.adult * adultPrice +
            booking.tickets.child * childPrice) *
          1.08
        ).toFixed(2),
      ),
    });
    incStep();
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className="bg-white shadow-xl rounded-3xl overflow-hidden text-white font-bold font-['Maven Pro']"
        style={{ width: "80%", backgroundColor: "#454545" }}
      >
        <div className="p-6 bg-gray-100" style={{ backgroundColor: "#232323" }}>
          <h1 className="text-center text-2xl font-bold text-orange-500">
            Order Summary
          </h1>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-lg font-semibold text-white">Movie:</span>
            <span className="text-lg">{movie.title}</span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-lg font-semibold">Showtime:</span>
            <span className="text-lg">10/10 1:00 PM</span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-lg font-semibold">Seats:</span>
            <span className="text-lg">
              Total: {booking.seats.length} ({booking.seats.join(", ")})
            </span>
          </div>
          <div
            className="bg-gray-200 my-4 p-4 rounded-lg"
            style={{ backgroundColor: "#232323" }}
          >
            <div className="grid grid-cols-3 mb-1 text-orange-500">
              <span>Adult Ticket</span>
              <span className="justify-self-center text-orange-500">
                {booking.tickets.adult}
              </span>
              <span className="justify-self-end text-orange-500">
                {formatUSD(booking.tickets.adult * adultPrice)}
              </span>
            </div>
            <div className="grid grid-cols-3 mb-1 text-orange-500">
              <span>Child Ticket</span>
              <span className="justify-self-center text-orange-500">
                {booking.tickets.child}
              </span>
              <span className="justify-self-end text-orange-500">
                {formatUSD(booking.tickets.child * childPrice)}
              </span>
            </div>
            <div className="h-1 m-2 rounded bg-zinc-700" />
            <div className="grid grid-cols-2 mb-1 text-orange-500">
              <span>Subtotal</span>
              <span className="justify-self-end text-orange-500">
                {formatUSD(
                  booking.tickets.adult * adultPrice +
                    booking.tickets.child * childPrice,
                )}
              </span>
            </div>
            {promocodeUsed !== "" && (
              <div className="grid grid-cols-3 mb-1 font-semibold text-orange-500">
                <span>Promo Code ({promocodeUsed})</span>
                <span className="justify-self-center text-orange-500">-</span>
                <span className="justify-self-end text-orange-500">-$3.00</span>
              </div>
            )}
            <div className="grid grid-cols-2 mb-1 text-orange-500">
              <span>Tax</span>
              <span className="justify-self-end text-orange-500">
                {formatUSD(
                  (booking.tickets.adult * adultPrice +
                    booking.tickets.child * childPrice) *
                    0.08,
                )}
              </span>
            </div>
            <div className="h-1 m-2 rounded bg-zinc-700" />
            <div className="grid grid-cols-2 mb-1 text-orange-500">
              <span>Total</span>
              <span className="justify-self-end text-orange-500">
                {formatUSD(
                  (booking.tickets.adult * adultPrice +
                    booking.tickets.child * childPrice) *
                    1.08,
                )}
              </span>
            </div>
          </div>
          <div className="p-2">
            <input
              type="text"
              placeholder="Enter promocode..."
              value={promocode}
              onChange={(e) => setPromocode(e.target.value)}
              onKeyDown={(e) => handleKeyPress(e)}
              className="px-2 py-1 input input-bordered text-black w-full max-w-xs rounded-lg"
            />
            <div className="mt-2 text-sm">
              Promotional codes are given via email for subscribed users.
            </div>
          </div>
          <div className="flex justify-center items-center mt-4 space-x-4">
            <button className="btn btn-primary">Update Order</button>
            <button
              onClick={handleSubmit}
              className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full hover:bg-orange-600 focus:outline-none focus:shadow-outline"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
