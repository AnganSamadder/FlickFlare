import Link from "next/link";
import InputField from "@/app/components/InputField";

export default function Profile() {
  return (
    <div className="w-[1440px] h-[1024px] relative bg-black rounded-br-[19px]">
      <div className="left-[548px] top-[116px] absolute text-orange-500 text-5xl font-bold font-['Maven Pro'] leading-normal">
        Edit Profile
      </div>
      <div className="w-[1369px] h-[750px] left-[30px] top-[180px] absolute">
        <div className="w-[1369px] h-[680px] left-0 top-0 absolute bg-zinc-700 bg-opacity-50 rounded-[17px]" />
        <div className="w-[154px] h-[60px] left-[1215px] top-[690px] absolute flex-col justify-start items-start inline-flex">
          <button className="w-[154px] h-[60px] bg-orange-500 rounded-[20px]">
            <Link
              className="text-white text-2xl font-bold font-['Maven Pro'] leading-normal"
              href={"/register/pending"}
            >
              Confirm
            </Link>
          </button>
        </div>
        <div className="w-[321px] h-[640px] left-[39px] top-[30px] absolute">
          <div className="w-[321px] h-[120px] left-0 top-[355px] absolute">
            <div className="w-[184.32px] h-[18.34px] left-0 top-0 absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
              Password*
            </div>
            <InputField
              placeholder={"Enter password..."}
              name={"password"}
              classname={"w-[250px] h-[33.08px] left-0 top-[43.08px]"}
            />
            <InputField
              placeholder={"Enter confirm password..."}
              name={"confirmPassword"}
              classname={"w-[250px] h-[33.08px] left-0 top-[86.92px]"}
            />
          </div>
          <div className="w-[321px] h-20 left-0 top-[140px] absolute">
            <div className="w-[277.51px] h-[19.20px] left-0 top-0 absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
              Phone Number*
            </div>
            <InputField
              placeholder={"Enter numbers only..."}
              name={"phoneNumber"}
              classname={"w-[250px] h-[33.08px] left-0 top-[43.08px]"}
            />
          </div>
          <div className="w-[321px] h-20 left-0 top-[240px] absolute">
            <InputField
              placeholder={"Enter email..."}
              name={"email"}
              classname={"w-[250px] h-[33.08px] left-0 top-[43.08px]"}
            />
            <div className="w-[277.51px] h-[19.20px] left-0 top-0 absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
              Email*
            </div>
          </div>
          <div className="w-[321px] h-[120px] left-0 top-0 absolute">
            <label className="w-[118.05px] h-[18.46px] left-0 top-0 absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
              Name*
            </label>
            <InputField
              placeholder={"Enter last name..."}
              name={"lastName"}
              classname={"w-[250px] h-[33.08px] left-0 top-[86.92px]"}
            />
            <InputField
              placeholder={"Enter first name..."}
              name={"firstName"}
              classname={"w-[250px] h-[33.08px] left-0 top-[43.08px]"}
            />
          </div>
          <div className="left-0 top-[616px] absolute">
            <span className="text-orange-500 text-2xl font-bold font-['Maven Pro'] leading-normal">
              *
            </span>
            <span className="text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
              {" "}
              Required to be filled in
            </span>
          </div>
        </div>
        <div className="w-[1000px] h-[650px] left-[350px] top-[12px] absolute bg-zinc-700 rounded-xl">
          <div className="left-6 p-4 absolute text-white text-l font-bold font-['Maven Pro'] leading-normal">
            Optional
          </div>
          <div className="w-[779px] h-[241px] left-[23px] top-[50px] absolute">
            <div className="w-[375px] h-9 left-[4px] top-[129px] absolute">
              <div className="w-[194px] h-9 left-[181px] top-0 absolute">
                <InputField
                  placeholder={"Year"}
                  name={"year"}
                  classname={"w-[80px] h-9 left-[105px] top-0"}
                />
                <InputField
                  placeholder={"Month"}
                  name={"month"}
                  classname={"w-[80px] h-9 left-0 top-0"}
                />
              </div>
              <div className="left-[270px] top-[6px] absolute text-white text-[15px] font-medium font-['Maven Pro'] leading-normal">
                /
              </div>
              <div className="left-0 top-[6px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                Expiration Date
              </div>
            </div>
            <div className="w-[756px] h-[35.54px] left-[4px] top-[80px] absolute">
              <InputField
                placeholder={"Enter card number..."}
                name={"cardNumber"}
                classname={"w-[299px] h-[35.54px] left-[181px] top-0"}
              />
              <div className="left-0 top-[6px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                Card Number
              </div>
              <div className="left-[501px] top-[6px] absolute text-white text-[15px] font-medium font-['Maven Pro'] leading-normal">
                The 16 digits on front of your card
              </div>
            </div>
            <div className="w-[267px] h-[35.54px] left-[401px] top-[134px] absolute">
              <div className="w-[46.35px] left-0 top-[-5px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                CVV
              </div>
              <InputField
                placeholder={"Enter CVV"}
                name={"cvv"}
                classname={"w-[200.50px] h-[35.54px] left-[66.50px] top-[-5px]"}
              />
            </div>
            <div className="w-[174px] h-9 left-0 top-[205px] absolute">
              <button className="w-[174px] h-9 left-0 top-0 absolute bg-orange-500 rounded-[20px] flex flex-col items-center ">
                <p className="w-[200.95px] h-[14.40px] absolute text-white text-2xl font-bold font-['Maven Pro'] leading-normal">
                  Add Card
                </p>
              </button>
            </div>
            <div className="left-[4px] top-0 absolute text-white text-[32px] font-bold font-['Maven Pro'] leading-normal">
              Payment
            </div>
          </div>
          <div className="w-[411px] h-[73.54px] left-[29px] top-[391px] absolute">
            <div className="left-0 top-[-25px] absolute text-white text-[32px] font-bold font-['Maven Pro'] leading-normal">
              Billing Address
            </div>
            <div className="w-[400px] h-[35.54px] left-[3px] top-[38px] absolute">
              <InputField
                placeholder={"Enter shipping address..."}
                name={"shipping"}
                classname={"w-[298.23px] h-[35.54px] left-[110.77px] top-[8px]"}
              />
              <div className="left-0 top-[6px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                Address
              </div>
            </div>
            <div className="w-[386px] h-[35.54px] left-[427px] top-[38px] absolute">
              <InputField
                placeholder={"Enter street..."}
                name={"street"}
                classname={"w-[298.23px] h-[35.54px] left-[87.77px] top-[8px]"}
              />
              <div className="w-[66.83px] left-0 top-[6px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                Home
              </div>
            </div>
            <div className="w-[386px] h-[35.54px] left-[427px] top-[88px] absolute">
              <InputField
                placeholder={"Enter city..."}
                name={"city"}
                classname={"w-[298.23px] h-[35.54px] left-[87.77px] top-[8px]"}
              />
              <div className="left-0 top-[6px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                City
              </div>
            </div>
            <div className="w-[390px] h-[35.54px] left-[18px] top-[88px] absolute">
              <InputField
                placeholder={"Enter state..."}
                name={"state"}
                classname={"w-[298.23px] h-[35.54px] left-[95px] top-[8px]"}
              />
              <div className="left-0 top-[6px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                State
              </div>
            </div>
            <div className="w-[408px] h-[35.54px] left-0 top-[134px] absolute">
              <InputField
                placeholder={"Enter zip code..."}
                name={"zipCode"}
                classname={"w-[299px] h-[35.54px] left-[113px] top-[10px]"}
              />
              <div className="left-0 top-[6px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                Zip Code
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
