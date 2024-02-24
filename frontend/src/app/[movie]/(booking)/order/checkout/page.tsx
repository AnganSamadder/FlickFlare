export default function Showtimes() {
  return (
    <div className="w-[1440px] h-[1024px] relative bg-white">
      <div className="w-[1354px] h-[564px] left-[47px] top-[137px] absolute">
        <div className="w-[200px] h-[480px] left-0 top-[84px] absolute">
          <div className="w-[200px] left-0 top-0 absolute">
            <span className="text-orange-500 text-[32px] font-bold font-['Maven Pro'] leading-normal">
              Movie:  {" "}
            </span>
            <span className="text-white text-2xl font-medium font-['Maven Pro'] leading-normal">
              Iron Man
            </span>
          </div>
          <div className="w-[200px] left-0 top-[102px] absolute">
            <span className="text-orange-500 text-[32px] font-bold font-['Maven Pro'] leading-normal">
              Showtime:  {" "}
            </span>
            <span className="text-white text-2xl font-medium font-['Maven Pro'] leading-normal">
              10/10    1:00 PM
            </span>
          </div>
          <div className="w-[200px] left-0 top-[252px] absolute">
            <span className="text-orange-500 text-[32px] font-bold font-['Maven Pro'] leading-normal">
              Seats:  {" "}
            </span>
            <span className="text-white text-2xl font-medium font-['Maven Pro'] leading-normal">
              Total: 4<br />
              <br />
              (A3, C4, C5, C6)
            </span>
          </div>
          <div className="w-[200px] left-0 top-[404px] absolute">
            <span className="text-orange-500 text-[32px] font-bold font-['Maven Pro'] leading-normal">
              Total Price:  {" "}
            </span>
            <span className="text-white text-2xl font-medium font-['Maven Pro'] leading-normal">
              $32.00
            </span>
          </div>
        </div>
        <div className="w-[1147px] h-[556px] left-[207px] top-[4px] absolute">
          <div className="w-[1147px] h-[516px] left-0 top-[40px] absolute bg-zinc-700 bg-opacity-50 rounded-[17px]" />
          <div className="w-[932px] h-[467px] left-[108px] top-[59px] absolute">
            <div className="w-[910px] h-[448px] left-[2px] top-[19px] absolute">
              <div className="w-[174px] h-9 left-0 top-[412px] absolute">
                <div className="left-[50px] top-[4px] absolute text-white text-2xl font-bold font-['Maven Pro'] leading-normal">
                  Cancel
                </div>
              </div>
              <div className="w-[174px] h-9 left-[736px] top-[412px] absolute">
                <div className="w-[174px] h-9 left-0 top-0 absolute bg-orange-500 rounded-[20px]" />
                <div className="left-[41px] top-[6px] absolute text-white text-2xl font-bold font-['Maven Pro'] leading-normal">
                  Confirm
                </div>
              </div>
              <div className="w-[775px] h-9 left-[22px] top-[101px] absolute">
                <div className="w-[246px] h-9 left-[181px] top-0 absolute">
                  <div className="w-[233px] h-[18px] left-[13px] top-[7px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                    Card Type
                  </div>
                </div>
                <div className="left-[441px] top-[6px] absolute text-white text-[15px] font-medium font-['Maven Pro'] leading-normal">
                  Visa, Mastercard, American Express, Discover
                </div>
                <div className="left-0 top-[2px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                  Card Type
                </div>
              </div>
              <div className="w-[375px] h-9 left-[22px] top-[195px] absolute">
                <div className="w-[194px] h-9 left-[181px] top-0 absolute">
                  <div className="w-[89px] h-9 left-[105px] top-0 absolute">
                    <div className="w-[76px] h-[18px] left-[13px] top-[6px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                      Year
                    </div>
                  </div>
                  <div className="w-[89px] h-9 left-0 top-0 absolute">
                    <div className="w-[76px] h-[18px] left-[13px] top-[6px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                      Month
                    </div>
                  </div>
                </div>
                <div className="left-[270px] top-[6px] absolute text-white text-[15px] font-medium font-['Maven Pro'] leading-normal">
                  /
                </div>
                <div className="left-0 top-[6px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                  Expiration Date
                </div>
              </div>
              <div className="w-[756px] h-[35.54px] left-[22px] top-[148px] absolute">
                <div className="w-[299px] h-[35.54px] left-[181px] top-0 absolute">
                  <div className="w-[283.24px] h-[17.40px] left-[13px] top-[5px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                    Enter card number...
                  </div>
                </div>
                <div className="left-0 top-[6px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                  Card Number
                </div>
                <div className="left-[501px] top-[6px] absolute text-white text-[15px] font-medium font-['Maven Pro'] leading-normal">
                  The 16 digits on front of your card
                </div>
              </div>
              <div className="w-[267px] h-[35.54px] left-[419px] top-[200px] absolute">
                <div className="w-[200.50px] h-[35.54px] left-[66.50px] top-0 absolute">
                  <div className="w-[189.93px] h-[17.40px] left-[8.72px] top-[5px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                    Enter CVV...
                  </div>
                </div>
                <div className="w-[46.35px] left-0 top-[4px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                  CVV
                </div>
              </div>
              <div className="w-[427px] h-9 left-[22px] top-[51px] absolute">
                <div className="left-0 top-[6px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                  Select Card
                </div>
                <div className="w-[246px] h-9 left-[181px] top-0 absolute">
                  <div className="w-[233px] h-[18px] left-[13px] top-[7px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                    Card 1: ********XXX
                  </div>
                </div>
              </div>
              <div className="left-[22px] top-0 absolute text-white text-[32px] font-bold font-['Maven Pro'] leading-normal">
                Payment
              </div>
            </div>
            <div className="w-[411px] h-[73.54px] left-[22px] top-[281px] absolute">
              <div className="left-0 top-0 absolute text-white text-[32px] font-bold font-['Maven Pro'] leading-normal">
                Billing Address
              </div>
              <div className="w-[398px] h-[35.54px] left-[13px] top-[38px] absolute">
                <div className="w-[299px] h-[35.54px] left-[99px] top-0 absolute">
                  <div className="w-[283.24px] h-[17.40px] left-[13px] top-[5px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                    Current address
                  </div>
                </div>
                <div className="left-0 top-[6px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                  Address
                </div>
              </div>
            </div>
          </div>
          <div className="left-[363px] top-0 absolute text-orange-500 text-5xl font-bold font-['Maven Pro'] leading-normal">
            Checkout
          </div>
        </div>
        <div className="w-[135px] h-11 left-[32px] top-0 absolute">
          <div className="w-[135px] h-11 left-0 top-0 absolute bg-orange-500 rounded-tr-[29px] rounded-bl-[29px]" />
          <div className="w-[91px] h-6 left-[34px] top-[10px] absolute text-white text-[15px] font-bold font-['Maven Pro'] leading-normal">
            Go Back
          </div>
        </div>
      </div>
      <div className="w-[1470px] h-20 left-0 top-[944px] absolute">
        <div className="w-[1470px] h-20 left-0 top-0 absolute bg-zinc-700 border border-black" />
        <div className="w-[583px] h-[25.14px] left-[14px] top-[27.43px] absolute text-orange-500 text-xl font-bold font-['Inter']">
          © 2024 Cinema E-Booking. All rights reserved.
        </div>
      </div>
      <div className="w-[1440px] h-[95px] left-0 top-0 absolute">
        <div className="w-[1440px] h-[84px] left-0 top-0 absolute bg-zinc-800 rounded-bl-[20px] rounded-br-[20px] shadow border-black" />
        <div className="w-[60px] h-[60px] left-[1341px] top-[13px] absolute bg-zinc-800 bg-opacity-0" />
        <div className="w-[751px] h-[83px] left-[281px] top-[12px] absolute">
          <div className="w-[751px] h-[63px] left-0 top-0 absolute bg-stone-900 rounded-[29px]" />
          <div className="w-36 h-[27px] left-[596px] top-[20px] absolute text-white text-xl font-bold font-['Maven Pro'] leading-normal">
            Coming Soon
          </div>
          <div className="w-[35px] h-[0px] left-[575px] top-[16px] absolute origin-top-left rotate-90 border border-black"></div>
          <div className="w-[175px] h-[30px] left-[382px] top-[20px] absolute text-white text-xl font-bold font-['Maven Pro'] leading-normal">
            Currently Running
          </div>
          <div className="w-[35px] h-[0px] left-[361px] top-[16px] absolute origin-top-left rotate-90 border border-black"></div>
          <div className="w-[154px] h-[63px] left-[224px] top-[20px] absolute text-white text-xl font-bold font-['Maven Pro'] leading-normal">
            Order History
          </div>
          <div className="w-[35px] h-[0px] left-[202px] top-[16px] absolute origin-top-left rotate-90 border border-black"></div>
          <div className="w-[97px] h-[63px] left-[130px] top-[20px] absolute text-white text-xl font-bold font-['Maven Pro'] leading-normal">
            Profile
          </div>
          <div className="w-[35px] h-[0px] left-[109px] top-[16px] absolute origin-top-left rotate-90 border border-black"></div>
          <div className="w-[94px] h-[63px] left-[36px] top-[20px] absolute text-white text-xl font-bold font-['Maven Pro'] leading-normal">
            Home
          </div>
        </div>
        <div className="w-[703px] h-[39px] left-[32px] top-[24px] absolute text-orange-500 text-[40px] font-extrabold font-['Maven Pro'] leading-normal">
          NinjaFlix
        </div>
        <img
          className="w-[54px] h-[49px] left-[200px] top-[14px] absolute"
          src="https://via.placeholder.com/54x49"
        />
      </div>
    </div>
  );
}
