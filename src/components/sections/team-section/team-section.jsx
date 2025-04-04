import React from "react";
import SectionHeader from "../../section-header/section-header";
import JohnSmithImage from "@/assets/sections/team-section/johnsmith.png";
import JaneDoeImage from "@/assets/sections/team-section/janedoe.png";
import MichaelBrownImage from "@/assets/sections/team-section/mcihealbrown.png";
import EmilyJohnsonImage from "@/assets/sections/team-section/emilyjhonson.png";
import BrianWilliamsImage from "@/assets/sections/team-section/brianwilliams.png";
import SarahKimImage from "@/assets/sections/team-section/sarahkim.png";

import { FaLinkedinIn } from "react-icons/fa";

export default function TeamSection() {
  const teamMembers = [
    {
      fullName: "John Smith",
      position: "CEO and Founder",
      src: JohnSmithImage,
      description:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      fullName: "Jane Doe",
      position: "Director of Operations",
      src: JaneDoeImage,
      description:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    },
    {
      fullName: "Michael Brown",
      position: "Senior SEO Specialist",
      src: MichaelBrownImage,
      description:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    },
    {
      fullName: "Emily Johnson",
      position: "PPC Manager",
      src: EmilyJohnsonImage,
      description:
        "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    },
    {
      fullName: "Brian Williams",
      position: "Social Media Specialist",
      src: BrianWilliamsImage,
      description:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    },
    {
      fullName: "Sarah Kim",
      position: "Content Creator",
      src: SarahKimImage,
      description:
        "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    },
  ];

  return (
    <>
      <SectionHeader
        heading={"Team"}
        description={
          "Meet the skilled and experienced team behind our successful digital marketing strategies"
        }
      />
      <div className="flex flex-row flex-wrap w-full justify-between gap-10">
        {teamMembers.map((member, index) => (
          <>
            <div
              key={index}
              className="border border-b-6 rounded-[45px] w-[26.5rem] max-md:w-[25rem] gap-7 py-[40px] px-[35px]"
            >
              <div className="flex flex-row justify-between">
                <img src={member.src} alt={member.fullName} />
                <div className="flex flex-col justify-end items-center-safe">
                  <h4>{member.fullName}</h4>
                  <p>{member.position}</p>
                </div>
                <span className="bg-[#191A23] w-11 h-11 flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 rounded-full">
                  <FaLinkedinIn size={25} className="text-[#B9FF66] shrink " />{" "}
                </span>
              </div>

              <div className="border w-full bg-[#191A23] mt-7 mb-7" />
              <p>{member.description}</p>
            </div>
          </>
        ))}
        <div className="w-full flex justify-end-safe">
          <button className="px-[35px] py-[20px] bg-[#191A23] rounded-[14px] text-[#F3F3F3] text-xl w-1/6 max-md:w-2/3 max-lg:w-1/2 max-xl:w-1/3 cursor-pointer hover:bg-[#B9FF66] hover:text-[#191A23]  transition-all duration-300 ">
            See all team
          </button>
        </div>
      </div>
    </>
  );
}
