"use client"
import React, {useEffect, useState} from "react";
import SendVerificationToEmail from "@/app/components/ui/pagepart/SendVerificationToEmail";
import VerifyPasswordCode from "@/app/components/ui/pagepart/VerifyPasswordCode";
import MakeNewPassword from "@/app/components/ui/pagepart/MakeNewPassword";
import {User} from "@/app/interfaces/user";
import Users from "@/app/(admin)/manage/users/page";
import ConfirmNewPassword from "@/app/components/ui/pagepart/ConfirmNewPassword";

export default function ForgotPassword() {
    const [step, setStep] = useState(0);
    const [user, setUser] = useState<string>("");
    const [warning, setWarning] = useState("");

    const incStep = () => {
        setStep(step + 1);
    }

    const handleEmailConfirm = (email: string) => {
        // fetch(
        //     `http://localhost:8080/user/findByEmail?email=${email}`).then((response) => {
        //     response.text().then((data) => {
        //         if (response.ok) {
        //             // console.log(data);
        //             fetch(`http://localhost:8080/user/get?id=${data}`).then(
        //                 (response) => {
        //                     response.json().then((data) => setUser(JSON.stringify(data)));
        //                 },
        //             );
        //         } else {
        //             setWarning(data);
        //             console.log(data);
        //         }
        //     });
        // });
        incStep();
    };

    const handleConfirmCode = () => {
        incStep();
    }

    const handleConfirmPassword = () => {
        incStep();
    }

    //     fetch(
    //             `http://localhost:8080/user/findUserByEmail?email=${email}`
    //         ).then(
    //             (response) => {
    //                 response.json().then((data) => setUser(JSON.stringify(data)));
    //                 setWarning("");
    //                 incStep();
    //             },
    //         );
    //     } else
    // {
    //     setWarning("Email does not exist");
    // }
    // };

    return (
        <div className="flex flex-col items-center justify-center w-screen h-[86vh]">
            {step === 0 ? (
                <SendVerificationToEmail onEmailConfirm={handleEmailConfirm}/>
            ) : step === 1 ? (
                <VerifyPasswordCode onConfirmCode={handleConfirmCode}/>
            ) : step === 2 ? (
                <MakeNewPassword onConfirmPassword={handleConfirmPassword}/>
            ): (
                <ConfirmNewPassword/>
            )}
            {warning.length > 0? (<p className="text-red-600 font-bold">{warning}</p>): null}
        </div>
    );
}
