import "@carbon/web-components/es/components/dropdown/index.js";
import InputField from "@/app/components/fields/InputField";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function Showtimes() {
  return (
    <div className="w-[1440px] h-[1024px] relative bg-black">
      <div className="w-[1354px] h-[564px] left-[47px] top-[137px] absolute">
        <div className="w-[200px] h-[480px] left-0 top-[84px] absolute">
          <div className="w-[200px] left-0 top-0 absolute">
            <span className="text-orange-500 text-[32px] font-bold font-['Maven Pro'] leading-normal">
              Movie:{" "}
            </span>
            <br />
            <span className="text-white text-2xl font-medium font-['Maven Pro'] leading-normal">
              Iron Man
            </span>
          </div>
          <div className="w-[200px] left-0 top-[102px] absolute">
            <span className="text-orange-500 text-[32px] font-bold font-['Maven Pro'] leading-normal">
              Showtime:{" "}
            </span>
            <br />
            <span className="text-white text-2xl font-medium font-['Maven Pro'] leading-normal">
              10/10    1:00 PM
            </span>
          </div>
          <div className="w-[200px] left-0 top-[204px] absolute">
            <span className="text-orange-500 text-[32px] font-bold font-['Maven Pro'] leading-normal">
              Seats:{" "}
            </span>
            <br />
            <span className="text-white text-2xl font-medium font-['Maven Pro'] leading-normal">
              Total: 4<br />
              (A3, C4, C5, C6)
            </span>
          </div>
          <div className="w-[200px] left-0 top-[345px] absolute">
            <span className="text-orange-500 text-[32px] font-bold font-['Maven Pro'] leading-normal">
              Total: <br />
            </span>
            <span className="text-white text-2xl font-medium font-['Maven Pro'] leading-normal">
              $32.00
            </span>
          </div>
        </div>
        <div className="w-[1147px] h-[556px] left-[207px] top-[4px] absolute">
          <div className="w-[1147px] h-[516px] left-0 top-[40px] absolute bg-zinc-700 bg-opacity-50 rounded-[17px]" />
          <div className="w-[932px] h-[467px] left-[108px] top-[59px] absolute">
            <div className="w-[910px] h-[448px] left-[2px] top-[19px] absolute">
              <div className="w-[174px] h-12 left-0 top-[412px] absolute">
                <div className="left-[-10px] top-[4px] z-10 absolute">
                  <button className="px-14 py-3 rounded-[20px] bg-red-600 text-white font-bold transition duration-200 hover:text-black border-2 border-transparent">
                    Cancel
                  </button>
                </div>
              </div>
              <div className="w-[174px] h-12 z-10 left-[736px] top-[412px] absolute">
                <button className="px-14 py-3 rounded-[20px] bg-orange-500 text-white font-bold transition duration-200 hover:text-black border-2 border-transparent">
                  Confirm
                </button>
              </div>
              <div className="w-[775px] h-9 left-[22px] top-[101px] absolute">
                <br />
                <div className="left-700 top-[6px] absolute text-white text-2xl font-medium font-['Maven Pro'] leading-normal">
                  Add New Card
                </div>
              </div>
              <div className="w-[375px] h-9 left-[22px] top-[195px] absolute">
                <div className="w-[194px] h-9 left-[181px] top-0 absolute">
                  <div className="w-[89px] h-9 left-[105px] top-0 absolute">
                    <div className="w-[76px] h-[18px] left-[-3px] top-[8px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                      <div>
                        <InputField
                          placeholder={"YY"}
                          name={"Exp. Year"}
                          classname={
                            "w-[65px] h-[24.40px] z-10 left-[-15px] top-[2px]"
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-[89px] h-9 left-0 top-0 absolute">
                    <div className="w-[76px] h-[18px] left-[13px] top-[8px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                      <InputField
                        placeholder={"MM"}
                        name={"Exp. Month"}
                        classname={
                          "w-[65px] h-[24.40px] z-10 left-[-15px] top-[2px]"
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="left-[250px] top-[-4.5px] absolute text-white text-[30px] font-medium font-['Maven Pro'] leading-normal">
                  /
                </div>
                <div className="left-0 top-[6px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                  Expiration Date
                </div>
              </div>
              <div className="w-[756px] h-[35.54px] left-[22px] top-[148px] absolute">
                <div className="w-[299px] h-[35.54px] left-[181px] top-0 absolute">
                  <div className="w-[283.24px] h-[17.40px] left-[13px] top-[5px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                    <div className="w-[76px] h-[18px] left-[13px] top-[px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                      <InputField
                        placeholder={"Enter Card Number"}
                        name={"Card Number"}
                        classname={
                          "w-[255px] h-[28px] z-10 left-[-50px] top-[6px]"
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="left-0 top-[6px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                  Card Number
                </div>
                <div className="left-[416px] top-[20px] absolute text-white text-[13px] font-medium font-['Maven Pro'] leading-normal">
                  The 16 digit number on card
                </div>
              </div>
              <div className="w-[267px] h-[35.54px] left-[419px] top-[200px] absolute">
                <div className="w-[200.50px] h-[35.54px] left-[66.50px] top-0 absolute">
                  <div className="w-[189.93px] h-[17.40px] left-[8.72px] top-[5px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                    <div className="w-[76px] h-[18px] left-[13px] top-[8px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                      <InputField
                        placeholder={"XXX"}
                        name={"CVV"}
                        classname={
                          "w-[65px] h-[24.40px] z-10 left-[-30px] top-[-8px]"
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[46.35px] left-0 top-[2px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                  CVV
                </div>
              </div>
              <div className="w-[427px] h-9 left-[22px] top-[51px] absolute">
                <div className="left-0 top-[6px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                  Select Card
                </div>
                <div className="w-[246px] h-9 left-[181px] top-0 absolute">
                  <div className="w-[233px] h-[18px] left-[13px] top-[7px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                    <div className="w-[233px] h-[18px] left-[13px] top-[7px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                      <InputField
                        placeholder={"Choose Card"}
                        name={"Choose Card"}
                        classname={
                          "w-[175px] h-[28px] z-10 left-[-50px] top-[6px]"
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="left-[22px] top-0 absolute text-white text-[32px] font-bold font-['Maven Pro'] leading-normal">
                Payment
              </div>
            </div>
            <div className="w-[411px] h-[73.54px] left-[22px] top-[281px] absolute">
              <div className="left-0 top-0 absolute text-white text-[32px] font-bold font-['Maven Pro'] leading-normal">
                Billing Address
              </div>
              <div className="w-[398px] h-[35.54px] left-[13px] top-[38px] absolute">
                <div className="w-[299px] h-[35.54px] left-[99px] top-0 absolute">
                  <div className="w-[36px] h-[18px] left-[46px] top-[3px] absolute text-zinc-700 text-opacity-75 text-[15px] font-medium font-['Maven Pro'] leading-normal">
                    <InputField
                      placeholder={"Street Address 1"}
                      name={"Address1"}
                      classname={
                        "w-[175px] h-[28px] z-10 left-[-50px] top-[6px]"
                      }
                    />
                    <InputField
                      placeholder={"Street Address 2"}
                      name={"Address2"}
                      classname={
                        "w-[175px] h-[28px] z-10 left-[130px] top-[6px]"
                      }
                    />
                    <InputField
                      placeholder={"City"}
                      name={"City"}
                      classname={
                        "w-[175px] h-[28px] z-10 left-[-50px] top-[40px]"
                      }
                    />
                    <InputField
                      placeholder={"Zipcode"}
                      name={"Zipcode"}
                      classname={
                        "w-[175px] h-[28px] z-10 left-[130px] top-[40px]"
                      }
                    />
                    <InputField
                      placeholder={"State"}
                      name={"State"}
                      classname={
                        "w-[175px] h-[28px] z-10 left-[-50px] top-[72px]"
                      }
                    />
                  </div>
                </div>
                <div className="left-0 top-[6px] absolute text-orange-500 text-2xl font-medium font-['Maven Pro'] leading-normal">
                  Address
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1147px] h-[556px] left-[207px] top-[4px] absolute">
          <div className="left-[460px] top-[-30px] absolute text-orange-500 text-5xl font-bold font-['Maven Pro'] leading-normal">
            Checkout
          </div>
        </div>
        <div className="w-[135px] h-11 left-[32px] top-0 absolute">
          <div className="w-[135px] h-11 z-10 left-[-17px] top-[-65px] absolute">
            <button className="px-8 py-2 rounded-bl-3xl rounded-tr-3xl bg-orange-500 text-white font-bold font-['Maven Pro'] leading-normal transition duration-200 hover:bg-orange-500 hover:text-black border-2 border-transparent ">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
