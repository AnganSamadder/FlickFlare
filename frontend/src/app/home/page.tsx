import MovieGrid from "@/app/components/ui/pagewide/MovieGrid";
import { Movie } from "@/app/interfaces/movie";
// import { useLocalStorage } from "@/app/utils/useLocalStorage";
// import { User } from "@/app/interfaces/user";
// import { nullUser } from "@/app/globals";
// import React, { useEffect, useState } from "react";
// import ManageButton from "@/app/components/button/ManageButton";
// import { useSearchParams } from "next/navigation";

export default async function Home() {
  // const searchParams = useSearchParams();

  // const [movies, setMovies] = useState([]);
  // const [showing, setShowing] = useState<string | null>(
  //   searchParams.get("showing"),
  // );
  // const [user, setUser, resetUser] = useLocalStorage<User>("user", nullUser);

  // useEffect(() => {
  //   // if (showing === null) {
  //   //   setShowing("true");
  //   // }
  //   fetch("http://localhost:8080/movie/showing?showing=true", {
  //     headers: {
  //       "Cache-Control": "no-cache",
  //     },
  //   }).then((response) => {
  //     if (response.ok) {
  //       response.json().then((data) => {
  //         setMovies(data);
  //
  //         console.log(data);
  //       });
  //     } else {
  //       throw new Error("Network response was not ok");
  //     }
  //   });
  // }, []);

  const res = await fetch("http://localhost:8080/movie/showing?showing=true", {
    headers: {
      "Cache-Control": "no-cache",
    },
  });

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const movies: Movie[] = await res.json();

  return (
    <div className="flex-col">
      <div className="w-full h-20 px-10">
        <div className="text-orange-500 text-4xl font-bold font-['Maven Pro'] leading-normal pt-5 overflow-hidden float-left">
          Currently Running
        </div>
      </div>
      <MovieGrid movies={movies} />
    </div>
  );
}
