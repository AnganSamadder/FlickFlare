"use client";
import React from "react";
import { usePathname } from "next/navigation";

function NavbarButton(props: {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  showing: string | null;
  onClick1: (event: React.MouseEvent<HTMLElement>) => void;
}) {
  return (
    <div className="inset-0 bg-gradient-to-r from-amber-500 to-red-500 rounded-full">
      <button className="p-[3px] pr-[1.5px] relative" onClick={props.onClick}>
        {props.showing === "currently-running" ? (
          <div className="px-8 py-2 bg-transparent rounded-l-full relative group text-white">
            Currently Running
          </div>
        ) : (
          <div className="px-8 py-2 bg-black rounded-l-full relative group transition duration-300 text-white hover:bg-transparent">
            Currently Running
          </div>
        )}
      </button>
      <button className="p-[3px] pl-[1.5px] relative" onClick={props.onClick1}>
        {props.showing === "coming-soon" ? (
          <div className="px-8 py-2 bg-transparent rounded-r-full relative group text-white">
            Coming Soon
          </div>
        ) : (
          <div className="px-8 py-2 bg-black rounded-r-full relative group transition duration-300 text-white hover:bg-transparent">
            Coming Soon
          </div>
        )}
      </button>
    </div>
  );
}

const Navbar = () => {
  const pathname = usePathname();
  const [showing, setShowing] = React.useState<string | null>(null);

  React.useEffect(() => {
    setShowing(
      pathname === "/" || pathname === "/home" ? "currently-running" : null,
    );
  }, [pathname]);

  const handleShowing = (
    event: React.MouseEvent<HTMLElement>,
    newShowing: string | null,
  ) => {
    setShowing(newShowing);
  };

  return (
    <nav className="bg-zinc-800 fixed w-full top-0 z-50">
      <div className="container mx-auto">
        <div className="flex w-full h-16 items-center justify-around">
          <div className="flex w-1/6">
            <a
              href="home"
              className="text-orange-500 text-2xl font-extrabold hover px-3 py-2"
            >
              MovieBrowser
            </a>
          </div>
          <div className="flex w-5/6 items-center space-x-4">
            <div className="w-3/5 h-[32px] bg-orange-50 rounded-[29px] flex">
              <input
                className="w-full px-4 bg-transparent outline-none"
                placeholder="Search"
              />
            </div>
            <div className="flex w-2/5 justify-center">
              <NavbarButton
                onClick={(event) => handleShowing(event, "currently-running")}
                showing={showing}
                onClick1={(event) => handleShowing(event, "coming-soon")}
              />
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

export default Navbar;
