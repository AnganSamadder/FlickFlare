import { Address } from "@/app/interfaces/address";
import { Card } from "@/app/interfaces/card";

export interface User {
  id?: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  subToPromos: boolean;
  admin?: boolean;
  cards?: Card[];
  addresses?: Address[];
  verified?: boolean;
  verifyCode?: string;
}
