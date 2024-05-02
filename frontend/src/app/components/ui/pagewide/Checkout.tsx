use client";
import { Movie } from "@/app/interfaces/movie";
import { Booking } from "@/app/interfaces/booking";
import { formatUSD } from "@/app/utils/formatUSD";
import PaymentCards from "./PaymentCards";
import React from "react";

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
    const handleSubmit = () => {
        editBooking({ date: Date.now() });
        incStep();
    };

    // @ts-ignore
    return (
        <div className="flex">
            <div className="w-1/5 h-full flex-col">
                <div className="p-4">
                    <img src={movie.poster} className="rounded-2xl" />
                </div>
                <div className="text-white text-2xl font-bold leading-normal">
                    [showtime info here]
                </div>
                <div className="text-white text-2xl font-bold leading-normal">
                    Tickets: {booking.tickets.adult} Adult, {booking.tickets.child} Child
                </div>
                <div className="text-white text-2xl font-bold leading-normal">
                    Seats: {booking.seats.join(", ")}
                </div>
                <div className="text-white text-2xl font-bold leading-normal">
                    Price: {formatUSD(booking.price)}
                </div>
            </div>
            <div className="w-4/5 flex-col">
                <div className="w-full h-[72vh] p-2 flex-cols bg-zinc-700 bg-opacity-50 rounded-[17px]">
                    <div className="p-2 text-orange-500 text-5xl font-bold text-center">
                        Checkout
                    </div>
                    <PaymentCards checkout={true} onSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    );
};

export default Checkout;