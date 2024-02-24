export default function Login({}) {
  return (
    <div className="w-[1440px] h-[1024px] relative bg-orange-50 rounded-br-[19px]">
      <div className="w-[1470px] h-20 left-0 top-[944px] absolute">
        <div className="w-[1470px] h-20 left-0 top-0 absolute bg-zinc-700 border border-black" />
        <div className="w-[583px] h-[25.14px] left-[14px] top-[27.43px] absolute text-orange-500 text-xl font-bold font-['Inter']">
          © 2024 Cinema E-Booking. All rights reserved.
        </div>
      </div>
      <div className="left-[658px] top-[116px] absolute text-orange-500 text-5xl font-bold font-['Maven Pro'] leading-normal">
        Login
      </div>
      <div className="w-[767px] h-[560px] left-[337px] top-[180px] absolute">
        <div className="w-[767px] h-[560px] left-0 top-0 absolute bg-zinc-700 bg-opacity-50 rounded-[17px]" />
        <div className="w-[154px] h-[60px] left-[593px] top-[480px] absolute flex-col justify-start items-start inline-flex">
          <div className="w-[154px] h-[60px] bg-orange-500 rounded-[20px]" />
          <div className="text-white text-2xl font-bold font-['Maven Pro'] leading-normal">
            Confirm
          </div>
        </div>
        <div className="w-[321px] h-[223px] left-[228px] top-[116px] absolute">
          <div className="w-80 h-[76.43px] left-0 top-[115px] absolute">
            <div className="w-80 h-[32.87px] left-0 top-[43.57px] absolute">
              <div className="w-[282.35px] h-[16.05px] left-[15.50px] top-[6.88px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                Enter Password...
              </div>
            </div>
            <div className="w-[184.32px] h-[18.34px] left-0 top-0 absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
              Password
            </div>
          </div>
          <div className="w-[321px] h-20 left-0 top-0 absolute">
            <div className="w-[321px] h-[34.40px] left-0 top-[45.60px] absolute">
              <div className="w-[283.24px] h-[16.80px] left-[15.55px] top-[7.20px] absolute opacity-75 text-zinc-700 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                Enter email...
              </div>
            </div>
            <div className="w-[277.51px] h-[19.20px] left-0 top-0 absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
              Email
            </div>
          </div>
          <div className="left-[2px] top-[199px] absolute">
            <span className="text-white text-2xl font-medium font-['Maven Pro'] leading-normal">
              Forgot{" "}
            </span>
            <span className="text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
              Password?
            </span>
          </div>
        </div>
      </div>
      <div className="w-[340px] left-[567px] top-[780px] absolute">
        <span className="text-orange-50 text-2xl font-medium font-['Maven Pro'] leading-normal">
          Don’t have a account?{" "}
        </span>
        <span className="text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
          Sign up
        </span>
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
