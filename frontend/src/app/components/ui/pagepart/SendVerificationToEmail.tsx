"use client"

import InputField from "@/app/components/fields/InputField";
import React, {useState} from "react";

const SendVerificationToEmail = ({onEmailConfirm,  }: {onEmailConfirm: (email: string) => void;  }) => {
    const [email, setEmail] = useState<string>("");


    // const handleEmailConfirm = async (email: string) => {
    //     try {
    //         const response = await fetch(
    //             `http://localhost:8080/user/findUserByEmail?email=${email}`
    //         );
    //         if (response.ok) {
    //             const user = await response.json();
    //             setUser(user);
    //             setWarning("");
    //             incStep();
    //         } else {
    //             setWarning("Email does not exist");
    //         }
    //     } catch (error) {
    //         console.error("Error when verifying email:", error);
    //     }
    // };

    const  handleEmailConfirm = () => {
        onEmailConfirm(email);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
             handleEmailConfirm();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-screen h-[86vh]">
            <div className="w-full max-w-2xl p-8 bg-zinc-700 bg-opacity-50 rounded-2xl text-center">
                <h1 className="text-5xl font-bold text-orange-500 mb-6">
                    Forgot Password
                </h1>
                <div className="flex flex-col items-center">
                    <p className="text-2xl font-bold text-white mb-8">
                        Please enter the email that you have registered your account with:
                    </p>
                    <InputField
                        placeholder="Enter email..."
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={handleKeyPress}
                        classname="w-2/5 h-[5vh]"
                    />
                </div>
            </div>
        </div>
    );
}

export default SendVerificationToEmail;