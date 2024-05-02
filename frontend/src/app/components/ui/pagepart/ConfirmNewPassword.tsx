import VerifyCodeInput from "@/app/components/fields/VerifyCodeInput";
import {User} from "@/app/interfaces/user";
import React from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";

const VerifyPasswordCode = () => {

    const router = useRouter();

    const handleLoginClick = () => {
        router.push('/login');
    }
    return (
        <div className="flex flex-col items-center justify-center w-screen h-[86vh]">
            <div className="w-full max-w-2xl p-8 bg-zinc-700 bg-opacity-50 rounded-2xl text-center">
                <h1 className="text-5xl font-bold text-orange-500 mb-6">
                    Password Confirmation
                </h1>
                <p className="text-2xl font-bold text-white mb-8">
                    Your password has been changed, you can now login.
                </p>
                    <button
                        className="w-[10vw] h-[6vh] bg-orange-500 rounded-[20px] text-white text-2xl font-bold font-['Maven Pro'] leading-normal"
                        onClick={handleLoginClick}
                    >
                        Login
                    </button>
            </div>
        </div>
    );
};

export default VerifyPasswordCode;