import {User} from "@/app/interfaces/user";

export interface Card {
    cardId: string;
    cardNumber: string;
    expDate: string;
    secCode: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    users: User[];
}