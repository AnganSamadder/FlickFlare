"use client";
import {useEffect, useRef, useState} from "react";
import {nullUser} from "@/app/globals";

interface Option {
    label: string;
    value: string;
}

const GenreDropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [options, setOptions] = useState<Option[]>([]);

    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            setDropdownOpen(false);
        }
    };

    const getOptions = () => {
        // use a fetch command to collect list of genres
        return [
            {label: "Adventure", value: "adventure"},
            {label: "Action", value: "action"},
            {label: "Drama", value: "drama"},
            {label: "Horror", value: "horror"},
            {label: "Noir", value: "noir"},
            {label: "Romance", value: "romance"},
        ];
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setOptions(
            getOptions(),
        );
    }, []);

    return (
        <div ref={ref}>
            <div onClick={() => setDropdownOpen(!dropdownOpen)}>
                <p className="text-gray-400 font-bold hover:text-white"> Genre </p>
            </div>
            <div className="absolute pt-2 ">
                {dropdownOpen && (
                    <div
                        className="h-full pt-1 flex-col object-right bg-zinc-900 bg-opacity-90 text-right rounded-xl align-middle">
                        {options.map((option: Option) => (
                            <div
                                key={option.label}
                                className="w-[15vw] m-3 p-2 bg-zinc-900 hover:bg-black hover:bg-opacity-70 rounded-xl align-middle"
                            >
                                <p
                                        className="flex text-white text-2xl rounded-md"
                                    >
                                        {option.label}
                                    </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GenreDropdown;
