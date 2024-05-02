"use client";
import InputField from "@/app/components/fields/InputField";
import PaymentCards from "@/app/components/ui/pagepart/PaymentCards";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/app/interfaces/user";
import { nullUser } from "@/app/globals";

const EditUser = ({ id }: { id?: string }) => {
  const router = useRouter();

  const [passwordConfirmed, setPasswordConfirmed] = useState<{
    changed: boolean;
    confirmed: boolean;
  }>({ changed: false, confirmed: false });
  const [user, setUser] = useState<User>(nullUser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "password") {
      setUser({
        ...user,
        password: e.target.value,
      });
    } else if (e.target.name === "confirmPassword") {
      if (e.target.value === user.password) {
        setPasswordConfirmed({
          changed: passwordConfirmed.changed,
          confirmed: true,
        });
      } else {
        setPasswordConfirmed({
          changed: passwordConfirmed.changed,
          confirmed: false,
        });
      }
    } else {
      if (e.target.name === "password") {
        setPasswordConfirmed({
          changed: true,
          confirmed: passwordConfirmed.confirmed,
        });
      }
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
    if (passwordConfirmed.changed && !passwordConfirmed.confirmed) {
      alert("Passwords do not match.");
      return;
    }

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
          if (!id) {
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
            router.push(`/manage/users`);
          }
        } else {
          console.log(data);
        }
      });
    });
  };

  useEffect(() => {
    // console.log(user);
    if (id) {
      fetch(`http://localhost:8080/user/get?id=${id}`).then((response) => {
        if (response.ok) {
          response.json().then((data) => setUser(data));
        }
      });
    } else {
      // console.log(JSON.parse(localStorage.getItem("user") as string));
      setUser(JSON.parse(localStorage.getItem("user") as string));
      console.log(user);
    }
  }, [id]);

  return (
    <div className="w-screen h-[86vh] flex-col align-cen mb-40">
      <div className="text-center text-5xl font-bold text-orange-500 my-2">
        Edit Account
      </div>
      <div className="h-fit mx-10 mb-5 bg-zinc-700 bg-opacity-50 flex flex-row rounded-[17px]">
        <div className="h-fit py-10 px-6 flex-col items-center bg-transparent">
          <label className="h-fit text-orange-500 text-2xl font-medium leading-normal">
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
        <div className="grow m-4 p-2 bg-zinc-700 rounded-xl">
          <PaymentCards currentUser={user} />
          <div className="mt-4 mx-6">
            <label className="my-4 w-fit text-white text-[32px] font-bold leading-normal">
              Billing Address
            </label>
            <div className="h-fit mb-2 flex flex-row">
              <label className="w-[100px] mr-5 text-orange-500 text-2xl font-medium leading-normal">
                Line 1
              </label>
              <InputField
                placeholder="Enter street address..."
                name="street"
                value={user.street}
                onChange={handleChange}
                classname="w-[298.23px] h-[35.54px]"
              />
              <label className="w-[65px] mx-5 text-orange-500 text-2xl font-medium leading-normal">
                Line 2
              </label>
              <InputField
                placeholder="Enter street address..."
                name="street"
                value={user.streetTwo}
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
                value={user.state}
                onChange={handleChange}
                classname="w-[298.23px] h-[35.54px]"
              />
              <label className="w-[65px] mx-5 text-orange-500 text-2xl font-medium leading-normal">
                City
              </label>
              <InputField
                placeholder="Enter city..."
                name="city"
                value={user.city}
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
                value={user.zip}
                onChange={handleChange}
                classname="w-[298.23px] h-[35.54px]"
              />
            </div>
          </div>
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
          <div className="m-4 flex flex-col justify-end">
            <button
              onClick={handleConfirm}
              className="w-40 px-5 py-2 bg-orange-500 text-white text-2xl text-center font-bold leading-normal rounded-[20px]"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
