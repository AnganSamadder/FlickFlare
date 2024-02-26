export interface Movie {
  id: string;
  title: string;
  description: string;
  showtimes: string[];
  releaseDate: string;
  poster: string;
  trailer: string;
  genres: string[];
  director: string;
  producer: string;
  castList: string[];
  synopsis: string;
  mpaaCode: string;
  reviews: string[];
  upcoming: boolean;
  nowShowing: boolean;
}
