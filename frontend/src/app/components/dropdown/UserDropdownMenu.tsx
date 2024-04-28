"use client";
import React, {useEffect, useRef, useState} from "react";

import {useLocalStorage} from "@/app/utils/useLocalStorage";
import {User} from "@/app/interfaces/user";
import {nullUser} from "@/app/globals";
import {useRouter} from "next/navigation";

interface Option {
    label: string;
    value: string;
}

const UserDropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [options, setOptions] = useState<Option[]>([]);
    const [user, setUser, resetUser] = useLocalStorage<User>("user", nullUser);
    const router = useRouter();

    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            setDropdownOpen(false);
        }
    };

    const handleSignOut = () => {
        router.push('/home');
        resetUser();
    };

    const getOptions = (userType: string | null) => {
        switch (userType) {
            case "user":
                return [
                    {label: "Edit Profile", value: "/edit"},
                    {label: "Sign Out", value: "signout"},
                ];
            case "admin":
                return [
                    {label: "Edit Profile", value: "/edit"},
                    {label: "Manage Users", value: "/manage/users"},
                    {label: "Manage Movies", value: "/manage/movies"},
                    {label: "Manage Promotions", value: "/manage/promotions"},
                    {label: "Sign Out", value: "signout"},
                ];
            default:
                return [
                    {label: "Login", value: "/login"},
                    {label: "Sign Up", value: "/register"},
                ];
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setOptions(
            getOptions(user == nullUser ? "guest" : user.admin ? "admin" : "user"),
        );
    }, [user]);

    return (
        <div ref={ref}>
            <div onClick={() => setDropdownOpen(!dropdownOpen)}>
                <img
                    className="w-[54px] h-[49px] rounded-full"
                    src="https://toolset.com/wp-content/uploads/2018/06/909657-profile_pic.png"
                />
            </div>
            <div className="absolute pt-2 right-[6vw]">
                {dropdownOpen && (
                    <div
                        className="h-full pt-1 flex-col object-right bg-zinc-900 bg-opacity-90 text-right rounded-xl align-middle">
                        {user != nullUser && (
                            <div
                                className="w-[15vw] m-3 p-2 bg-zinc-900 rounded-xl text-white text-4xl font-extrabold align-middle">
                                Welcome,{" " + user.firstName}
                            </div>
                        )}
                        {options.map((option: Option) => (
                            <div
                                key={option.label}
                                className="w-[15vw] m-3 p-2 bg-zinc-900 hover:bg-black hover:bg-opacity-70 rounded-xl align-middle"
                            >
                                {option.value === "signout" ? (
                                    <button>
                                        <div
                                            key={"userSignout"}
                                            onClick={handleSignOut}
                                            className="flex text-white text-2xl rounded-md"
                                        >
                                            {option.label}
                                        </div>
                                    </button>
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
