export default function Summary() {
  return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white shadow-xl rounded-3xl overflow-hidden text-white font-bold font-['Maven Pro']" style={{width: '80%', backgroundColor: '#454545'}}> {/* Adjusted width */}
          <div className="p-8 bg-gray-100" style = {{backgroundColor: '#232323'}}>
            <h1 className="text-center text-2xl font-bold text-orange-500">Order Summary</h1>
          </div>
          <div className="p-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-white">Movie:</span>
              <span className="text-lg">Iron Man</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Showtime:</span>
              <span className="text-lg">10/10 1:00 PM</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Seats:</span>
              <span className="text-lg">Total: 4 (A3, C4, C5, C6)</span>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg" style = {{backgroundColor: '#232323'}}> {/* Adjusted padding for consistency */}
              <div className="grid grid-cols-3 mb-2 text-orange-500">
                <span>Adult Ticket</span>
                <span className="justify-self-center text-orange-500">1</span>
                <span className="justify-self-end text-orange-500">$15.00</span>
              </div>
              <div className="grid grid-cols-3 mb-2 text-orange-500">
                <span>Senior Ticket</span>
                <span className="justify-self-center text-orange-500">1</span>
                <span className="justify-self-end text-orange-500">$10.00</span>
              </div>
              <div className="grid grid-cols-3 mb-2 text-orange-500">
                <span>Child Ticket</span>
                <span className="justify-self-center text-orange-500">2</span>
                <span className="justify-self-end text-orange-500">$10.00</span>
              </div>
              <div className="grid grid-cols-3 mb-2 font-semibold text-orange-500">
                <span>Promo Code (igotadiscount)</span>
                <span className="justify-self-center text-orange-500">-</span>
                <span className="justify-self-end text-orange-500">-$3.00</span>
              </div>
            </div>
            <div className="mt-4 p-4"> {/* Adjusted padding for consistency */}
              <input
                  type="text"
                  placeholder="Enter promocode..."
                  className="input input-bordered w-full max-w-xs rounded-lg"
              />
              <div className="mt-2 text-sm">
                Promotional codes are given via email for subscribed users.
              </div>
            </div>
            <div
                className="flex justify-center items-center mt-4 space-x-4"> {/* Centered buttons and added space between */}
              <button className="btn btn-primary">Update Order</button>
              <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full hover:bg-orange-600 focus:outline-none focus:shadow-outline">Checkout</button>
            </div>
          </div>
        </div>
      </div>
  );
}
