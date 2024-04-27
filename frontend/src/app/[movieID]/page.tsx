import { Movie } from "@/app/interfaces/movie";
import MovieDetailsButtons from "@/app/components/button/MovieDetailsButtons";

export default async function MovieDetails({
  params: { movieID },
}: {
  params: { movieID: string };
}) {
  const res = await fetch(`http://localhost:8080/movie/get?id=${movieID}`, {
    headers: {
      "Cache-Control": "no-cache",
    },
  });

  if (!res.ok) {
    console.log("hi");
    throw new Error("Network response was not ok when fetching movie");
  }

  const movie: Movie = await res.json();

  return (
    <div className="w-full px-12 py-4 flex-col flex justify-center relative bg-black ">
      <div className="w-screen flex-col flex justify-center relative bg-black ">
        <label className="w-full h-auto text-orange-500 text-5xl font-bold leading-normal text-center">
          {movie.title}
        </label>
        <div className="flex flex-row justify-items-start space-x-5">
          <div className="w-1/4 p-5 flex-col">
            <img className="my-4 rounded-2xl" src={movie.poster} />
            <div className="flex flex-row py-4 justify-center gap-3 m-auto">
              <MovieDetailsButtons movie={movie} />
            </div>
          </div>
          <div className=" w-fit flex-col space-y-5">
            <div className="space-y-2">
              <label className="text-orange-500 text-[32px] font-bold leading-normal">
                Synopsis:
              </label>
              <p className="w-2/3 h-auto text-white text-xl font-normal leading-normal">
                {movie.description}
              </p>
            </div>
            <div className="space-y-2">
              <label className="text-orange-500 text-[32px] font-bold leading-normal">
                Genres:
              </label>
              <div className="flex">
                {movie.genres.map((genre) => (
                  <div key={genre.id}>
                    <p className="pr-8 text-white text-xl font-normal leading-normal">
                      {genre.genre}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-orange-500 text-[32px] font-bold leading-normal">
                Director:
              </label>
              <p className="text-white text-xl font-normal leading-normal">
                {movie.director}
              </p>
            </div>
            <div className="space-y-2">
              <label className="text-orange-500 text-[32px] font-bold leading-normal">
                Producer:
              </label>
              <p className="text-white text-xl font-normal leading-normal">
                {movie.producer}
              </p>
            </div>
            <div className="space-y-2">
              <label className="text-orange-500 text-[32px] font-bold leading-normal">
                Cast:
              </label>
              <div className="flex">
                {movie.cast.map((actor) => (
                  <p
                    key={actor.id}
                    className="pr-8 text-white text-xl font-normal leading-normal"
                  >
                    {actor.actor}
                  </p>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-orange-500 text-[32px] font-bold leading-normal">
                MPAA-US Film Rating:
              </label>
              <p className="text-white text-2xl font-normal leading-normal">
                {movie.mpaa}
              </p>
            </div>
            <div className="space-y-2">
              <div className="space-y-2">
                <label className="text-orange-500 text-[32px] font-bold leading-normal">
                  Reviews:
                </label>
                {movie.reviews.map((review) => (
                  <p
                    key={review.id}
                    className="py-2 text-white text-2xl font-normal leading-normal"
                  >
                    {review.review}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
