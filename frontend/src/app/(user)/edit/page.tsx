"use client";
import React, { useState } from "react";
import { Address } from "@/app/interfaces/address";
import { User } from "@/app/interfaces/user";
import { useRouter } from "next/navigation";
import { Card } from "@/app/interfaces/card";
import InputField from "@/app/components/fields/InputField";
import UserPage from "@/app/components/UserPage";
import { nullUser } from "@/app/globals";
import { useLocalStorage } from "@/app/utils/useLocalStorage";
import PaymentCardSection from "@/app/components/ui/PaymentCardSection";

export default function EditProfile() {
  const router = useRouter();
  const [address, setAddress] = useState<Address>({
    streetOne: "",
    streetTwo: "",
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
  const handleSubscribe = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      subToPromo: e.target.checked,
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

  // useEffect(() => {
  //   localStorage.getItem("user");
  //   // console.log(localStorage.getItem("userType"));
  //   if (
  //     !localStorage.getItem("userType") ||
  //     localStorage.getItem("userType") === "guest"
  //   ) {
  //     redirect(`/login`);
  //   }
  // }, []);

  return (
    <UserPage>
      <div className="w-screen h-[86vh] flex-col align-cen mb-40">
        <div className="text-center text-5xl font-bold text-orange-500 mb-2">
          Edit Account
        </div>
        <div className="w-fit h-fit mx-10 mb-5 bg-zinc-700 bg-opacity-50 flex flex-row rounded-[17px]">
          <div className="w-fit h-fit py-10 px-6 flex-col items-center bg-transparent">
            <label className="w-fit h-fit text-orange-500 text-2xl font-medium leading-normal">
              Name*
            </label>
            <InputField
              placeholder="Enter first name..."
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
              classname="w-[250px] h-[33.08px] mb-2 mt-2"
            />
            <InputField
              placeholder="Enter last name..."
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              classname="w-[250px] h-[33.08px] mb-10"
            />
            <label className="w-fit h-fit text-orange-500 text-2xl font-medium leading-normal">
              Phone Number*
            </label>
            <InputField
              placeholder="Enter numbers only..."
              name="phoneNumber"
              value={user.phoneNumber}
              onChange={handleChange}
              classname="w-[250px] h-[33.08px] mt-2 mb-10"
            />
            <label className="w-fit h-fit text-orange-500 text-2xl font-medium leading-normal">
              Email
            </label>
            <InputField
              placeholder="Enter email..."
              name="email"
              value={user.email}
              onChange={handleChange}
              disabled={true}
              classname="w-[250px] h-[33.08px] mt-2 mb-10"
            />
            <label className="w-fit h-fit text-orange-500 text-2xl font-medium leading-normal">
              Password
            </label>
            <InputField
              placeholder="Enter password..."
              name="password"
              value={user.password}
              onChange={handleChange}
              classname="w-[250px] h-[33.08px] mb-2 mt-2"
            />
            <InputField
              placeholder="Confirm password..."
              name="confirmPassword"
              onChange={handleChange}
              classname="w-[250px] h-[33.08px]"
            />
          </div>
          <div className="w-fit h-fit m-4 p-2 bg-zinc-700 rounded-xl">
            <PaymentCardSection />
            <div>
              <input
                type="checkbox"
                id="optInPromo"
                name="receivePromo"
                value="checkPromo"
                checked={user.subToPromo}
                onChange={handleSubscribe}
                className="ml-8"
              />
              <label className="p-2 text-white text-2xl">
                Opt-in for promotions?
              </label>
            </div>
            <div className="w-fit h-fit mt-16 mx-5 flex flex-col justify-end">
              <button
                onClick={handleConfirm}
                className="w-fit h-fit px-5 py-2 bg-orange-500 text-white text-2xl text-center font-bold leading-normal rounded-[20px]"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </UserPage>
  );
}
