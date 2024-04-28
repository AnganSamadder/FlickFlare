"use client"
import InputField from "@/app/components/fields/InputField";
import React, {useState} from "react";
import {Card} from "@/app/interfaces/card";
import {useLocalStorage} from "@/app/utils/useLocalStorage";
import {User} from "@/app/interfaces/user";
import {nullUser} from "@/app/globals";
import {useRouter} from "next/navigation";
import {Address} from "@/app/interfaces/address";
import SelectCardDropdown from "@/app/components/dropdown/SelectCardDropdown";
import dummyCards from "@/app/lists/dummy/dummyCards";

const PaymentCardSection = ()=> {
    const router = useRouter();
    const [address, setAddress] = useState<Address>({
        street: "",
        city: "",
        state: "",
        zip: "",
    });
    const [card, setCard] = useState<Card>({
        cardNumber: "",
        expMonth: "",
        expYear: "",
        secCode: "",
    });
    const [passwordConfirmed, setPasswordConfirmed] = useState<boolean>(false);
    const [user, setUser] = useLocalStorage<User>("user", nullUser);
    const [currentCardList, setCurrentCardList] = useState([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "confirmPassword") {
            if (e.target.value === user.password) {
                setPasswordConfirmed(true);
            } else {
                setPasswordConfirmed(false);
            }
        } else {
            setUser({
                ...user,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleChangeCard = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCard({
            ...card,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddCard = () => {
        user.cards?.push(card);
        setCard({
            cardNumber: "",
            expMonth: "",
            expYear: "",
            secCode: "",
        });
    };

    const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubscribe = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            subToPromos: e.target.checked,
        });
    };

    const handleConfirm = () => {
        console.log(JSON.stringify(user));
        fetch(`http://localhost:8080/user/editProfile?id=${user.userId}`, {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        }).then((response) => {
            response.text().then((data) => {
                if (response.ok) {
                    fetch(
                        `http://localhost:8080/user/updateNotifyEmail?id=${user.userId}`,
                        {
                            method: "POST",
                            mode: "cors",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        },
                    );
                    localStorage.setItem("user", JSON.stringify(user));
                    router.push("/home");
                } else {
                    console.log(data);
                }
                // localStorage.setItem("user", JSON.stringify(user));
                // router.push("/home");
            });
        });
    };

    return (
        <div>
            <div className="w-fit h-fit ml-6">
                <label className="text-white text-[32px] font-bold leading-normal">
                    Payment
                </label>
                <div className="w-fit h-fit mt-2 flex flex-row">
                    <div className="w-[165px] text-orange-500 text-2xl font-medium leading-normal">
                        Select Card
                    </div>
                    <SelectCardDropdown
                        cards={currentCardList}
                        classname="w-[299px] h-[35.54px] mx-5"
                    />
                    <div className="w-fit text-white text-[15px] font-medium leading-normal">
                        Can save only 3 cards at max
                    </div>
                </div>
                <div className="w-fit h-fit mt-2 flex flex-row">
                    <div className="w-[165px] text-orange-500 text-2xl font-medium leading-normal">
                        Card Number
                    </div>
                    <InputField
                        placeholder="Enter card number..."
                        name="cardNumber"
                        value={card.cardNumber}
                        onChange={handleChangeCard}
                        classname="w-[299px] h-[35.54px] mx-5"
                    />
                    <div className="w-fit text-white text-[15px] font-medium leading-normal">
                        The 16 digits on front of your card
                    </div>
                </div>
                <div className="w-fit h-fit flex flex-row">
                    <label className="w-[165px] mt-1 text-orange-500 text-2xl font-medium leading-normal">
                        Expiration Date
                    </label>
                    <div className="w-fit h-fit mx-5 mt-1.5 flex items-center">
                        <InputField
                            placeholder="Month"
                            name="expMonth"
                            value={card.expMonth}
                            classname="w-[80px] h-9"
                        />
                        <p className="w-1 mx-3 text-white text-[15px] font-medium leading-normal">
                            /
                        </p>
                        <InputField
                            placeholder="Year"
                            name="expYear"
                            value={card.expYear}
                            classname="w-[80px] h-9"
                        />
                    </div>
                    <label className="w-fit mt-1 text-orange-500 text-2xl font-medium leading-normal">
                        CVV
                    </label>
                    <InputField
                        placeholder="Enter cvv..."
                        name="secCode"
                        value={card.secCode}
                        classname="w-[200.50px] h-[35.54px] mt-1.5 ml-5"
                    />
                </div>
                <div className="w-fit h-fit mt-5 flex flex-row items-end">
                    <button className="w-[174px] h-9 mr-10 bg-red-600 rounded-[20px] flex flex-col items-center ">
                        <p className="w-[200.95px] h-[14.40px] text-white text-2xl font-bold leading-normal">
                            Delete Card
                        </p>
                    </button>
                    <button className="w-[174px] h-9 mx-30 bg-orange-200 rounded-[20px] flex flex-col items-center ">
                        <p className="w-[200.95px] h-[14.40px] absolute text-zinc-700 text-2xl font-bold leading-normal">
                            Update Card
                        </p>
                    </button>
                    <button
                        onClick={handleAddCard}
                        className="w-[174px] h-9 ml-96 bg-orange-500 rounded-[20px] flex flex-col items-center "
                    >
                        <p className="w-[200.95px] h-[14.40px] text-white text-2xl font-bold leading-normal">
                            Add Card
                        </p>
                    </button>
                </div>
            </div>
            <div className="w-fit h-fit ml-6 mt-20">
                <label className="w-fit text-white text-[32px] font-bold leading-normal">
                    Billing Address
                </label>
                <div className="h-fit mb-2 flex flex-row">
                    <label className="w-[100px] mr-5 text-orange-500 text-2xl font-medium leading-normal">
                        Line 1
                    </label>
                    <InputField
                        placeholder="Enter street address..."
                        name="street"
                        value={address.street}
                        onChange={handleChangeAddress}
                        classname="w-[298.23px] h-[35.54px]"
                    />
                    <label className="w-[65px] mx-5 text-orange-500 text-2xl font-medium leading-normal">
                        Line 2
                    </label>
                    <InputField
                        placeholder="Enter street address..."
                        name="street"
                        value={address.street}
                        onChange={handleChangeAddress}
                        classname="w-[298.23px] h-[35.54px]"
                    />
                </div>
                <div className="w-fit h-fit mb-2 flex flex-row">
                    <label className="w-[100px] mr-5 text-orange-500 text-2xl font-medium leading-normal">
                        State
                    </label>
                    <InputField
                        placeholder="Enter state..."
                        name="state"
                        value={address.state}
                        onChange={handleChangeAddress}
                        classname="w-[298.23px] h-[35.54px]"
                    />
                    <label className="w-[65px] mx-5 text-orange-500 text-2xl font-medium leading-normal">
                        City
                    </label>
                    <InputField
                        placeholder="Enter city..."
                        name="city"
                        value={address.city}
                        onChange={handleChangeAddress}
                        classname="w-[298.23px] h-[35.54px]"
                    />
                </div>
                <div className="w-fit h-fit flex flex-row">
                    <label className="w-[100px] mr-5 text-orange-500 text-2xl font-medium leading-normal">
                        Zip Code
                    </label>
                    <InputField
                        placeholder="Enter zip code..."
                        name="zip"
                        value={address.zip}
                        onChange={handleChangeAddress}
                        classname="w-[298.23px] h-[35.54px]"
                    />
                </div>
            </div>
        </div>
    );
}
export default PaymentCardSection;