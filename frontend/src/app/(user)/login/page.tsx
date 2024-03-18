import Link from "next/link";
import Input from "postcss/lib/input";
import InputField from "@/app/components/InputField";

export default function Login() {
    return (
        <div className="h-[86vh] flex-col justify-center">
            <div
                className="w-screen py-4 text-orange-500 text-5xl font-bold text-center font-['Maven Pro'] leading-normal">
                Login
            </div>
            <div className="h-2/3 p-10 flex justify-center">
                <div
                    className="w-3/5 h-full py-16 flex flex-col justify-evenly items-center bg-zinc-700 bg-opacity-50 rounded-2xl">
                    <div className="text-orange-500 text-2xl font-medium font-['Maven Pro']">
                        Email
                    </div>
                    <InputField
                        placeholder={"Enter email..."}
                        name={"email"}
                        classname={"w-2/5 h-[5vh]"}
                    />
                    <div className="text-orange-500 text-2xl font-medium font-['Maven Pro']">
                        Password
                    </div>
                    <InputField
                        placeholder={"Enter password..."}
                        name={"password"}
                        classname={"w-2/5 h-[5vh]"}
                    />
                    <div className="text-orange-500 text-xl font-medium font-['Maven Pro'] leading-normal">
                        Forgot Password?
                    </div>
                    <div className="pt-4">
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
            <div className="flex justify-center">
        <span className="text-orange-50 text-2xl font-medium font-['Maven Pro'] leading-normal">
          Don’t have a account?
        </span>
                <Link
                    className="pl-4 text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal"
                    href={"/register"}
                >
                    Sign up
                </Link>
            </div>
        </div>
    );
}
