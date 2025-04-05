import React, { useState } from "react";
import SectionHeader from "../../section-header/section-header";
import ContactBannerImage from "@/assets/sections/contact-section/contactbanner.png";

export default function ContactSection() {
  const [buttonClick, setButtonClick] = useState(false);

  return (
    <>
      <SectionHeader
        heading={"Contact"}
        description={
          "Connect with Us: Let's Discuss Your Digital Marketing Needs"
        }
      />

      <div className="w-full flex flex-col gap-10 py-[60px] pl-[100px] max-lg:py-[40px] max-lg:px-[30px] bg-[#F3F3F3] rounded-[45px]">
        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-col w-1/2 max-lg:w-full gap-6">
            <div className="flex flex-row items-center-safe max-lg:justify-center-safe gap-9">
              <div className="flex flex-row items-center gap-3">
                <input
                  type="radio"
                  required
                  id="hello"
                  name="contactOption"
                  value={"hello"}
                  className="w-7 h-7 appearance-none rounded-full border  border-[#191A23] checked:bg-[#B9FF66] checked:border-[#191A23] transition-all duration-150"
                />
                <p> Say Hi</p>
              </div>
              <div className="flex flex-row items-center gap-3">
                <input
                  type="radio"
                  id="hello"
                  name="contactOption"
                  value={"hello"}
                  className="w-7 h-7 appearance-none rounded-full border  border-[#191A23] checked:bg-[#B9FF66] checked:border-[#191A23] transition-all duration-150"
                />
                <p> Get a Quote</p>
              </div>
            </div>

            <div className="flex flex-col w-full ">
              <span className="text-[16px]">Name</span>
              <input
                type="text"
                className="border rounded-[14px] px-[30px] border-black py-[18px] placeholder:text-[#898989] text-lg mt-1.5 outline-none "
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col w-full ">
              <span className="text-[16px]">Email*</span>
              <input
                type="text"
                required
                className="border rounded-[14px] px-[30px] border-black py-[18px] placeholder:text-[#898989] text-lg mt-1.5 outline-none "
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col w-full ">
              <span className="text-[16px]">Message*</span>
              <textarea
                rows={6}
                required
                cols={1}
                className="border rounded-[14px] px-[30px] border-black py-[18px] placeholder:text-[#898989] text-lg mt-1.5 outline-none "
                placeholder="Message*"
              />
            </div>
            <div className="w-full flex items-center max-lg:hidden">
              <button
                onClick={() => {
                  setButtonClick(true);
                  setTimeout(() => {
                    setButtonClick(false);
                  }, 2000);
                }}
                className={`w-full bg-[#191A23] font-[400] px-[35px] py-[20px] rounded-[14px] text-xl leading-[28px] cursor-pointer hover:bg-[#B9FF66] hover:text-[#191A23]  transition-all duration-200 ease-in ${
                  buttonClick === true
                    ? "bg-[#B9FF66] text-[#191A23] font-[500] transition-all duration-200"
                    : "text-[#F3F3F3] transition-all duration-200"
                } `}
              >
                {buttonClick
                  ? "Message has been sent successfully"
                  : "Book a consultation"}
              </button>
            </div>
          </div>

          <div className="h-auto flex max-lg:hidden">
            <img
              src={ContactBannerImage}
              alt="Contact Banner"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden mt-5">
        <button
          onClick={() => {
            setButtonClick(true);
            setTimeout(() => {
              setButtonClick(false);
            }, 2000);
          }}
          className={`w-full bg-[#191A23] text-[#F3F3F3] font-[400] px-[35px] py-[20px] rounded-[14px] text-lg leading-[28px] cursor-pointer hover:bg-[#B9FF66] hover:text-[#191A23] transition-all duration-200 ease-in ${
            buttonClick === true
              ? "bg-[#B9FF66] text-[#191A23] font-[500] transition-all duration-200"
              : "text-[#F3F3F3] transition-all duration-200"
          } `}
        >
          {buttonClick
            ? "Message has been sent successfully"
            : "Book a consultation"}
        </button>
      </div>
    </>
  );
}
