"use client";
import {Movie} from "@/app/interfaces/movie";
import InputField from "@/app/components/fields/InputField";
import React from "react";

const EditPromosList = (props: {
    promos: Movie[];
    onClick: (promo: Movie) => void;
    selectedPromo: Movie | null;
}) => {
    return (
        <div className="w-full h-full bg-zinc-700 rounded-2xl overflow-y-scroll">
            {props.promos.map((promo, id) => {
                return (
                    <div key={id} className="w-full h-16 p-1 flex flex-col justify-center">
                        <button
                            className={
                                promo === props.selectedPromo
                                    ? "w-full h-full rounded-lg flex bg-zinc-800"
                                    : "w-full h-full rounded-lg flex hover:bg-zinc-800"
                            }
                            onClick={() => props.onClick(promo)}
                        >
                            <div className="grid grid-cols-1 pb-2 px-3">
                                <p className="text-white font-bold">[Promo Code]</p>
                                <div className="flex flex-row gap-x-5">
                                    <p className="text-white">[MM/DD/YYYY]</p>
                                    <p className="text-white"> [00.0]%</p>
                                </div>
                            </div>


                            {/*<div*/}
                            {/*    className="h-full pl-2 overflow-hidden text-white text-left text-ellipsis flex items-center justify-center font-bold float-left"*/}
                            {/*    key={id}*/}
                            {/*>*/}
                            {/*    {promo["title"]}*/}
                            {/*</div>*/}
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

const EditPromo = (props: { movie: Movie | null }) => {
    return (
        <div>
            {props.movie ? (
                <div className="flex h-[65vh]">
                    <div className="w-3/5 h-16 flex flex-col p-5">
                        <div className="flex p-2 pb-1">
                            <label className="w-fit pr-2 text-orange-500 text-2xl font-bold font-['Maven Pro']">
                                Promo Code
                            </label>
                            <InputField classname="w-max"/>
                        </div>
                        <div className="flex p-2 gap-x-2">
                            <label className="px-2 text-orange-500 text-2xl font-bold font-['Maven Pro']">
                                Discount
                            </label>
                            <InputField classname="w-1/6"/>
                            <p className="text-white font-bold">%</p>
                        </div>
                        <div className="w-fit px-2 pt-1 text-orange-500 text-2xl font-bold font-['Maven Pro']">
                            Expiration Date
                        </div>
                        <div className="px-2 py-1 flex justify-evenly">
                            <InputField classname="w-1/6" placeholder={"mon"}/>
                            <div className="text-white text-2xl font-bold font-['Maven Pro']">
                                /
                            </div>
                            <InputField classname="w-1/6" placeholder={"day"}/>
                            <div className="text-white text-2xl font-bold font-['Maven Pro']">
                                /
                            </div>
                            <InputField classname="w-1/6" placeholder={"year"}/>
                        </div>
                        <p className="text-white "></p>
                        <div className="flex flex-row gap-x-10 mt-10 ml-5">
                            <button
                                className="w-20 h-8 bg-orange-200 rounded-full text-black font-['Maven Pro']">
                                Create
                            </button>
                            <button
                                className="w-20 h-8 bg-orange-500 rounded-full text-white font-['Maven Pro']">
                                Update
                            </button>
                            <button
                                className="w-20 h-8 bg-red-600 rounded-full text-white font-['Maven Pro']">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex h-full justify-center">
                    <p className="text-gray-400 p-20 text-2xl">
                        Select a promotion to edit
                    </p>
                </div>
            )}
        </div>
    );
};

const EditPromotions = (props: { promos: Movie[] }) => {
    const [selectedPromo, setSelectedPromo] = React.useState<Movie | null>(null);

    const handleSelect = (movie: Movie) => {
        console.log(movie);
        setSelectedPromo(movie);
    };

    return (
        <div className="h-[75vh] p-4 flex bg-zinc-800 rounded-2xl">
            <div className="w-1/4 h-full pr-2 flex flex-col items-center rounded-2xl">
                <div className="w-full flex flex-row justify-between">
                    <div className="text-white pb-2 text-2xl font-bold">Promotions</div>
                    <button className="mb-3 mx-5 p-2 font-bold text-white bg-amber-600 rounded-full">
                        + Promo
                    </button>
                </div>
                <EditPromosList
                    promos={props.promos}
                    onClick={handleSelect}
                    selectedPromo={selectedPromo}
                />
            </div>
            <div className="w-3/4 h-full pl-2 flex flex-col items-center rounded-2xl">
                <div className="text-white pb-2 text-2xl font-bold">Edit Promotions</div>
                <div className="w-full bg-zinc-700 rounded-2xl">
                    <EditPromo movie={selectedPromo}/>
                </div>
            </div>
        </div>
    );
};

export default EditPromotions;
