import { Movie } from "@/app/interfaces/movie";
import { Booking } from "@/app/interfaces/booking";

const OrderConfirmation = ({
  movie,
  booking,
}: {
  movie: Movie;
  booking: Booking;
}) => {
  const cardNumFormatter = (cardStr: String) => {
    const formatNum = "XXXX XXXX XXXX " + cardStr.slice(cardStr.length - 4);
    return formatNum;
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-zinc-700 bg-opacity-50 rounded-[17px] p-6 w-3/4">
        <div className="text-center mb-8">
          <h1 className="text-orange-500 text-5xl font-bold leading-normal">
            Order Confirmation
          </h1>
          <p className="text-white text-[32px] justify-items-center font-medium font-['Maven Pro']">
            Order confirmed. View “Order History” to see your current orders. A
            confirmation email should be sent to your inbox. See you at the
            theater!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="mb-4">
              <span className="text-orange-500 text-[32px] font-bold font-['Maven Pro']">
                Movie:
              </span>
              <span className="text-white text-2xl font-medium ml-2">
                {movie.title}
              </span>
            </div>
            <div className="mb-4">
              <span className="text-orange-500 text-[32px] font-bold font-['Maven Pro']">
                Showtime:
              </span>
              <span className="text-white text-2xl font-medium ml-2">
                10/10, 1:00 PM
              </span>
            </div>
            <div className="mb-4">
              <span className="text-orange-500 text-[32px] font-bold font-['Maven Pro']">
                Seats:
              </span>
              <span className="text-white text-2xl font-medium ml-2">
                Total: {booking.seats.length} ({booking.seats.join(", ")})
              </span>
            </div>
            <div className="mb-4">
              <span className="text-orange-500 text-[32px] font-bold font-['Maven Pro']">
                Total Price:
              </span>
              <span className="text-white text-2xl font-medium ml-2">
                {booking.price}
              </span>
            </div>
            <div className="mb-4">
              <span className="text-orange-500 text-[32px] font-bold font-['Maven Pro']">
                Order Date:
              </span>
              <span className="text-white text-2xl font-normal ml-2">
                {new Date(booking.date as number).toLocaleString()}
              </span>
            </div>
            <div>
              <span className="text-orange-500 text-[32px] font-bold font-['Maven Pro']">
                Card:
              </span>
              <span className="text-white text-2xl font-normal ml-2">
                {/*{cardNumFormatter(booking.cardNumber)}*/}
                {cardNumFormatter("1234 5678 9101")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
