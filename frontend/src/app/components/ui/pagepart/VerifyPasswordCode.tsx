import VerifyCodeInput from "@/app/components/fields/VerifyCodeInput";
import {User} from "@/app/interfaces/user";
import InputField from "@/app/components/fields/InputField";
import {number} from "prop-types";
import React from "react";

const VerifyPasswordCode = ({onConfirmCode}:{onConfirmCode:
() => void
}) => {

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
         handleCheckCode();
        }
    };
    const handleCheckCode = () => {
        onConfirmCode();
    }

    return (
        <div className="flex flex-col items-center justify-center w-screen h-[86vh]">
            <div className="w-full max-w-2xl p-8 bg-zinc-700 bg-opacity-50 rounded-2xl text-center">
                <h1 className="text-5xl font-bold text-orange-500 mb-6">
                    Verification Pending
                </h1>
                <p className="text-2xl font-bold text-white mb-8">
                    A verification email has been sent to:
                </p>
                <p className="text-2xl font-bold text-white my-5"> [User email]{/*user.email*/}</p>
                <div className="py-4 flex justify-center items-center align-middle flex flex-col">
                    <p className="text-white text-2xl font-bold">
                        Please enter the code in the email:
                    </p>
                    <div className="px-4 w-32 mt-4">
                        <InputField
                            type={"text"}
                            name={"code"}
                            // onChange={handleCheckCode}
                            onKeyDown={handleKeyPress}
                        />
                        {/*<VerifyCodeInput id={id} verifyCode={user.verifyCode} />*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyPasswordCode;