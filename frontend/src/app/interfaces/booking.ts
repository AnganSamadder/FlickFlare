import { Showtime } from "@/app/interfaces/showtime";

export interface Booking {
  id?: string;
  showtime: Showtime;
  seats: string[];
  tickets: Tickets;
}

export interface Tickets {
  adult: number;
  child: number;
}
