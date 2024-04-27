import { Booking } from "@/app/interfaces/booking";
import { User } from "@/app/interfaces/user";
import { Movie } from "@/app/interfaces/movie";
import { Showtime } from "@/app/interfaces/showtime";

export const nullUser: User = {
  password: "",
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  subToPromos: false,
};

export const nullShowtime: Showtime = {
  id: "",
  date: "",
  time: "",
  layout: "",
  occupiedSeats: [],
};

export const nullMovie: Movie = {
  id: "",
  title: "",
  description: "",
  showtimes: [],
  releaseDate: "",
  poster: "",
  trailer: "",
  genres: [],
  director: "",
  producer: "",
  cast: [],
  synopsis: "",
  mpaa: "",
  reviews: [],
  upcoming: false,
  showing: false,
};

export const nullBooking: Booking = {
  showtime: nullShowtime,
  seats: [],
  tickets: {
    adult: 0,
    child: 0,
  },
};
