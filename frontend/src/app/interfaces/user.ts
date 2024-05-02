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
  suspended?: boolean;
  verified?: boolean;
  verifyCode?: string;
  street?: string;
  streetTwo?: string;
  city?: string;
  state?: string;
  zip?: string;
}
