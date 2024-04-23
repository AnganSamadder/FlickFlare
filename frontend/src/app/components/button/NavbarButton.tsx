import React from "react";

const NavbarButton = ({
  onClick,
  showing,
  onClick1,
}: {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  showing: string | null;
  onClick1: (event: React.MouseEvent<HTMLElement>) => void;
}) => {
  return (
    <div className="inset-0 bg-gradient-to-r from-amber-500 to-red-500 rounded-full">
      <button className="p-[3px] pr-[1.5px] relative" onClick={onClick}>
        {showing === "currently-running" ? (
          <div className="px-8 py-2 bg-transparent rounded-l-full relative group text-white">
            Currently Running
          </div>
        ) : (
          <div className="px-8 py-2 bg-black rounded-l-full relative group transition duration-300 text-white hover:bg-transparent">
            Currently Running
          </div>
        )}
      </button>
      <button className="p-[3px] pl-[1.5px] relative" onClick={onClick1}>
        {showing === "coming-soon" ? (
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
};

export default NavbarButton;
