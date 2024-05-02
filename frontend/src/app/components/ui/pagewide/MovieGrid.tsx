"use client";
import { cn } from "../../../utils/cn";
import { Movie } from "../../../interfaces/movie";
import TrailerPopup from "../../containers/TrailerPopup";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const MovieGrid = ({
  movies,
  className,
}: {
  movies: Movie[];
  className?: string;
}) => {
  const router = useRouter();

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedMovie, setSelectedMovie] = useState(String);
  const [trailerIsOpen, setTrailerIsOpen] = useState(false);

  const handleTrailer = (trailer: string) => {
    setSelectedMovie(trailer);
    setTrailerIsOpen(true);
  };

  const closeModal = () => {
    setTrailerIsOpen(false);
    setSelectedMovie("");
  };
  const handleMoreInfo = (movie: Movie) => {
    router.push(`/${movie.id}/`);
  };

  return (
    <div>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-2",
          className,
        )}
      >
        {movies?.map((movie, id) => (
          <div
            key={movie?.title}
            className="relative group block p-10 h-full w-full"
            onMouseEnter={() => setHoveredIndex(id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === id && (
                <motion.span
                  className="absolute inset-0 w-full h-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle>{movie.title}</CardTitle>
              <CardImg src={movie.poster} />
              <CardDescription>{movie.description}</CardDescription>
              <CardButtons
                onClickTrailer={() => handleTrailer(movie.trailer)}
                onClickMoreInfo={() => handleMoreInfo(movie)}
              />
            </Card>
          </div>
        ))}
      </div>
      {trailerIsOpen && (
        <TrailerPopup
          trailer={selectedMovie}
          closePopup={closeModal}
        ></TrailerPopup>
      )}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className,
      )}
    >
      <div className="relative z-30">
        <div className="px-4 justify-center">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-zinc-100 text-center align-middle font-bold text-4xl tracking-wide mt-4 pb-4",
        className,
      )}
    >
      {children}
    </h4>
  );
};

export const CardImg = ({
  className,
  src,
  // alt,
}: {
  className?: string;
  src: string;
  // alt: string;
}) => {
  return (
    <div className="items-center">
      <img className={cn("rounded-2xl mx-auto", className)} src={src} />
    </div>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className,
      )}
    >
      {children}
    </p>
  );
};

export const CardButtons = ({
  className,
  onClickTrailer,
  onClickMoreInfo,
}: {
  className?: string;
  onClickTrailer?: () => void;
  onClickMoreInfo?: () => void;
}) => {
  return (
    <div className={cn("flex justify-center mt-8", className)}>
      <button className="p-[3px] relative" onClick={onClickTrailer}>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-l-full" />
        <div className="px-8 py-2  bg-black rounded-[6px] rounded-l-full relative group transition duration-200 text-white hover:bg-transparent">
          View Trailer
        </div>
      </button>
      <div className="w-2" />
      <button className="p-[3px] relative" onClick={onClickMoreInfo}>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-r-full" />
        <div className="px-8 py-2  bg-black rounded-[6px] rounded-r-full relative group transition duration-200 text-white hover:bg-transparent">
          More info
        </div>
      </button>
    </div>
  );
};

export default MovieGrid;
