"use client";
import React from "react";

const UserDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const handleSignOut = () => {
    localStorage.setItem("userType", "guest");
    localStorage.removeItem("user");
    window.location.href = "/home";
  };

  const getOptions = () => {
    switch (localStorage.getItem("userType")) {
      case "user":
        return [
          { label: "Edit Profile", value: "/manage/users/profile" },
          { label: "Sign Out", value: "signout" },
        ];
      case "admin":
        return [
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

  const options = getOptions();

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
            {(localStorage.getItem("userType") === "admin" ||
              localStorage.getItem("userType") === "user") && (
              <div className="w-[15vw] m-3 p-2 bg-zinc-900 rounded-xl text-white text-4xl font-extrabold align-middle">
                Welcome,{" "}
                {JSON.parse(localStorage.getItem("user") || "{}").firstName}
              </div>
            )}
            {options.map((option) => (
              <div className="w-[15vw] m-3 p-2 bg-zinc-900 hover:bg-black hover:bg-opacity-70 rounded-xl align-middle">
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
