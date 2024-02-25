import Link from "next/link";

export default function Register() {

  return (
    <div className="w-[1440px] h-[1024px] relative bg-black rounded-br-[19px]">
      <div className="left-[548px] top-[116px] absolute text-orange-500 text-5xl font-bold font-['Maven Pro'] leading-normal">
        Create Account
      </div>
      <div className="w-[1369px] h-[750px] left-[30px] top-[180px] absolute">
      <div className="w-[1369px] h-[680px] left-0 top-0 absolute bg-zinc-700 bg-opacity-50 rounded-[17px]" />
        <div className="w-[154px] h-[60px] left-[1215px] top-[690px] absolute flex-col justify-start items-start inline-flex">
          <button className="w-[154px] h-[60px] bg-orange-500 rounded-[20px]">
            <Link 
            className="text-white text-2xl font-bold font-['Maven Pro'] leading-normal"
            href={"/register/pending"}>              
             Confirm
            </Link> 
          </button>          
        </div>
        <div className="w-[321px] h-[640px] left-[39px] top-[30px] absolute">
          <div className="w-[321px] h-[120px] left-0 top-[355px] absolute">            
            <div className="w-[184.32px] h-[18.34px] left-0 top-0 absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
              Password*
            </div>
            <div className="w-80 h-[32.87px] left-0 top-[43.57px] absolute">
              <div className="w-[282.35px] h-[16.05px] left-[15.50px] top-[6.88px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                Enter Password...
              </div>
            </div>            
            <div className="w-[321px] h-[32.87px] left-0 top-[87.13px] absolute">
              <div className="w-[283.24px] h-[16.05px] left-[15.55px] top-[6.88px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                Enter Confirm Password...
              </div>
            </div>
          </div>
          <div className="w-[321px] h-20 left-0 top-[140px] absolute">
            <div className="w-[277.51px] h-[19.20px] left-0 top-0 absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
              Phone Number*
            </div>
            <div className="w-[321px] h-[34.40px] left-0 top-[45.60px] absolute">
              <div className="w-[283.24px] h-[16.80px] left-[15.55px] top-[7.20px] absolute opacity-75 text-zinc-700 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                Enter numbers only...
              </div>
            </div>            
          </div>
          <div className="w-[321px] h-20 left-0 top-[240px] absolute">
            <div className="w-[321px] h-[34.40px] left-0 top-[45.60px] absolute">
              <div className="w-[283.24px] h-[16.80px] left-[15.55px] top-[7.20px] absolute opacity-75 text-zinc-700 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                Enter email...
              </div>
            </div>
            <div className="w-[277.51px] h-[19.20px] left-0 top-0 absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
              Email*
            </div>
          </div>
          <div className="w-[321px] h-[120px] left-0 top-0 absolute">
            <div className="w-[118.05px] h-[18.46px] left-0 top-0 absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
              Name*
            </div>
            <div className="w-[321px] h-[33.08px] left-0 top-[86.92px] absolute">
              <div className="w-[283.24px] h-[16.15px] left-[15.55px] top-[6.92px] absolute opacity-75 text-zinc-700 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                Enter last name...
              </div>
            </div>
            <div className="w-[321px] h-[33.08px] left-0 top-[43.08px] absolute">
              <div className="w-[283.24px] h-[16.15px] left-[15.55px] top-[6.92px] absolute opacity-75 text-zinc-700 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                Enter first name...
              </div>
            </div>            
          </div>
          <div className="left-0 top-[616px] absolute">
            <span className="text-orange-500 text-2xl font-bold font-['Maven Pro'] leading-normal">
              *
            </span>
            <span className="text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
              {" "}
              Required to be filled in
            </span>
          </div>
        </div>
        <div className="w-[1000px] h-[650px] left-[350px] top-[12px] absolute bg-zinc-700 rounded-xl">
          <div className="left-6 top-0 absolute text-white text-xl font-bold font-['Maven Pro'] leading-normal">
              Optional
          </div>          
          <div className="w-[779px] h-[241px] left-[23px] top-[97px] absolute">
            <div className="w-[775px] h-9 left-[4px] top-[35px] absolute">
              <div className="w-[246px] h-9 left-[181px] top-0 absolute bg-orange-50 rounded-md">
                <input
                  type="text"
                  name="cardtype" 
                  className="w-[200px] h-[18px] left-[13px] top-[7px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal bg-transparent"                
                  placeholder="Card Type"
                />
              </div>
              <div className="left-[441px] top-[6px] absolute text-white text-[15px] font-medium font-['Maven Pro'] leading-normal">
                Visa, Mastercard, American Express, Discover
              </div>
              <div className="left-0 top-[2px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                Card Type
              </div>
            </div>
            <div className="w-[375px] h-9 left-[4px] top-[129px] absolute">
              <div className="w-[194px] h-9 left-[181px] top-0 absolute">
                <div className="w-[89px] h-9 left-[105px] top-0 absolute bg-orange-50 rounded-md">
                  <input 
                    type="text"
                    name="year"
                    className="w-[30px] h-[18px] left-[13px] top-[8px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal bg-transparent"
                    placeholder="Year"
                  />
                </div>
                <div className="w-[80px] h-9 left-0 top-0 absolute  bg-orange-50 rounded-md">
                <input 
                    type="text"
                    name="month"
                    className="w-[45px] h-[18px] left-[13px] top-[8px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal bg-transparent"
                    placeholder="Month"
                  />
                </div>
              </div>
              <div className="left-[270px] top-[6px] absolute text-white text-[15px] font-medium font-['Maven Pro'] leading-normal">
                /
              </div>
              <div className="left-0 top-[6px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                Expiration Date
              </div>
            </div>
            <div className="w-[756px] h-[35.54px] left-[4px] top-[82px] absolute">
              <div className="w-[299px] h-[35.54px] left-[181px] top-0 absolute bg-orange-50">
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
            <div className="w-[267px] h-[35.54px] left-[401px] top-[134px] absolute">              
              <div className="w-[46.35px] left-0 top-[-5px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                CVV
              </div>
              <div className="w-[200.50px] h-[35.54px] left-[66.50px] top-[-5px] absolute bg-orange-50 rounded-md">
                <input
                type="text"
                name="cvv"
                className="w-[100.93px] h-[17.40px] left-[8.72px] top-[8px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal bg-transparent"
                placeholder="Enter CVV..."
                />
              </div>              
            </div>
            <div className="w-[174px] h-9 left-0 top-[205px] absolute">
              <button className="w-[174px] h-9 left-0 top-0 absolute bg-orange-500 rounded-[20px] flex flex-col items-center ">
              <p className="w-[200.95px] h-[14.40px] absolute text-white text-2xl font-bold font-['Maven Pro'] leading-normal">
                Add Card
              </p>
              </button>
            </div>
            <div className="left-[4px] top-[-25px] absolute text-white text-[32px] font-bold font-['Maven Pro'] leading-normal">
              Payment
            </div>
          </div>
          <div className="w-[411px] h-[73.54px] left-[29px] top-[391px] absolute">
            <div className="left-0 top-[-25px] absolute text-white text-[32px] font-bold font-['Maven Pro'] leading-normal">
              Billing Address
            </div>
            <div className="w-[408px] h-[35.54px] left-[3px] top-[38px] absolute">
              <div className="w-[299px] h-[35.54px] left-[109px] top-0 absolute flex-col justify-start items-start inline-flex bg-orange-50 rounded-md">
                <input
                type="text"
                name="shippingAddress"
                className="w-[283.24px] h-[30.40px]  text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal bg-transparent"
                placeholder="Enter shipping address..."
                />
              </div>
              <div className="left-0 top-[6px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                Address
              </div>
            </div>
          </div>
          <div className="w-[813px] h-[169.54px] left-[32px] top-[391px] absolute">
            <div className="w-[386px] h-[35.54px] left-[427px] top-[38px] absolute">
              <div className="w-[298.23px] h-[35.54px] left-[87.77px] top-0 absolute">
                <div className="w-[282.50px] h-[17.40px] left-[12.97px] top-[5px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                  Enter street...
                </div>
              </div>
              <div className="w-[66.83px] left-0 top-[6px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                Street
              </div>
            </div>
            <div className="w-[386px] h-[35.54px] left-[427px] top-[88px] absolute">
              <div className="w-[299px] h-[35.54px] left-[87px] top-0 absolute">
                <div className="w-[283.24px] h-[17.40px] left-[13px] top-[5px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                  Enter city...
                </div>
              </div>
              <div className="left-0 top-[6px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                City
              </div>
            </div>
            <div className="w-[390px] h-[35.54px] left-[18px] top-[88px] absolute">
              <div className="w-[299px] h-[35.54px] left-[91px] top-0 absolute">
                <div className="w-[283.24px] h-[17.40px] left-[10px] top-[5px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                  Enter state...
                </div>
              </div>
              <div className="left-0 top-[6px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                State
              </div>
            </div>
            <div className="w-[408px] h-[35.54px] left-0 top-[134px] absolute">
              <div className="w-[299px] h-[35.54px] left-[109px] top-0 absolute">
                <div className="w-[283.24px] h-[17.40px] left-[13px] top-[5px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                  Enter zip code...
                </div>
              </div>
              <div className="left-0 top-[6px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                Zip Code
              </div>
            </div>
            <div className="left-[424px] top-[-25px] absolute text-white text-[32px] font-bold font-['Maven Pro'] leading-normal">
              Home Address
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
