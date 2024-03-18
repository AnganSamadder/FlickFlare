import Link from "next/link";
import Input from "postcss/lib/input";
import InputField from "@/app/components/InputField";

export default function Payment() {
    return (
        <div className="h-[86vh] py-4 flex-col justify-center">
            <div className="w-screen text-orange-500 text-5xl font-bold text-center font-['Maven Pro'] leading-normal">
                Create Account
            </div>
            <div className="h-[70vh] p-3 flex justify-center">
                <div
                    className="w-3/5 px-8 flex flex-col justify-evenly items-center bg-zinc-700 bg-opacity-50 rounded-2xl">
                    <div className="w-full h-full flex justify-evenly items-center">
                        <div className="w-full h-full flex flex-col justify-evenly items-center">
                            <div className="text-orange-500 text-2xl font-medium font-['Maven Pro']">
                                First Name
                            </div>
                            <InputField
                                placeholder={"Enter email..."}
                                name={"email"}
                                classname={"w-3/4 h-[5vh]"}
                            />
                            <div className="text-orange-500 text-2xl font-medium font-['Maven Pro']">
                                Last Name
                            </div>
                            <InputField
                                placeholder={"Enter email..."}
                                name={"email"}
                                classname={"w-3/4 h-[5vh]"}
                            />
                            <div className="text-orange-500 text-2xl font-medium font-['Maven Pro']">
                                Email
                            </div>
                            <InputField
                                placeholder={"Enter email..."}
                                name={"email"}
                                classname={"w-3/4 h-[5vh]"}
                            />
                        </div>
                        <div className="w-full h-full flex flex-col justify-evenly items-center">
                            <div className="text-orange-500 text-2xl font-medium font-['Maven Pro']">
                                Phone Number
                            </div>
                            <InputField
                                placeholder={"Enter email..."}
                                name={"email"}
                                classname={"w-3/4 h-[5vh]"}
                            />
                            <div className="text-orange-500 text-2xl font-medium font-['Maven Pro']">
                                Password
                            </div>
                            <InputField
                                placeholder={"Enter password..."}
                                name={"password"}
                                classname={"w-3/4 h-[5vh]"}
                            />
                            <div className="text-orange-500 text-2xl font-medium font-['Maven Pro']">
                                Confirm Password
                            </div>
                            <InputField
                                placeholder={"Enter password..."}
                                name={"password"}
                                classname={"w-3/4 h-[5vh]"}
                            />
                        </div>
                    </div>
                    <div className="p-8">
                        <button className="w-[10vw] h-[6vh] bg-orange-500 rounded-[20px]">
                            <Link
                                className="text-white text-2xl font-bold font-['Maven Pro'] leading-normal"
                                href={"/"}
                            >
                                Confirm
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
