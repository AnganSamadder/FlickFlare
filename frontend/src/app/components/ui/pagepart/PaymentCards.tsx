"use client";
import InputField from "@/app/components/fields/InputField";
import React, { useEffect, useState } from "react";
import { Card } from "@/app/interfaces/card";
import { useLocalStorage } from "@/app/utils/useLocalStorage";
import { User } from "@/app/interfaces/user";
import { nullCard, nullUser } from "@/app/globals";
import SelectCardDropdown from "@/app/components/dropdown/SelectCardDropdown";
import { useRouter } from "next/navigation";

const PaymentCards = ({
  checkout,
  user,
  onSubmit,
}: {
  user?: User;
  checkout?: boolean;
  onSubmit?: () => void;
}) => {
  if (!user) {
    user = nullUser;
  }
  const router = useRouter();
  const [card, setCard] = useState<Card>(nullCard);
  const [currentCardList, setCurrentCardList] = useState<Card[]>([]);
  const [currentUser, setCurrentUser, resetCurrentUser] = useLocalStorage<User>(
    "user",
    nullUser,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddCard = () => {
    currentUser.cards?.push(card);
    setCard(card);
  };

  useEffect(() => {
    if (currentUser === nullUser) {
    }
  }, []);

  useEffect(() => {
    if (currentUser.id) {
      fetch(`http://localhost:8080/user/getCards?id=${currentUser.id}`).then(
        (response) => {
          console.log(
            `http://localhost:8080/user/getCards?id=${currentUser.id}`,
          );
          if (response.ok) {
            response.json().then((data) => {
              setCurrentCardList(data);
            });
          } else {
            console.log("Error getting cards");
          }
        },
      );
    }
  }, [currentUser]);

  return (
    <div className="mx-6">
      {!checkout ? (
        <div>
          <div className="h-full flex flex-row">
            <div className="w-1/2 h-full flex-col">
              <label className="text-white text-[32px] font-bold leading-normal">
                Payment
              </label>
              <div className="w-fit h-fit mt-2 flex flex-row">
                <div className="w-[165px] text-orange-500 text-2xl font-medium leading-normal">
                  Select Card
                </div>
                <SelectCardDropdown
                  cards={currentCardList}
                  selectedCard={card}
                  setSelectedCard={setCard}
                  classname="w-[299px] h-9 mx-5"
                />
              </div>
              <div className="w-fit h-fit mt-2 flex flex-row">
                <div className="w-[165px] text-orange-500 text-2xl font-medium leading-normal">
                  Card Number
                </div>
                <InputField
                  placeholder="Enter card number..."
                  name="cardNumber"
                  value={card.cardNumber}
                  onChange={handleChange}
                  classname="w-[299px] h-9 mx-5"
                />
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
                    onChange={handleChange}
                    classname="w-[80px] h-9"
                  />
                  <p className="w-1 mx-3 text-white text-[15px] font-medium leading-normal">
                    /
                  </p>
                  <InputField
                    placeholder="Year"
                    name="expYear"
                    value={card.expYear}
                    onChange={handleChange}
                    classname="w-[80px] h-9"
                  />
                </div>
              </div>
              <div className="w-fit h-fit mt-2 flex flex-row">
                <label className="w-fit mt-1 text-orange-500 text-2xl font-medium leading-normal">
                  CVV
                </label>
                <InputField
                  placeholder="Enter cvv..."
                  name="secCode"
                  value={card.secCode}
                  onChange={handleChange}
                  classname="mx-[8.5rem]"
                />
              </div>
            </div>
            <div className="w-1/2 flex-col items-start">
              <label className="text-white text-[32px] font-bold leading-normal">
                Billing Address
              </label>
              <div className="h-fit my-2 flex flex-row">
                <label className="w-[100px] mr-5 text-orange-500 text-2xl font-medium leading-normal">
                  Line 1
                </label>
                <InputField
                  placeholder="Enter street address..."
                  name="street"
                  value={card.street}
                  onChange={handleChange}
                  classname="w-[21.5rem] h-9"
                />
              </div>
              <div className="h-fit mb-2 flex flex-row">
                <label className="w-[100px] mr-5 text-orange-500 text-2xl font-medium leading-normal">
                  Line 2
                </label>
                <InputField
                  placeholder="Enter street address..."
                  name="street"
                  value={card.streetTwo}
                  onChange={handleChange}
                  classname="w-[21.5rem] h-9"
                />
              </div>
              <div className="w-fit h-fit mb-2 flex flex-row">
                <label className="w-[100px] mr-5 text-orange-500 text-2xl font-medium leading-normal">
                  State
                </label>
                <InputField
                  placeholder="State"
                  name="state"
                  value={card.state}
                  onChange={handleChange}
                  classname="w-20 h-9"
                />
                <label className="w-[65px] mx-5 text-orange-500 text-2xl font-medium leading-normal">
                  City
                </label>
                <InputField
                  placeholder="Enter city..."
                  name="city"
                  value={card.city}
                  onChange={handleChange}
                  classname="w-40 h-9"
                />
              </div>
              <div className="w-fit h-fit flex flex-row">
                <label className="w-[100px] mr-5 text-orange-500 text-2xl font-medium leading-normal">
                  Zip Code
                </label>
                <InputField
                  placeholder="Enter zip code..."
                  name="zip"
                  value={card.zip}
                  onChange={handleChange}
                  classname="w-[21.5rem] h-9"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-end my-2 justify-between">
            <button className="px-4 rounded-[20px] bg-red-600 text-white text-2xl font-bold leading-normal">
              Delete Card
            </button>
            <button className="px-4 mr-20 rounded-[20px] bg-orange-200 text-zinc-700 text-2xl font-bold leading-normal">
              Update Card
            </button>
            <div className="w-1/4" />
            <button
              onClick={handleAddCard}
              className="px-4 rounded-[20px] bg-orange-500 text-white text-2xl font-bold leading-normal"
            >
              Add Card
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="h-full">
            <label className="text-white text-[32px] font-bold leading-normal">
              Payment
            </label>
            <div className="w-fit h-fit mt-2 flex flex-row">
              <div className="w-[165px] text-orange-500 text-2xl font-medium leading-normal">
                Select Card
              </div>
              <SelectCardDropdown
                cards={currentCardList}
                selectedCard={card}
                setSelectedCard={setCard}
                classname="w-[299px] h-[35.54px] mx-5"
              />
              <div className="w-fit text-white text-[15px] font-medium leading-normal">
                Can only have 3 cards at max
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
                onChange={handleChange}
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
            <div className="h-4" />
          </div>
          <div className="mt-4">
            <label className="my-4 w-fit text-white text-[32px] font-bold leading-normal">
              Billing Address
            </label>
            <div className="h-fit mb-2 flex flex-row">
              <label className="w-[100px] mr-5 text-orange-500 text-2xl font-medium leading-normal">
                Line 1
              </label>
              <InputField
                placeholder="Enter street card..."
                name="street"
                value={card.street}
                onChange={handleChange}
                classname="w-[298.23px] h-[35.54px]"
              />
              <label className="w-[65px] mx-5 text-orange-500 text-2xl font-medium leading-normal">
                Line 2
              </label>
              <InputField
                placeholder="Enter street card..."
                name="street"
                value={card.streetTwo}
                onChange={handleChange}
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
                value={card.state}
                onChange={handleChange}
                classname="w-[298.23px] h-[35.54px]"
              />
              <label className="w-[65px] mx-5 text-orange-500 text-2xl font-medium leading-normal">
                City
              </label>
              <InputField
                placeholder="Enter city..."
                name="city"
                value={card.city}
                onChange={handleChange}
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
                value={card.zip}
                onChange={handleChange}
                classname="w-[298.23px] h-[35.54px]"
              />
            </div>
            <div className="flex py-2 justify-between">
              <button
                onClick={() => router.push("/home")}
                className="px-4 rounded-[20px] bg-red-600 text-white text-2xl font-bold leading-normal hover:bg-red-700 focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
              <button
                onClick={onSubmit}
                className="px-4 rounded-[20px] bg-orange-500 text-white text-2xl font-bold leading-normal hover:bg-orange-600 focus:outline-none focus:shadow-outline"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default PaymentCards;
