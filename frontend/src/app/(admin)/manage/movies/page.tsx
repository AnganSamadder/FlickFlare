"use client";
import EditMovies from "@/app/components/ui/pagewide/EditMovies";
import AdminPage from "@/app/components/checks/AdminPage";
import { useEffect, useState } from "react";
import { Movie } from "@/app/interfaces/movie";

export default function ManageMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  // const res = await fetch("http://localhost:8080/movie/getAll", {
  //   headers: {
  //     "Cache-Control": "no-cache",
  //   },
  // });
  //
  // if (!res.ok) {
  //   throw new Error("Network response was not ok");
  // }
  //
  // const movies = await res.json();

  useEffect(() => {
    fetch("http://localhost:8080/movie/getAll", {
      headers: {
        "Cache-Control": "no-cache",
      },
    }).then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      res.json().then(
        (data) => {
          setMovies(data);
        },
        (error) => {
          console.error("Error when fetching movies:", error);
        },
      );
    });
  }, []);

  console.log(movies);

  return (
    <AdminPage>
      <div className="w-screen h-[86vh] px-4 pb-4 justify-center">
        <div className="text-orange-500 text-4xl text-center font-bold font-['Maven Pro'] leading-normal">
          Manage Movies
        </div>
        <EditMovies movies={movies} />
      </div>
    </AdminPage>
  );
}
