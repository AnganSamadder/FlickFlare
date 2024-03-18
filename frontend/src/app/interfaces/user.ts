import { Card } from "@/app/interfaces/card";

export interface User {
  userId?: number;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  subToPromos: boolean;
  admin?: boolean;
  cards: Card[];
  verified?: boolean;
  verifyCode?: string;
}
