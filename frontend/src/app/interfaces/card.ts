import { User } from "@/app/interfaces/user";

export interface Card {
  id?: string;
  cardNumber: string;
  expMonth: string;
  expYear: string;
  secCode: string;
  users?: User[];
}
