"use client";
import React from "react";
import { className } from "postcss-selector-parser";
import { cn } from "@/app/utils/cn";

interface InputFieldProps {
  placeholder?: string;
  name?: string;
  classname?: string;
}

const InputField = (props: InputFieldProps) => {
  return (
    <div className={cn("bg-orange-50 rounded-md flex", props.classname)}>
      <input
        type="text"
        name={props.name}
        className="w-full px-4 bg-transparent outline-none z-20"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputField;
