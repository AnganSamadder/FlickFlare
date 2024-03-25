import Link from "next/link";

export default function Movie({
  params: { movie },
}: {
  params: { movie: number };
}) {
  return (
    <div className="w-screen p-5 flex-col flex justify-center relative bg-black ">
      <label className=" w-full h-auto text-orange-500 text-5xl font-bold leading-normal text-center">
        {movie}
      </label>
      <div className="flex flex-row justify-items-start space-x-5">
        <div className="w-fit p-5 flex-col">
          <button className="w-[135px] p-auto h-11 bg-orange-500 rounded-tr-[29px] rounded-bl-[29px]">
            <Link
              href="/"
              className="text-white text-[15px] font-bold leading-normal"
            >
              Go Back
            </Link>
          </button>
          <img
            className="w-[323px] h-[404px] my-10"
            src="https://via.placeholder.com/323x404"
          />
          <div className="flex flex-row gap-3 m-auto">
            <button className="w-[135px] h-11 bg-orange-500 rounded-tl-[29px] rounded-bl-[29px]">
              <p className="w-[91px] h-6 m-auto text-white text-[15px] font-bold leading-normal">
                View Trailer
              </p>
            </button>
            <button className="w-[135px] h-11 bg-orange-500 rounded-tr-[29px] rounded-br-[29px]">
              <Link
                className="w-[91px] h-6 m-auto text-white text-[15px] font-bold leading-normal"
                href={`/${movie}/showtimes`}
              >
                Book Movie
              </Link>
            </button>
          </div>
        </div>
        <div className=" w-fit flex-col m-16 space-y-5">
          <div className="space-y-2">
            <label className="text-orange-500 text-[32px] font-bold leading-normal">
              Synopsis:
            </label>
            <p className="w-2/3 h-auto text-white text-xl font-normal leading-normal">
              A billionaire industrialist and genius inventor, Tony Stark
              (Robert Downey Jr.), is conducting weapons tests overseas, but
              terrorists kidnap him to force him to build a devastating weapon.
              Instead, he builds an armored suit and upends his captors.
            </p>
          </div>
          <div className="space-y-2">
            <label className="text-orange-500 text-[32px] font-bold leading-normal">
              Category:
            </label>
            <p className="text-white text-xl font-normal leading-normal">
              Action, Adventure, Sci-fi, Fantasy
            </p>
          </div>
          <div className="space-y-2">
            <label className="text-orange-500 text-[32px] font-bold leading-normal">
              Director:
            </label>
            <p className="text-white text-xl font-normal leading-normal">
              Jon Favreau
            </p>
          </div>
          <div className="space-y-2">
            <label className="text-orange-500 text-[32px] font-bold leading-normal">
              Producer:{" "}
            </label>
            <p className="text-white text-xl font-normal leading-normal">
              Avi Arad, Kevin Feige
            </p>
          </div>
          <div className="space-y-2">
            <label className="text-orange-500 text-[32px] font-bold leading-normal">
              Cast:{" "}
            </label>
            <p className="text-white text-xl font-normal leading-normal">
              Robert Downey Jr., Terrence Howard, Jeff Bridges, Gwyneth Paltrow,
              Leslie Bibb, Shaun Toub
            </p>
          </div>
          <div className="space-y-2">
            <label className="text-orange-500 text-[32px] font-bold leading-normal">
              MPAA-US Film Rating:{" "}
            </label>
            <p className="text-white text-2xl font-normal leading-normal">
              PG-13
            </p>
            <p className="text-white text-2xl font-normal leading-normal">
              Parents are urged to be cautious. Some material may be
              inappropriate for pre-teenagers.
            </p>
          </div>
          <div className="space-y-2">
            <div className="space-y-2">
              <label className="text-orange-500 text-[32px] font-bold leading-normal">
                Reviews:
              </label>
            </div>
            <div className="w-fit">
              <div className=" space-y-2">
                <div className="text-white text-2xl font-bold leading-normal">
                  ⭐⭐⭐⭐
                </div>
                <p className="text-white text-2xl font-normal leading-normal">
                  For Marvel fans, this film is action pact and thrilling.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-white text-2xl font-bold leading-normal">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-white text-2xl font-normal leading-normal">
                  As first of the Iron Man series, this film showcases Tony
                  Stark’s character...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
