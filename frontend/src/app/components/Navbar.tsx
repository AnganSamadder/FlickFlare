"use client";
import React from "react";

interface NavbarButtonProps {
  href: string;
  text: string;
}

const Navbar = () => {
  return (
    <nav className="bg-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex w-full items-center justify-around h-16">
          <div className="flex w-1/6">
            <a
              href="#"
              className="text-orange-500 text-2xl font-extrabold hover px-3 py-2"
            >
              MovieBrowser
            </a>
          </div>
          <div className="flex w-5/6 items-center space-x-4">
            <div className="w-2/3 h-[31.68px] bg-orange-50 rounded-[29px] flex">
              <input
                className="w-full px-4 bg-transparent outline-none"
                placeholder="Search"
              />
            </div>
            <div className="w-1/3 flex">
              <NavbarButton href={"#"} text={"Currently Running"} />
              <NavbarButton href={"#"} text={"Coming Soon"} />
            </div>
            <div>
              <img
                className="w-[54px] h-[49px] rounded-full"
                src="https://toolset.com/wp-content/uploads/2018/06/909657-profile_pic.png"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavbarButton = (props: NavbarButtonProps) => (
  <a
    href={props.href}
    className="text-white hover:bg-stone-900 px-3 py-2 rounded-md text-sm font-medium"
  >
    {props.text}
  </a>
);

export default Navbar;
