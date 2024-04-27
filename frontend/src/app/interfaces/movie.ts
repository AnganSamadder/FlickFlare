import { Showtime } from "@/app/interfaces/showtime";

export interface Movie {
  id: string;
  title: string;
  description: string;
  showtimes: Showtime[];
  releaseDate: string;
  poster: string;
  trailer: string;
  genres: Genre[];
  director: string;
  producer: string;
  cast: Actor[];
  synopsis: string;
  mpaa: string;
  reviews: Review[];
  upcoming: boolean;
  showing: boolean;
}

interface Genre {
  id: string;
  genre: string;
}

interface Actor {
  id: string;
  actor: string;
}

interface Review {
  id: string;
  review: string;
}
