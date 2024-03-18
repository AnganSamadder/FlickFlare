export default function Movie({
  params: { movie },
}: {
  params: { movie: number };
}) {
  return (
    <div className="w-fit h-fit relative bg-black">
      <div className="w-[1288px] h-[807px] left-[76px] top-[137px] absolute">
        <div className="w-[1288px] h-[807px] left-0 top-0 absolute">
          <div className="w-[297px] h-[719px] left-0 top-0 absolute">
            <button className="w-[135px] h-11 left-[17px] top-[675px] rounded-tl-[29px] rounded-bl-[29px] bg-orange-500 absolute">
              <p className="w-fit h-fit left-[29px] top-[10px] absolute text-white text-[15px] font-bold font-['Maven Pro'] leading-normal">
                View Trailer
              </p>
            </button>
            <div className="w-[135px] h-11 left-[162px] top-[675px] absolute">
              <div className="w-[135px] h-11 left-0 top-0 absolute bg-orange-500 rounded-tr-[29px] rounded-br-[29px]" />
              <div className="w-[91px] h-6 left-[19px] top-[10px] absolute text-white text-[15px] font-bold font-['Maven Pro'] leading-normal">
                Book Movie
                <br />
              </div>
            </div>
            <button className="w-[135px] h-11 left-0 top-0 absolute bg-orange-500 rounded-tr-[29px] rounded-bl-[29px] flex flex-col justify-center" >
              <p className="w-fit m-auto h-max left-[34px] top-[10px] text-white text-[15px] font-bold font-['Maven Pro'] leading-normal">
                Go Back
              </p>
            </button>
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
            </div>
          </div>
          <img
            className="w-[323px] h-[404px] left-0 top-[141px] absolute"
            src="https://via.placeholder.com/323x404"
          />
        </div>
        <div className="left-[543px] top-[10px] absolute text-orange-500 text-5xl font-bold font-['Maven Pro'] leading-normal">
          {movie}
        </div>
      </div>
    </div>
  );
}
