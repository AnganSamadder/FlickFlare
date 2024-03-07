import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

interface UserDropdownProps {
    userType: "guest" | "user" | "admin";
}

const UserDropdown = (props: UserDropdownProps) => {
    const getOptions = () => {
        switch (props.userType) {
            case "user":
                return [
                    { label: "Sign Out", value: "/" },
                    { label: "Edit Profile", value: "/manage/users/profile" },
                ];
            case "admin":
                return [
                    { label: "Manage Users", value: "/manage/users" },
                    { label: "Manage Movies", value: "/manage/movies" },
                    { label: "Manage Promotions", value: "/manage/promotions" },
                    { label: "Sign Out", value: "/" },
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
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <img
                    className="w-[54px] h-[49px] rounded-full"
                    src="https://toolset.com/wp-content/uploads/2018/06/909657-profile_pic.png"
                />
            </DropdownTrigger>
            <DropdownMenu className="bg-zinc-700 rounded-md">
                {options.map((option) => (
                    <DropdownItem key={option.value} className="text-orange-50 hover:bg-orange-500 rounded-md">
                        <Link href={option.value}>{option.label}</Link>
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};

export default UserDropdown;