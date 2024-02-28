import Link from "next/link";
import Input from "postcss/lib/input";
import InputField from "@/app/components/InputField";

export default function Login({}) {
  return (
    <div className="w-[1440px] h-[1024px] relative bg-black rounded-br-[19px]">
      <div className="left-[658px] top-[120px] absolute text-orange-500 text-5xl font-bold font-['Maven Pro'] leading-normal">
        Login
      </div>
      <div className="  left-[337px] top-[180px] p-10 absolute">
        <div className="w-[767px] h-[560px] left-0 top-0 absolute bg-zinc-700 bg-opacity-50 rounded-[17px]" />
        <div className="w-[321px] h-[223px] left-[228px] top-[116px] absolute">
          <div className="w-80 h-[76.43px] left-0 top-[115px] absolute">
            <div className="w-[184.32px] h-[18.34px] left-0 top-0 absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
              Password
            </div>
            <InputField
              placeholder={"Enter password..."}
              name={"password"}
              classname={"w-[321px] h-[34.40px] left-0 top-[45.60px]"}
            />
          </div>
          <div className="w-[321px] h-20 left-0 top-0 absolute">
            <div className="w-[277.51px] h-[19.20px] left-0 top-0 absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
              Email
            </div>
            <InputField
              placeholder={"Enter email..."}
              name={"email"}
              classname={"w-[321px] h-[34.40px] left-0 top-[45.60px]"}
            />
          </div>
          <div className="left-[2px] top-[199px] absolute">
            <span className="text-white text-2xl font-medium font-['Maven Pro'] leading-normal">
              Forgot{" "}
            </span>
            <span className="text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
              Password?
            </span>
          </div>
        </div>
        <div className="w-[154px] h-[60px] left-[593px] top-[480px] absolute flex-col justify-start items-start inline-flex">
          <button className="w-[154px] h-[60px] bg-orange-500 rounded-[20px]">
            <Link
              className="text-white text-2xl font-bold font-['Maven Pro'] leading-normal"
              href={"/"}
            >
              Confirm
            </Link>
          </button>
        </div>
      </div>
      <div className="w-[340px] left-[567px] top-[780px] absolute">
        <span className="text-orange-50 text-2xl font-medium font-['Maven Pro'] leading-normal">
          Don’t have a account?{" "}
        </span>
        <Link
          className="text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal"
          href={"/register"}
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
