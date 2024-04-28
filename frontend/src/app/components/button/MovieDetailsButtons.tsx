"use client";

import { Movie } from "@/app/interfaces/movie";
import TrailerPopup from "@/app/components/containers/TrailerPopup";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const MovieDetailsButtons = ({ movie }: { movie: Movie }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [trailerIsOpen, setTrailerIsOpen] = useState(false);

  const handleTrailer = () => {
    setTrailerIsOpen(true);
    console.log("trailerIsOpen", trailerIsOpen);
  };

  const closeModal = () => {
    setTrailerIsOpen(false);
  };

  return (
    <div className="w-full flex p-4 ">
      <button
        onClick={handleTrailer}
        className="w-1/2 h-11 mr-1 bg-orange-500 rounded-l-3xl"
      >
        <p className="w-full h-6 m-auto text-white text-[15px] font-bold leading-normal">
          View Trailer
        </p>
      </button>
      <button
        onClick={() => router.push(pathname + "/order")}
        className="w-1/2 h-11 ml-1 bg-orange-500 rounded-r-3xl"
      >
        <div className="w-full h-6 m-auto text-white text-[15px] font-bold leading-normal">
          Book Movie
        </div>
      </button>
      {trailerIsOpen && (
        <TrailerPopup
          trailer={movie.trailer}
          closePopup={closeModal}
        ></TrailerPopup>
      )}
    </div>
  );
};

export default MovieDetailsButtons;
