import React from "react";
import SectionHeader from "../../section-header/section-header";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function TestimonialsSection() {
  const testimonialsItem = [
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      commentor: "John Smith",
      position: "Marketing Director at XYZ Corp",
    },
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      commentor: "John Smith",
      position: "Marketing Director at XYZ Corp",
    },
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      commentor: "John Smith",
      position: "Marketing Director at XYZ Corp",
    },
  ];
  return (
    <>
      <SectionHeader
        heading={"Testimonials"}
        description={
          "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        }
      />
      <div className="w-full rounded-[45px] bg-[#191A23] mb-45 pt-[84px] flex flex-col justify-center items-center overflow-hidden">
        <div className="flex flex-row gap-14">
          {testimonialsItem.map((comment, item) => (
            <>
              <div className="flex flex-col">
                <div
                  key={item}
                  className="border border-[#B9FF66] rounded-[45px] w-[38rem] relative"
                >
                  <p className="text-white px-[52px] py-12">{comment.text}</p>
                  <div className="absolute bottom-[-50px] left-15  mx-auto w-0 h-0 border-l-[50px] border-r-[50px] border-t-[50px] border-t-[#B9FF66] border-l-transparent border-r-transparent" />
                  <div className="absolute bottom-[-50px] left-15 border border-[#191A23] border- mx-auto w-0 h-0 border-l-[50px] border-r-[50px] border-t-[50px] border-t-[#191A23] border-l-transparent border-r-transparent" />
                </div>

                <div className="text-white mt-[68px] pl-26">
                  <h4 className="text-[#B9FF66]">{comment.commentor}</h4>
                  <p>{comment.position}</p>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="text-white mt-[124px] mb-[68px] w-full flex flex-row justify-center gap-30">
          <FaArrowLeft size={35} />
          <FaArrowRight size={35} />
        </div>
      </div>
    </>
  );
}
