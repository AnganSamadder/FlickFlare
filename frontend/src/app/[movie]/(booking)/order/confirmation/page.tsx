export default function Confirmation() {
  return (
    <div className="flex items-center justify-center min-h-screen">
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
                Iron Man
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
                Total: 4 (A3, C4, C5, C6)
              </span>
            </div>
            <div className="mb-4">
              <span className="text-orange-500 text-[32px] font-bold font-['Maven Pro']">
                Total Price:
              </span>
              <span className="text-white text-2xl font-medium ml-2">
                $32.00
              </span>
            </div>
            <div className="mb-4">
              <span className="text-orange-500 text-[32px] font-bold font-['Maven Pro']">
                Order Date:
              </span>
              <span className="text-white text-2xl font-normal ml-2">
                10/09/2024, 11:21 AM
              </span>
            </div>
            <div>
              <span className="text-orange-500 text-[32px] font-bold font-['Maven Pro']">
                Card:
              </span>
              <span className="text-white text-2xl font-normal ml-2">
                ********XXX
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
