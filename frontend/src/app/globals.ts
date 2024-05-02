import { Booking } from "@/app/interfaces/booking";
import { User } from "@/app/interfaces/user";
import { Movie } from "@/app/interfaces/movie";
import { Showtime } from "@/app/interfaces/showtime";
import { Card } from "@/app/interfaces/card";

export const adultPrice = 14.99;
export const childPrice = 8.99;

export const nullUser: User = {
  password: "",
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  subToPromo: true,
};

export const nullShowtime: Showtime = {
  id: "",
  date: "",
  time: "",
  layout: "",
  occupiedSeats: "",
};

export const nullMovie: Movie = {
  id: "",
  title: "",
  description: "",
  showtimes: [],
  releaseDate: 0,
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
  price: 0,
};

export const nullCard: Card = {
  cardNumber: "",
  expMonth: "",
  expYear: "",
  secCode: "",
  street: "",
  city: "",
  state: "",
  zip: "",
};
