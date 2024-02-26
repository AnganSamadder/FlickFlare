import { MovieGrid } from "@/app/components/MovieGrid";

export default async function Home() {
  // const movies = [
  //   {
  //     title: "Iron Man",
  //     img: "https://via.placeholder.com/323x404",
  //     description:
  //       "A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas.",
  //     link: "ironman",
  //   },
  //   {
  //     title: "Dune",
  //     img: "https://via.placeholder.com/323x404",
  //     description: "Paul Atreides, a brilliant and gifted",
  //     link: "dune",
  //   },
  //   {
  //     title: "Spider-Man",
  //     img: "https://via.placeholder.com/323x404",
  //     description:
  //       "Bitten by a radioactive spider in the subway, Brooklyn teenager Miles Morales",
  //     link: "spiderman",
  //   },
  //   {
  //     title: "Iron Man",
  //     img: "https://via.placeholder.com/323x404",
  //     description:
  //       "A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas.",
  //     link: "",
  //   },
  //   {
  //     title: "Dune",
  //     img: "https://via.placeholder.com/323x404",
  //     description: "Paul Atreides, a brilliant and gifted",
  //     link: "",
  //   },
  //   {
  //     title: "Spider-Man",
  //     img: "https://via.placeholder.com/323x404",
  //     description:
  //       "Bitten by a radioactive spider in the subway, Brooklyn teenager Miles Morales",
  //     link: "",
  //   },
  // ];

  const res = await fetch("http://localhost:8080/movie/getAll");

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const movies = await res.json();

  console.log(movies);

  return (
    <div className="">
      <div className="text-orange-500 text-4xl font-bold font-['Maven Pro'] leading-normal p-5">
        Currently Running
      </div>
      <MovieGrid items={movies} />
    </div>
  );
}
