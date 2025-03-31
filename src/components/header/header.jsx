import React from "react";
import PositivusBlackLogo from "@/assets/header/black.png";

export default function Header() {
  const navMenus = [
    { label: "About us" },
    { label: "Services" },
    { label: "Use Cases" },
    { label: "Pricing" },
    { label: "Blog" },
  ];

  return (
    <>
      <header className="flex flex-row py-6 justify-between items-center">
        <div className="w-[15rem] h-auto">
          <img
            src={PositivusBlackLogo}
            alt="ss"
            className="w-full object-cover cursor-pointer"
          ></img>
        </div>

        <div className="flex flex-row gap-13 items-center">
          {navMenus.map((menu, key) => (
            <span className="text-[20px] cursor-pointer" key={key}>
              {menu.label}
            </span>
          ))}
          <button className="text-[20px] px-[35px] py-[20px] border rounded-[14px] cursor-pointer hover:border-[#B9FF66] hover:bg-[#B9FF66]  transition-all duration-200 ease-in">
            Request a quote
          </button>
        </div>
      </header>
    </>
  );
}
