import { User } from "@/app/interfaces/user";

export interface Address {
  id?: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  users?: User[];
}
