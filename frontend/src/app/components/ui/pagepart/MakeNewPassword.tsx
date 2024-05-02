"use client"

import InputField from "@/app/components/fields/InputField";
import React from "react";

const MakeNewPassword = ({onConfirmPassword} : {onConfirmPassword: () => void}) => {

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleCheckPassword();
        }
    };
    const handleCheckPassword = () => {
        onConfirmPassword();
    }

    return(
    <div className="flex flex-col items-center justify-center w-screen h-[86vh]">
        <div className="w-full max-w-2xl p-8 bg-zinc-700 bg-opacity-50 rounded-2xl text-center">
            <h1 className="text-5xl font-bold text-orange-500 mb-6">
                Make New Password
            </h1>
            <p className="text-2xl font-bold text-white mb-8">
                Enter your new password, then re-enter it to confirm it.
            </p>
            <div className="py-4 flex justify-center items-center align-middle flex flex-col">
                <div className="text-orange-500 text-2xl font-medium font-['Maven Pro']">
                    Password
                </div>
                <InputField
                    placeholder="Enter password..."
                    name="password"
                    type="password"
                    // value={user.password}
                    // onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    classname="w-3/4 h-[5vh]"
                />
                <div className="text-orange-500 text-2xl font-medium font-['Maven Pro']">
                    Confirm Password
                </div>
                <InputField
                    placeholder="Enter password..."
                    name="confirmPassword"
                    type="password"
                    // onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    classname="w-3/4 h-[5vh]"
                />
            </div>
            {/*<VerifyCodeInput id={id} verifyCode={user.verifyCode} />*/}
        </div>
    </div>
    );
};

export default MakeNewPassword;