"use client";
import { User } from "@/app/interfaces/user";
import InputField from "@/app/components/InputField";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [passwordConfirmed, setPasswordConfirmed] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    subToPromos: false,
    cards: [],
    addresses: [],
  });
  const [warning, setWarning] = useState<string>("");

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
      subToPromos: e.target.checked,
    });
  };

  const handleRegister = () => {
    fetch("http://localhost:8080/user/register", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
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

  useEffect(() => {
    if (
      user &&
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.firstName.length > 0 &&
      user.lastName.length > 0 &&
      user.phoneNumber.length > 0 &&
      passwordConfirmed
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user, passwordConfirmed]);

  return (
    <div className="h-[86vh] py-4 flex-col justify-center">
      <div className="w-screen text-orange-500 text-5xl font-bold text-center font-['Maven Pro'] leading-normal">
        Create Account
      </div>
      <div className="h-[70vh] p-3 flex justify-center">
        <div className="w-3/5 px-8 flex flex-col justify-evenly items-center bg-zinc-700 bg-opacity-50 rounded-2xl">
          <div className="w-full h-full flex justify-evenly items-center">
            <div className="w-full h-full flex flex-col justify-evenly items-center">
              <div className="text-orange-500 text-2xl font-medium font-['Maven Pro']">
                First Name
              </div>
              <InputField
                placeholder="Enter first name..."
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
                classname="w-3/4 h-[5vh]"
              />
              <div className="text-orange-500 text-2xl font-medium font-['Maven Pro']">
                Last Name
              </div>
              <InputField
                placeholder="Enter last name..."
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
                classname="w-3/4 h-[5vh]"
              />
              <div className="text-orange-500 text-2xl font-medium font-['Maven Pro']">
                Email
              </div>
              <InputField
                placeholder="Enter email..."
                name="email"
                value={user.email}
                onChange={handleChange}
                classname="w-3/4 h-[5vh]"
              />
            </div>
            <div className="w-full h-full flex flex-col justify-evenly items-center">
              <div className="text-orange-500 text-2xl font-medium font-['Maven Pro']">
                Phone Number
              </div>
              <InputField
                placeholder="Enter phone number..."
                name="phoneNumber"
                value={user.phoneNumber}
                onChange={handleChange}
                classname="w-3/4 h-[5vh]"
              />
              <div className="text-orange-500 text-2xl font-medium font-['Maven Pro']">
                Password
              </div>
              <InputField
                placeholder="Enter password..."
                name="password"
                type="password"
                value={user.password}
                onChange={handleChange}
                classname="w-3/4 h-[5vh]"
              />
              <div className="text-orange-500 text-2xl font-medium font-['Maven Pro']">
                Confirm Password
              </div>
              <InputField
                placeholder="Enter password..."
                name="confirmPassword"
                type="password"
                onChange={handleChange}
                classname="w-3/4 h-[5vh]"
              />
            </div>
          </div>
          <div className="px-16 self-start">
            <input
              type="checkbox"
              id="subscribe"
              checked={user.subToPromos}
              onChange={handleSubscribe}
              className="appearance-none w-6 h-6 border-2 border-orange-500 rounded-md align-middle
              checked:bg-orange-500 checked:border-transparent
              checked:before:content-['\2714'] checked:before:text-white checked:before:text-3xl checked:before:text-center checked:before:leading-[0] checked:before:ml-[2px]"
            />
            <label
              htmlFor="subscribe"
              className="px-4 text-orange-500 text-xl font-medium font-['Maven Pro'] leading-normal"
            >
              I agree to receive emails about new movies or promotions?
            </label>
          </div>
          {warning && (
            <div className="text-red-500 text-l font-medium font-['Maven Pro'] leading-normal">
              {warning}
            </div>
          )}
          <div className="p-8">
            <button
              disabled={buttonDisabled}
              onClick={handleRegister}
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
