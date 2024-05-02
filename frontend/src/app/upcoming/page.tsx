import MovieGrid from "@/app/components/ui/pagewide/MovieGrid";

export default async function Home() {
  const res = await fetch("http://localhost:8080/movie/showing?showing=false", {
    headers: {
      "Cache-Control": "no-cache",
    },
  });

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const movies = await res.json();

  console.log(movies);

  return (
    <div className="flex-col">
      <div className="w-full h-20 px-10">
        <div className="text-orange-500 text-4xl font-bold font-['Maven Pro'] leading-normal pt-5 overflow-hidden float-left">
          Coming Soon
        </div>
      </div>
      <MovieGrid movies={movies} />
    </div>
  );
}
