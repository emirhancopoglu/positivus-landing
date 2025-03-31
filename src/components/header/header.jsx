import React, { useState } from "react";
import PositivusBlackLogo from "@/assets/header/black.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navMenus = [
    { label: "About us" },
    { label: "Services" },
    { label: "Use Cases" },
    { label: "Pricing" },
    { label: "Blog" },
  ];

  return (
    <>
      <header className="flex flex-row pt-6 justify-between items-center">
        <div className="w-[15rem] h-auto">
          <img
            src={PositivusBlackLogo}
            alt="Positivus Logo"
            className="w-full object-scale-down cursor-pointer"
          />
        </div>

        <nav className="hidden md:flex flex-row gap-13 items-center">
          {navMenus.map((menu, key) => (
            <span className="text-xl cursor-pointer leading-[28px]" key={key}>
              {menu.label}
            </span>
          ))}
          <button className="text-xl px-[35px] py-[20px] border rounded-[14px] cursor-pointer hover:border-[#B9FF66] hover:bg-[#B9FF66]  transition-all duration-200 ease-in">
            Request a quote
          </button>
        </nav>

        {/* Mobil Menü */}

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <IoMdClose size={40} className="shrink" />
            ) : (
              <RxHamburgerMenu size={40} className="shrink" />
            )}
          </button>
        </div>
        {isOpen && (
          <nav className="fixed top-20 left-0 w-full h-full bg-white flex flex-col items-center justify-center gap-6 z-50">
            {navMenus.map((menu, key) => (
              <span
                key={key}
                className="text-xl cursor-pointer leading-[32px] hover:text-[#B9FF66] transition-all"
              >
                {menu.label}
              </span>
            ))}
            <button className="text-[20px] px-[35px] py-[20px] border rounded-[14px] cursor-pointer hover:border-[#B9FF66] hover:bg-[#B9FF66] transition-all duration-200 ease-in">
              Request a quote
            </button>
          </nav>
        )}
      </header>
    </>
  );
}
