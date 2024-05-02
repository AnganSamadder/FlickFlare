"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const VerifyCodeInput = ({
  id,
  verifyCode, isForgotPassword,
}: {
  id: number;
  verifyCode?: string;
  isForgotPassword?: boolean;
}) => {
  const router = useRouter();

  const [code, setCode] = useState<string>("");

  const handleCheckCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);

    console.log(
      e.target.value + " " + verifyCode + " " + (e.target.value === verifyCode),
    );

    if (e.target.value === verifyCode) {
      fetch(`http://localhost:8080/user/` + isForgotPassword ? `forgotPassword` : `verify` + `?id=${id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        if (response.ok) {
          router.push("/register/confirmation");
        }
      });
    }
  };

  return (
    <div className="w-16 bg-orange-50 rounded-md flex">
      <input
        type="text"
        name="code"
        value={code}
        onChange={handleCheckCode}
        className="w-full px-2 bg-transparent outline-none z-20"
      />
    </div>
  );
};

export default VerifyCodeInput;
