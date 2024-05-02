"use client";
import React, { useEffect, useState } from "react";
import SendVerificationToEmail from "@/app/components/ui/pagepart/SendVerificationToEmail";
import VerifyPasswordCode from "@/app/components/ui/pagepart/VerifyPasswordCode";
import MakeNewPassword from "@/app/components/ui/pagepart/MakeNewPassword";
import { User } from "@/app/interfaces/user";
import Users from "@/app/(admin)/manage/users/page";
import ConfirmNewPassword from "@/app/components/ui/pagepart/ConfirmNewPassword";
import { useLocalStorage } from "@/app/utils/useLocalStorage";

export default function ForgotPassword() {
  const [step, setStep] = useState(0);
  const [id, setId] = useState<string>("");
  const [verifyCode, setVerifyCode] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [warning, setWarning] = useState("");

  const incStep = () => {
    setStep(step + 1);
  };

  const handleEmailConfirm = (email: string) => {
    fetch(
      `http://localhost:8080/user/findByEmail?email=${email.replace("+", "%2B")}`,
    ).then((response) => {
      response.text().then((userId) => {
        if (response.ok) {
          fetch(`http://localhost:8080/user/forgotPassword?id=${userId}`, {
            method: "POST",
          }).then((response) => {
            if (response.ok) {
              setId(userId);
              response.json().then((data) => setVerifyCode(data));
              incStep();
            } else {
              setWarning("Error sending email");
            }
          });
        } else {
          setWarning(userId);
          console.log(userId);
        }
      });
    });
    // incStep();
  };

  const handleConfirmCode = () => {
    incStep();
  };

  const handleConfirmPassword = () => {
    console.log(
      `http://localhost:8080/user/newPassword?id=${id}&newPassword=${newPassword}`,
    );
    fetch(
      `http://localhost:8080/user/newPassword?id=${id}&newPassword=${newPassword}`,
      {
        method: "PUT",
      },
    ).then((response) => {
      if (response.ok) {
        incStep();
      } else {
        setWarning("Error setting new password");
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-[86vh]">
      {step === 0 ? (
        <SendVerificationToEmail onEmailConfirm={handleEmailConfirm} />
      ) : step === 1 ? (
        <VerifyPasswordCode
          onConfirmCode={handleConfirmCode}
          verifyCode={verifyCode}
        />
      ) : step === 2 ? (
        <MakeNewPassword
          onConfirmPassword={handleConfirmPassword}
          password={newPassword}
          setPassword={setNewPassword}
        />
      ) : (
        <ConfirmNewPassword />
      )}
      {warning.length > 0 ? (
        <p className="text-red-600 font-bold">{warning}</p>
      ) : null}
    </div>
  );
}
