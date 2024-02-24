export default function Movie({
  params: { movie },
}: {
  params: { movie: number };
}) {
  return (
    <div className="w-[1440px] h-[1024px] relative bg-white">
      <div className="w-[1288px] h-[807px] left-[76px] top-[137px] absolute">
        <div className="w-[1288px] h-[807px] left-0 top-0 absolute">
          <div className="w-[297px] h-[719px] left-0 top-0 absolute">
            <div className="w-[135px] h-11 left-[17px] top-[675px] absolute">
              <div className="w-[135px] h-11 left-0 top-0 absolute bg-orange-500 rounded-tl-[29px] rounded-bl-[29px]" />
              <div className="w-[91px] h-6 left-[29px] top-[10px] absolute text-white text-[15px] font-bold font-['Maven Pro'] leading-normal">
                View Trailer
                <br />
              </div>
            </div>
            <div className="w-[135px] h-11 left-[162px] top-[675px] absolute">
              <div className="w-[135px] h-11 left-0 top-0 absolute bg-orange-500 rounded-tr-[29px] rounded-br-[29px]" />
              <div className="w-[91px] h-6 left-[19px] top-[10px] absolute text-white text-[15px] font-bold font-['Maven Pro'] leading-normal">
                Book Movie
                <br />
              </div>
            </div>
            <div className="w-[135px] h-11 left-0 top-0 absolute">
              <div className="w-[135px] h-11 left-0 top-0 absolute bg-orange-500 rounded-tr-[29px] rounded-bl-[29px]" />
              <div className="w-[91px] h-6 left-[34px] top-[10px] absolute text-white text-[15px] font-bold font-['Maven Pro'] leading-normal">
                Go Back
              </div>
            </div>
          </div>
          <div className="w-[801px] h-[90px] left-[404px] top-[117px] absolute">
            <span className="text-orange-500 text-[32px] font-bold font-['Maven Pro'] leading-normal">
              Synopsis:
            </span>
            <span className="text-white text-[32px] font-normal font-['Maven Pro'] leading-normal">
              {" "}
              <br />
            </span>
            <span className="text-white text-xl font-normal font-['Maven Pro'] leading-normal">
              A billionaire industrialist and genius inventor, Tony Stark
              (Robert Downey Jr.), is conducting weapons tests overseas, but
              terrorists kidnap him to force him to build a devastating weapon.
              Instead, he builds an armored suit and upends his captors.
              <br />
              <br />
              <br />{" "}
            </span>
          </div>
          <div className="w-[801px] h-[76px] left-[404px] top-[257px] absolute">
            <span className="text-orange-500 text-[32px] font-bold font-['Maven Pro'] leading-normal">
              Category:
            </span>
            <span className="text-white text-[32px] font-normal font-['Maven Pro'] leading-normal">
              {" "}
            </span>
            <span className="text-white text-xl font-normal font-['Maven Pro'] leading-normal">
              Action, Adventure, Sci-fi, Fantasy
            </span>
          </div>
          <div className="w-[801px] h-6 left-[404px] top-[350px] absolute">
            <span className="text-orange-500 text-[32px] font-bold font-['Maven Pro'] leading-normal">
              Director:
            </span>
            <span className="text-white text-xl font-normal font-['Maven Pro'] leading-normal">
              {" "}
              Jon Favreau
            </span>
          </div>
          <div className="w-[801px] h-6 left-[404px] top-[392px] absolute">
            <span className="text-orange-500 text-[32px] font-bold font-['Maven Pro'] leading-normal">
              Producer:
            </span>
            <span className="text-white text-xl font-normal font-['Maven Pro'] leading-normal">
              {" "}
              Avi Arad, Kevin Feige
              <br />
              <br />
            </span>
          </div>
          <div className="w-[883px] left-[404px] top-[434px] absolute">
            <span className="text-orange-500 text-[32px] font-bold font-['Maven Pro'] leading-normal">
              Cast:
            </span>
            <span className="text-white text-[32px] font-normal font-['Maven Pro'] leading-normal">
              {" "}
            </span>
            <span className="text-white text-xl font-normal font-['Maven Pro'] leading-normal">
              Robert Downey Jr., Terrence Howard, Jeff Bridges, Gwyneth Paltrow,
              Leslie Bibb, Shaun Toub
            </span>
          </div>
          <div className="w-[883px] h-6 left-[404px] top-[508px] absolute">
            <span className="text-orange-500 text-[32px] font-bold font-['Maven Pro'] leading-normal">
              MPAA-US Film Rating:{" "}
            </span>
            <span className="text-white text-2xl font-normal font-['Maven Pro'] leading-normal">
              PG-13  <br />
              Parents are urged to be cautious. Some material may be
              inappropriate for pre-teenagers.
            </span>
          </div>
          <div className="w-[883px] h-[183px] left-[405px] top-[624px] absolute">
            <div className="w-[838px] h-[143px] left-0 top-[40px] absolute">
              <div className="w-[838px] h-16 left-0 top-0 absolute">
                <div className="left-0 top-0 absolute text-white text-2xl font-bold font-['Maven Pro'] leading-normal">
                  ⭐⭐⭐⭐
                </div>
                <div className="w-[838px] h-6 left-0 top-[40px] absolute text-white text-2xl font-normal font-['Maven Pro'] leading-normal">
                  For Marvel fans, this film is action pact and thrilling.
                </div>
              </div>
              <div className="w-[838px] h-16 left-0 top-[79px] absolute">
                <div className="left-0 top-0 absolute text-white text-2xl font-bold font-['Maven Pro'] leading-normal">
                  ⭐⭐⭐⭐⭐
                </div>
                <div className="w-[838px] left-0 top-[40px] absolute text-white text-2xl font-normal font-['Maven Pro'] leading-normal">
                  As first of the Iron Man series, this film showcases Tony
                  Stark’s character...
                </div>
              </div>
            </div>
            <div className="w-[883px] h-6 left-0 top-0 absolute">
              <span className="text-orange-500 text-[32px] font-bold font-['Maven Pro'] leading-normal">
                Reviews:
              </span>
              <span className="text-white text-2xl font-normal font-['Maven Pro'] leading-normal">
                  <br />
              </span>
            </div>
          </div>
          <img
            className="w-[323px] h-[404px] left-0 top-[141px] absolute"
            src="https://via.placeholder.com/323x404"
          />
        </div>
        <div className="left-[543px] top-[10px] absolute text-orange-500 text-5xl font-bold font-['Maven Pro'] leading-normal">
          Movie #{movie}
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
