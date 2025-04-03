import React from "react";

export default function SectionHeader({ heading, description }) {
  return (
    <>
      <div className="flex flex-row items-start gap-8 max-md:flex-col max-md:justify-center max-md:items-center">
        <h2 className="bg-[#B9FF66] px-2 w-max rounded-lg">{heading}</h2>
        <p className="w-[36rem] max-md:w-full max-md:text-center">
          {description}
        </p>
      </div>
    </>
  );
}
