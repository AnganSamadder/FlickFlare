"use client";
import React from "react";
import { cn } from "@/app/utils/cn";

const InputField = ({
  name,
  placeholder,
  value,
  onChange = () => {},
  classname,
}: {
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  classname?: string;
}) => {
  return (
    <div className={cn("bg-orange-50 rounded-md flex", classname)}>
      <input
        type="text"
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        className="w-full px-4 bg-transparent outline-none z-20"
      />
    </div>
  );
};

export default InputField;
