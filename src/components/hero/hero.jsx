import React from "react";
import useWindowSize from "@/utils/use-window-size";
import Marquee from "react-fast-marquee";

import HeroBanner from "@/assets/hero/herobanner.png";
import AmazonLogo from "@/assets/hero/amazon.png";
import DribbleLogo from "@/assets/hero/dribble.png";
import HubspotLogo from "@/assets/hero/hubspot.png";
import NetflixLogo from "@/assets/hero/netflix.png";
import NotionLogo from "@/assets/hero/notion.png";
import ZoomLogo from "@/assets/hero/zoom.png";

export default function Hero() {
  const { width } = useWindowSize();

  const companies = [
    {
      label: "amazon",
      src: AmazonLogo,
    },
    {
      label: "dribble",
      src: DribbleLogo,
    },
    {
      label: "hubspot",
      src: HubspotLogo,
    },
    {
      label: "netflix",
      src: NetflixLogo,
    },
    {
      label: "notion",
      src: NotionLogo,
    },
    {
      label: "zoom",
      src: ZoomLogo,
    },
  ];

  return (
    <>
      <div className="flex flex-row justify-between mt-18 w-full">
        {width >= 768 ? (
          <>
            <div className="flex flex-col w-[531px] max-lg:w-1/2 gap-8">
              <h1>Navigating the digital landscape for success</h1>
              <span className="text-xl leading-[28px] w-[498px] max-lg:w-full ">
                Our digital marketing agency helps businesses grow and succeed
                online through a range of services including SEO, PPC, social
                media marketing, and content creation.
              </span>
              <button className="w-1/2 bg-[#191A23] text-[#F3F3F3] font-[400] px-[35px] py-[20px] rounded-[14px] text-xl leading-[28px] cursor-pointer hover:bg-[#B9FF66] hover:text-[#191A23]  transition-all duration-200 ease-in">
                Book a consultation
              </button>
            </div>
            <div className="w-[37rem] max-lg:w-1/2 h-auto">
              <img
                src={HeroBanner}
                alt="Hero Banner"
                className="w-full h-auto object-cover"
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col w-full gap-8">
              <h1>Navigating the digital landscape for success</h1>
              <div className="w-full h-auto">
                <img
                  src={HeroBanner}
                  alt="Hero Banner"
                  className="w-full h-auto object-cover"
                />
              </div>
              <span className="text-xl leading-[28px] w-full ">
                Our digital marketing agency helps businesses grow and succeed
                online through a range of services including SEO, PPC, social
                media marketing, and content creation.
              </span>
              <button className="w-full bg-[#191A23] text-[#F3F3F3] font-[400] px-[35px] py-[20px] rounded-[14px] text-xl leading-[28px] cursor-pointer hover:bg-[#B9FF66] hover:text-[#191A23]  transition-all duration-200 ease-in">
                Book a consultation
              </button>
            </div>
          </>
        )}
      </div>
      <Marquee
        autoFill
        gradient
        gradientWidth={90}
        className="overflow-hidden w-full"
      >
        <div className="w-full flex flex-row justify-between max-md:flex-wrap items-center mt-18">
          {companies.map((company, key) => (
            <div
              key={key}
              className="flex items-center justify-center w-full max-md:w-[15rem] h-auto"
            >
              <img
                src={company.src}
                alt={company.label}
                className="w-full h-auto hover:scale-105 object-contain transition-all duration-300 cursor-pointer pl-12 pr-12 grayscale-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </>
  );
}
