
import "@carbon/web-components/es/components/dropdown/index.js";
import React from "react";
import PaymentCardSection from "@/app/components/ui/PaymentCardSection";

export default function Checkout() {
  return (
      <div className="relative bg-black">
        <button  className=" m-5 px-8 py-2 rounded-bl-3xl rounded-tr-3xl bg-orange-500 text-white font-bold font-['Maven Pro'] leading-normal transition duration-200 hover:bg-orange-500 hover:text-black border-2 border-transparent ">
          Back
        </button>
        <div className="flex flex-row w-1/2 h-fit gap-x-5 m-5">
          <div className="flex-col gap-y-5 justify-center">
            <div className="gap-y-2">
              <label className="text-orange-500 text-[32px] font-bold font-['Maven Pro'] leading-normal">
                Movie:
              </label>
              <br/>
              <p className="text-white text-2xl font-medium font-['Maven Pro'] leading-normal">
              Iron Man
              </p>
            </div>
            <div className="gap-y-2">
              <label className="text-orange-500 text-[32px] font-bold font-['Maven Pro'] leading-normal">
              Showtime:
              </label>
              <br/>
              <p className="text-white text-2xl font-medium font-['Maven Pro'] leading-normal">
              10/10
              </p>
              <br/>
              <p className="text-white text-2xl font-medium font-['Maven Pro'] leading-normal">
              1:00 PM
              </p>
            </div>
            <div className="gap-y-2">
              <label className="text-orange-500 text-[32px] font-bold font-['Maven Pro'] leading-normal">
              Seats:
              </label>
              <br/>
              <p className="text-white text-2xl font-medium font-['Maven Pro'] leading-normal">
              Total: 4
              </p>
              <br/>
              <p className="text-white text-2xl font-medium font-['Maven Pro'] leading-normal">
              (A3, C4, C5, C6)
              </p>
            </div>
            <div className="gap-y-2">
              <label className="text-orange-500 text-[32px] font-bold font-['Maven Pro'] leading-normal">
              Total:
              </label>
              <br/>
              <p className="text-white text-2xl font-medium font-['Maven Pro'] leading-normal">
              $32.00
              </p>
            </div>
          </div>
          <div className="flex-col gap-2 justify-center">
            <label className="text-orange-500 text-5xl font-bold font-['Maven Pro'] leading-normal">
              Checkout
            </label>
            <div className="w-fit p-10 bg-zinc-700 bg-opacity-50 rounded-[17px]">
              <PaymentCardSection/>
              <div className="mt-5 flex justify-between">
                <button
                    className="px-14 py-3 rounded-[20px] bg-red-600 text-white font-bold transition duration-200 hover:text-black border-2 border-transparent">
                  Cancel
                </button>
                <button
                  className="px-14 py-3 rounded-[20px] bg-orange-500 text-white font-bold transition duration-200 hover:text-black border-2 border-transparent">
                Confirm
                </button>
              </div>
          </div>
          </div>
        </div>
      </div>
  );
}