"use client";
import Link from "next/link";
import InputField from "@/app/components/fields/InputField";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [warning, setWarning] = useState<string>("");

  const handleLogin = () => {
    // console.log(email, password);
    fetch(
      `http://localhost:8080/user/login?email=${email.replace(/\+/g, "%2B")}&password=${password}`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      },
    ).then((response) => {
      response.text().then((data) => {
        if (response.ok) {
          // console.log(data);
          fetch(`http://localhost:8080/user/get?id=${data}`).then(
            (response) => {
              response.json().then((data) => setUser(JSON.stringify(data)));
            },
          );
        } else {
          setWarning(data);
        }
      });
    });
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (email && password) {
        handleLogin();
      }
    }
  };

  useEffect(() => {
    if (user) {
      // console.log(user);
      localStorage.setItem("user", user);
      window.dispatchEvent(new Event("storage"));
      router.push("/home");
    }
  }, [user]);

  return (
    <div className="h-[86vh] flex-col justify-center">
      <div className="w-screen py-4 text-orange-500 text-5xl font-bold text-center font-['Maven Pro'] leading-normal">
        Login
      </div>
      <div className="h-2/3 p-10 flex justify-center">
        <div className="w-3/5 h-full py-16 flex flex-col justify-evenly items-center bg-zinc-700 bg-opacity-50 rounded-2xl">
          <div className="text-orange-500 text-2xl font-medium font-['Maven Pro']">
            Email
          </div>
          <InputField
            placeholder="Enter email..."
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyPress}
            classname="w-2/5 h-[5vh]"
          />
          <div className="text-orange-500 text-2xl font-medium font-['Maven Pro']">
            Password
          </div>
          <InputField
            placeholder="Enter password..."
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyPress}
            value={password}
            classname="w-2/5 h-[5vh]"
          />
          {warning && (
            <div className="text-red-500 text-l font-medium font-['Maven Pro'] leading-normal">
              {warning}
            </div>
          )}
          <div className="text-orange-500 text-xl font-medium font-['Maven Pro'] leading-normal">
            Forgot Password?
          </div>
          <div className="pt-4">
            <button
              onClick={handleLogin}
              className="w-[10vw] h-[6vh] bg-orange-500 rounded-[20px] text-white text-2xl font-bold font-['Maven Pro'] leading-normal"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <span className="text-orange-50 text-2xl font-medium font-['Maven Pro'] leading-normal">
          Don’t have a account?
        </span>
        <Link
          className="pl-4 text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal"
          href={"/register"}
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
