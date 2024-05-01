import { Address } from "@/app/interfaces/address";
import { Card } from "@/app/interfaces/card";

export interface User {
  userId?: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  subToPromo: boolean;
  admin?: boolean;
  cards?: Card[];
  addresses?: Address[];
  suspended?: boolean;
  verified?: boolean;
  verifyCode?: string;
}
