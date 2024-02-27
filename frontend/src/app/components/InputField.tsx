"use client";
import React from "react";

interface InputFieldProps {
    placeholder: string;
    name: string;
}

const InputField = (props: InputFieldProps) => {
    return (
        <div className="w-80 h-[32.87px] left-0 top-[43.57px] absolute bg-orange-50 rounded-md">
        <input
            type="text"
            name={props.name}
            className="w-[282.35px] h-[20.05px] left-[15.50px] top-[6.88px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal"
            placeholder={props.placeholder}    
            />
        </div>
    );
}

export default InputField;
