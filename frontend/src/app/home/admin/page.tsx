import { MovieGrid } from "@/app/components/MovieGrid";

export default async function Home() {
  const res = await fetch("http://localhost:8080/movie/getAll");

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const movies = await res.json();

  return (
    <div className="">
      <div className="text-orange-500 text-4xl font-bold font-['Maven Pro'] leading-normal pt-5">
        Currently Running
      </div>
      <MovieGrid items={movies} />
    </div>
  );
}
