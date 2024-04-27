import { Showtime } from "@/app/interfaces/showtime";

export interface Booking {
  id?: string;
  showtime: Showtime;
  seats: string[];
  tickets: Ticket;
}

export interface Ticket {
  adult: number;
  child: number;
}
