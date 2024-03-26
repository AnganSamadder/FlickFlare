"use client";
import React, { useEffect } from "react";

interface Option {
  label: string;
  value: string;
}

const UserDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [options, setOptions] = React.useState<Option[]>([]);
  const [userName, setUserName] = React.useState<string>("");
  const [userType, setUserType] = React.useState<string>("");

  const handleSignOut = () => {
    // console.log("signing out");
    setUserType("guest");
    setUserName("-1");
    window.location.href = "/home";
  };

  const getOptions = (userType: string | null) => {
    switch (userType) {
      case "user":
        return [
          { label: "Edit Profile", value: "/edit" },
          { label: "Sign Out", value: "signout" },
        ];
      case "admin":
        return [
          { label: "Edit Profile", value: "/edit" },
          { label: "Manage Users", value: "/manage/users" },
          { label: "Manage Movies", value: "/manage/movies" },
          { label: "Manage Promotions", value: "/manage/promotions" },
          { label: "Sign Out", value: "signout" },
        ];
      default:
        return [
          { label: "Login", value: "/login" },
          { label: "Sign Up", value: "/register" },
        ];
    }
  };

  useEffect(() => {
    const value = localStorage.getItem("userType") || "";
    const name = JSON.parse(localStorage.getItem("user") || "{}").firstName;
    // console.log("0", value, name);
    setUserType(value);
    setUserName(name);

    window.addEventListener("storage", () => {
      const value = localStorage.getItem("userType");
      const name = JSON.parse(localStorage.getItem("user") || "{}").firstName;
      // console.log("storage event", value);
      setUserType(value || "");
      setUserName(name);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("userType", userType);
    setOptions(getOptions(userType));
  }, [userType]);

  useEffect(() => {
    if (userName === "-1") {
      localStorage.removeItem("user");
    } else if (localStorage.getItem("user") && userType === "") {
      setUserType(
        JSON.parse(localStorage.getItem("user") || "{}").admin
          ? "admin"
          : "user",
      );
    }
  }, [userName]);

  return (
    <div>
      <div onClick={() => setDropdownOpen(!dropdownOpen)}>
        <img
          className="w-[54px] h-[49px] rounded-full"
          src="https://toolset.com/wp-content/uploads/2018/06/909657-profile_pic.png"
        />
      </div>
      <div className="absolute pt-2 right-[6vw]">
        {dropdownOpen && (
          <div className="h-full pt-1 flex-col object-right bg-zinc-900 bg-opacity-90 text-right rounded-xl align-middle">
            {(userType === "admin" || userType === "user") && (
              <div className="w-[15vw] m-3 p-2 bg-zinc-900 rounded-xl text-white text-4xl font-extrabold align-middle">
                Welcome,{" " + userName}
              </div>
            )}
            {options.map((option) => (
              <div
                key={option.label}
                className="w-[15vw] m-3 p-2 bg-zinc-900 hover:bg-black hover:bg-opacity-70 rounded-xl align-middle"
              >
                {option.value === "signout" ? (
                  <div
                    onClick={handleSignOut}
                    className="flex text-white text-2xl rounded-md"
                  >
                    {option.label}
                  </div>
                ) : (
                  <a
                    href={option.value}
                    className="flex text-white text-2xl rounded-md"
                  >
                    {option.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDropdown;
