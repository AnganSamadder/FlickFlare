import Link from "next/link";
import InputField from "@/app/components/InputField";

export default function EditProfile() {
  return (
    <div className="h-fit flex-col align-cen mb-40">
      <div className="text-center text-5xl font-bold text-orange-500 mb-2">
        Create Account
      </div>
      <div className="w-fit h-fit mx-10 mb-5 bg-zinc-700 bg-opacity-50 flex flex-row rounded-[17px]">
        <div className="w-fit h-fit py-10 px-6 flex-col items-center bg-transparent">
          <label className="w-fit h-fit text-orange-500 text-2xl font-medium leading-normal">
            Name*
          </label>
          <InputField
            placeholder={"Enter first name..."}
            name={"firstName"}
            classname={"w-[250px] h-[33.08px] mb-2 mt-2"}
          />
          <InputField
            placeholder={"Enter last name..."}
            name={"lastName"}
            classname={"w-[250px] h-[33.08px] mb-10"}
          />
          <label className="w-fit h-fit text-orange-500 text-2xl font-medium leading-normal">
            Phone Number*
          </label>
          <InputField
            placeholder={"Enter numbers only..."}
            name={"phoneNumber"}
            classname={"w-[250px] h-[33.08px] mt-2 mb-10"}
          />
          <label className="w-fit h-fit text-orange-500 text-2xl font-medium leading-normal">
            Email
          </label>
          <InputField
            placeholder={"Enter email..."}
            name={"email"}
            classname={"w-[250px] h-[33.08px] mt-2 mb-10"}
          />
          <label className="w-fit h-fit text-orange-500 text-2xl font-medium leading-normal">
            Password
          </label>
          <InputField
            placeholder={"Enter password..."}
            name={"password"}
            classname={"w-[250px] h-[33.08px] mb-2 mt-2"}
          />
          <InputField
            placeholder={"Confirm password..."}
            name={"confirmPassword"}
            classname={"w-[250px] h-[33.08px]"}
          />
          <div className="mt-16">
            <span className="text-orange-500 text-2xl font-bold leading-normal">
              *
            </span>
            <span className="text-orange-500 text-2xl font-medium leading-normal">
              {" "}
              Required to be filled in
            </span>
          </div>
        </div>
        <div className="w-fit h-fit m-4 p-2 bg-zinc-700 rounded-xl">
          <label className="ml-6 p-4 text-white text-l font-bold leading-normal">
            Optional
          </label>
          <div className="w-fit h-fit ml-6">
            <label className="text-white text-[32px] font-bold leading-normal">
              Payment
            </label>
            <div className="w-fit h-fit mt-2 flex flex-row">
              <label className="w-[165px] text-orange-500 text-2xl font-medium leading-normal">
                Select Card
              </label>
              <InputField
                placeholder={"Card 1:"}
                name={"selectCard"}
                classname={"w-[299px] h-[35.54px] mx-5"}
              />
              <p className="w-fit mt-1 text-white text-[15px] font-medium leading-normal">
                Can have only up to 3 cards at maximum
              </p>
            </div>
            <div className="w-fit h-fit mt-2 flex flex-row">
              <div className="w-[165px] text-orange-500 text-2xl font-medium leading-normal">
                Card Number
              </div>
              <InputField
                placeholder={"Enter card number..."}
                name={"cardNumber"}
                classname={"w-[299px] h-[35.54px] mx-5"}
              />
              <div className="w-fit text-white text-[15px] font-medium leading-normal">
                The 16 digits on front of your card
              </div>
            </div>
            <div className="w-fit h-fit flex flex-row">
              <label className="w-[165px] mt-1 text-orange-500 text-2xl font-medium leading-normal">
                Expiration Date
              </label>
              <div className="w-fit h-fit mx-5 mt-1.5 flex items-center">
                <InputField
                  placeholder={"Month"}
                  name={"month"}
                  classname={"w-[80px] h-9"}
                />
                <p className="w-1 mx-3 text-white text-[15px] font-medium leading-normal">
                  /
                </p>
                <InputField
                  placeholder={"Year"}
                  name={"year"}
                  classname={"w-[80px] h-9"}
                />
              </div>
              <label className="w-fit mt-1 text-orange-500 text-2xl font-medium leading-normal">
                CVV
              </label>
              <InputField
                placeholder={"Enter cvv..."}
                name={"cvv"}
                classname={"w-[200.50px] h-[35.54px] mt-1.5 ml-5"}
              />
            </div>
            <div className="w-fit h-fit mt-5 flex flex-row items-end">
              <button className="w-[174px] h-9 mr-10 bg-red-600 rounded-[20px] flex flex-col items-center ">
                <p className="w-[200.95px] h-[14.40px] text-white text-2xl font-bold leading-normal">
                  Delete Card
                </p>
              </button>
              <button className="w-[174px] h-9 mx-30 bg-orange-200 rounded-[20px] flex flex-col items-center ">
                <p className="w-[200.95px] h-[14.40px] absolute text-zinc-700 text-2xl font-bold leading-normal">
                  Update Card
                </p>
              </button>
              <button className="w-[174px] h-9 ml-96 bg-orange-500 rounded-[20px] flex flex-col items-center ">
                <p className="w-[200.95px] h-[14.40px] text-white text-2xl font-bold leading-normal">
                  Add Card
                </p>
              </button>
            </div>
          </div>
          <div className="w-fit h-fit ml-6 mt-20">
            <label className="w-fit text-white text-[32px] font-bold leading-normal">
              Billing Address
            </label>
            <div className="h-fit mb-2 flex flex-row">
              <label className="w-[100px] mr-5 text-orange-500 text-2xl font-medium leading-normal">
                Address
              </label>
              <InputField
                placeholder={"Enter shipping address..."}
                name={"shipping"}
                classname={"w-[298.23px] h-[35.54px]"}
              />
              <label className="w-[65px] mx-5 text-orange-500 text-2xl font-medium leading-normal">
                Home
              </label>
              <InputField
                placeholder={"Enter street address..."}
                name={"street"}
                classname={"w-[298.23px] h-[35.54px]"}
              />
            </div>
            <div className="w-fit h-fit mb-2 flex flex-row">
              <label className="w-[100px] mr-5 text-orange-500 text-2xl font-medium leading-normal">
                State
              </label>
              <InputField
                placeholder={"Enter state..."}
                name={"state"}
                classname={"w-[298.23px] h-[35.54px]"}
              />
              <label className="w-[65px] mx-5 text-orange-500 text-2xl font-medium leading-normal">
                City
              </label>
              <InputField
                placeholder={"Enter city..."}
                name={"city"}
                classname={"w-[298.23px] h-[35.54px]"}
              />
            </div>
            <div className="w-fit h-fit flex flex-row">
              <label className="w-[100px] mr-5 text-orange-500 text-2xl font-medium leading-normal">
                Zip Code
              </label>
              <InputField
                placeholder={"Enter zip code..."}
                name={"zipCode"}
                classname={"w-[298.23px] h-[35.54px]"}
              />
              <div>
                <input
                  type="checkbox"
                  id="optInPromo"
                  name="receivePromo"
                  value="checkPromo"
                  className="ml-8"
                />
                <label className="text-white text-2xl">
                  {" "}
                  Opt-in for promotions?{" "}
                </label>
              </div>
            </div>
            <div className="w-fit h-fit mt-16 flex flex-col justify-end">
              <button className="w-fit h-fit px-5 py-2 bg-orange-500 rounded-[20px]">
                <Link
                  className="text-white text-2xl text-center font-bold leading-normal"
                  href={"/register/pending"}
                >
                  Confirm
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
