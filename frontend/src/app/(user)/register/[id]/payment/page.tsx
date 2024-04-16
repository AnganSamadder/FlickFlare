"use client";
import InputField from "@/app/components/fields/InputField";
import { Card } from "@/app/interfaces/card";
import { Address } from "@/app/interfaces/address";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Payment() {
  const router = useRouter();

  const [address, setAddress] = useState<Address>({
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [passwordConfirmed, setPasswordConfirmed] = useState<boolean>(false);
  const [card, setCard] = useState<Card>({
    cardNumber: "",
    expMonth: "",
    expYear: "",
    secCode: "",
  });

  const [warning, setWarning] = useState<string>("");

  const handleChangeCard = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirm = () => {
    fetch("http://localhost:8080/user/register", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(user),
    }).then((response) => {
      response.text().then((data) => {
        if (response.ok) {
          // console.log(data);
          router.push(`/register/${data}/pending`);
        } else {
          setWarning(data);
        }
      });
    });
  };

  // useEffect(() => {
  //   if (
  //     user &&
  //     user.email.length > 0 &&
  //     user.password.length > 0 &&
  //     user.firstName.length > 0 &&
  //     user.lastName.length > 0 &&
  //     user.phoneNumber.length > 0 &&
  //     passwordConfirmed
  //   ) {
  //     setButtonDisabled(false);
  //   } else {
  //     setButtonDisabled(true);
  //   }
  // }, [user, passwordConfirmed]);

  return (
    <div className="h-[86vh] py-4 flex-col justify-center">
      <div className="w-screen text-orange-500 text-5xl font-bold text-center font-['Maven Pro'] leading-normal">
        Payment Details
      </div>
      <div className="h-[70vh] p-3 flex justify-center">
        <div className="w-3/5 px-8 flex flex-col justify-evenly items-center bg-zinc-700 bg-opacity-50 rounded-2xl">
          <div className="w-full h-full flex justify-evenly items-center">
            <div className="w-full h-full flex flex-col justify-evenly items-center">
              <div className="text-orange-500 text-2xl font-medium font-['Maven Pro']">
                Card number
              </div>
              <InputField
                placeholder="Enter card number..."
                name="cardNumber"
                value={card.cardNumber}
                onChange={handleChangeCard}
                classname="w-3/4 h-[5vh]"
              />
              <div className="text-orange-500 text-2xl font-medium font-['Maven Pro']">
                Expiration Date
              </div>
              <div className="w-fit h-fit flex flex-row">
                <div className="w-fit h-fit mx-5 mt-1.5 flex items-center">
                  <InputField
                    placeholder="Month"
                    name="expMonth"
                    value={card.expMonth}
                    onChange={handleChangeCard}
                    classname="w-[80px] h-9"
                  />
                  <p className="w-1 mx-3 text-white text-[15px] font-medium leading-normal">
                    /
                  </p>
                  <InputField
                    placeholder="Year"
                    name="expYear"
                    value={card.expYear}
                    onChange={handleChangeCard}
                    classname="w-[80px] h-9"
                  />
                </div>
              </div>
              <div className="text-orange-500 text-2xl font-medium font-['Maven Pro']">
                CVV
              </div>
              <InputField
                placeholder="Enter cvv..."
                name="secCode"
                value={card.secCode}
                onChange={handleChangeCard}
                classname="w-3/4 h-[5vh]"
              />
            </div>
            <div className="w-full h-full flex flex-col justify-evenly items-center">
              <div className="text-orange-500 text-2xl font-medium font-['Maven Pro']">
                Billing Address Line 1
              </div>
              <InputField
                placeholder="Enter address line 1..."
                name="street"
                value={address.street}
                onChange={handleChangeAddress}
                classname="w-3/4 h-[5vh]"
              />
              <div className="text-orange-500 text-2xl font-medium font-['Maven Pro']">
                City
              </div>
              <InputField
                placeholder="Enter city..."
                name="city"
                value={address.city}
                onChange={handleChangeAddress}
                classname="w-3/4 h-[5vh]"
              />
              <div className="w-fit h-fit flex flex-row">
                <div className="w-full h-fit mt-1.5 flex items-center justify-evenly">
                  <div className="text-orange-500 text-2xl font-medium font-['Maven Pro']">
                    State
                  </div>
                  <InputField
                    name="expMonth"
                    value={card.expMonth}
                    onChange={handleChangeCard}
                    classname="w-[60px] h-9 px-2"
                  />
                  <div className="text-orange-500 text-2xl font-medium font-['Maven Pro']">
                    Zip
                  </div>
                  <InputField
                    name="expYear"
                    value={card.expYear}
                    onChange={handleChangeCard}
                    classname="w-[60px] h-9 px-2"
                  />
                </div>
              </div>
            </div>
          </div>
          {warning && (
            <div className="text-red-500 text-l font-medium font-['Maven Pro'] leading-normal">
              {warning}
            </div>
          )}
          <div className="p-8">
            <button
              disabled={buttonDisabled}
              // onClick={handleRegister}
              className="w-[10vw] h-[6vh] bg-orange-500 rounded-[20px] text-white text-2xl font-bold font-['Maven Pro'] leading-normal
              disabled:bg-amber-900 disabled:text-gray-500 disabled:cursor-not-allowed"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
