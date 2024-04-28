import { User } from "@/app/interfaces/user";

export interface Address {
  id?: string;
  streetOne: string;
  streetTwo?: string;
  city: string;
  state: string;
  zip: string;
  users?: User[];
}
