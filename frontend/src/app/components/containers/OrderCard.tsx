const OrderCard = () => {

    return (
        <div className="bg-zinc-700 bg-opacity-50 rounded-[17px] p-6 w-5/6 m-5">
            <div className="flex flex-col w-full gap-y-4 justify-start">
                <div className="flex flex-row">
                    <label className="text-orange-500 text-[32px] font-bold font-['Maven Pro']">
                        Movie:
                    </label>
                    <p className="text-white text-2xl font-medium ml-2 mt-2">
                        [Insert movie title]{/*{movie.title}*/}
                    </p>
                </div>
                <div className="flex flex-row">
                    <label className="text-orange-500 text-[32px] font-bold font-['Maven Pro']">
                        Showtime:
                    </label>
                    <p className="text-white text-2xl font-medium ml-2 mt-2">
                        10/10, 1:00 PM {/*Showtime date*/} {/*Showtime time*/}
                    </p>
                </div>
                <div className="flex flex-row">
                    <label className="text-orange-500 text-[32px] font-bold font-['Maven Pro']">
                        Seats:
                    </label>
                    <p className="text-white text-2xl font-medium ml-2 mt-2">
                        [Total #] - [Seats] {/*Total: {booking.seats.length} ({booking.seats.join(", ")})*/}
                    </p>
                </div>
                <div className="flex flex-row">
                    <label className="text-orange-500 text-[32px] font-bold font-['Maven Pro']">
                        Total Price:
                    </label>
                    <p className="text-white text-2xl font-medium ml-2 mt-2">
                        [Booking Price] {/*{booking.price}*/}
                    </p>
                </div>
                <div className="flex flex-row">
                    <label className="text-orange-500 text-[32px] font-bold font-['Maven Pro']">
                        Order Date:
                    </label>
                    <p className="text-white text-2xl font-normal ml-2 mt-2">
                        [Order Date] {/*{new Date(booking.date as number).toLocaleString()}*/}
                    </p>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row">
                        <label className="text-orange-500 text-[32px] font-bold font-['Maven Pro']">
                            Card:
                        </label>
                        <p className="text-white text-2xl font-normal ml-2 mt-2">
                            [Card Number] {/*{cardNumFormatter(booking.cardNumber)}*/}
                            {/*                {cardNumFormatter("1234 5678 9101")}*/}
                        </p>
                    </div>
                    <button className="w-fit h-fit p-2 bg-orange-500 text-white font-bold rounded-full">
                        Refund
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OrderCard;