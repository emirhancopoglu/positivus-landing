import React from "react";
import SectionHeader from "../section-header/section-header";
import SearchEngineImage from "@/assets/services-section/search-engine.png";
import PayPerClickImage from "@/assets/services-section/payperclick.png";
import SocialMediaMarketingImage from "@/assets/services-section/socialmediamarketing.png";
import EmailSendingImage from "@/assets/services-section/emailsending.png";
import ContentCreatorImage from "@/assets/services-section/contentcreator.png";
import AnaltyicsImage from "@/assets/services-section/analytics.png";
import ServicesBannerImage from "@/assets/services-section/servicesbannerimage.png";

import { MdArrowOutward } from "react-icons/md";
import useWindowSize from "@/utils/use-window-size";

export default function ServicesSection() {
  const { width } = useWindowSize();
  const servicesItems = [
    {
      text: "Search engine",
      secondText: "optimization",
      cardColor: "#F3F3F3",
      textBackgroundColor: "#B9FF66",
      buttonColor: "#191A23",
      buttonTextColor: "#B9FF66",
      learnMoreColor: "#191A23",
      src: SearchEngineImage,
      srcAlt: "Search Engine",
    },
    {
      text: "Pay-per-click",
      secondText: "advertising",
      cardColor: "#B9FF66",
      textBackgroundColor: "#f3f3f1",
      buttonColor: "#191A23",
      buttonTextColor: "#B9FF66",
      learnMoreColor: "#191A23",
      src: PayPerClickImage,
      srcAlt: "Search Engine",
    },
    {
      text: "Social Media",
      secondText: "Marketing",
      cardColor: "#191A23",
      textBackgroundColor: "#F3F3F3",
      buttonColor: "#F3F3F3",
      buttonTextColor: "#191A23",
      learnMoreColor: "#F3F3F3",
      src: SocialMediaMarketingImage,
      srcAlt: "Search Engine",
    },
    {
      text: "Email",
      secondText: "Marketing",
      cardColor: "#F3F3F3",
      textBackgroundColor: "#B9FF66",
      buttonColor: "#191A23",
      buttonTextColor: "#B9FF66",
      learnMoreColor: "#191A23",
      src: EmailSendingImage,
      srcAlt: "Search Engine",
    },
    {
      text: "Content",
      secondText: "Creation",
      cardColor: "#B9FF66",
      textBackgroundColor: "#F3F3F3",
      buttonColor: "#191A23",
      buttonTextColor: "#B9FF66",
      learnMoreColor: "#191A23",
      src: ContentCreatorImage,
      srcAlt: "Search Engine",
    },
    {
      text: "Analytics and",
      secondText: "Tracking",
      cardColor: "#191A23",
      textBackgroundColor: "#B9FF66",
      buttonColor: "#F3F3F3",
      buttonTextColor: "#191A23",
      learnMoreColor: "#F3F3F3",
      src: AnaltyicsImage,
      srcAlt: "Search Engine",
    },
  ];

  return (
    <>
      <SectionHeader
        heading={"Services"}
        description={
          "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        }
      />

      <div className="w-full flex flex-row justify-between flex-wrap mt-20 gap-y-[40px]">
        {servicesItems.map((item, key) => (
          <div
            key={key}
            className={`flex flex-row w-[47%] max-md:w-full max-md:gap-0 max-md:flex-col max-md:p-8 max-xl:justify-between max-2xl:justify-between gap-20 border border-b-6 rounded-[45px] p-12`}
            style={{ backgroundColor: item.cardColor }}
          >
            {width >= 767 ? (
              <>
                <div className="flex flex-col gap-23">
                  <div className="flex flex-col">
                    <h3
                      className={`px-2 rounded-lg w-max`}
                      style={{ backgroundColor: item.textBackgroundColor }}
                    >
                      {item.text}
                    </h3>
                    <h3
                      className={`px-2 rounded-lg w-max`}
                      style={{ backgroundColor: item.textBackgroundColor }}
                    >
                      {item.secondText}
                    </h3>
                  </div>

                  <span className="flex flex-row gap-4 items-center text-xl leading-7 cursor-pointer hover:scale-95 transition-all duration-300">
                    <span
                      className={` rounded-full`}
                      style={{ backgroundColor: item.buttonColor }}
                    >
                      <MdArrowOutward
                        size={40}
                        className={`shrink`}
                        style={{ color: item.buttonTextColor }}
                      />{" "}
                    </span>{" "}
                    <span
                      className={` max-md:hidden`}
                      style={{ color: item.learnMoreColor }}
                    >
                      Learn More{" "}
                    </span>
                  </span>
                </div>
                <img
                  src={item.src}
                  alt={item.srcAlt}
                  className="object-contain max-md:w-full max-lg:hidden max-xl:w-[12rem]"
                />
              </>
            ) : (
              <>
                <div className="flex flex-col gap-23">
                  <div className="flex flex-col">
                    <h3
                      className={`px-2 rounded-lg`}
                      style={{ backgroundColor: item.textBackgroundColor }}
                    >
                      {item.text}
                    </h3>
                    <h3
                      className={` px-2 rounded-lg w-[12.5rem]`}
                      style={{ backgroundColor: item.textBackgroundColor }}
                    >
                      {item.secondText}
                    </h3>
                  </div>
                  <div className="flex flex-row-reverse justify-between">
                    <img
                      src={item.src}
                      alt={item.srcAlt}
                      className="object-contain max-md:w-1/2"
                    />
                    <span className="flex flex-row gap-4 items-center text-xl leading-7 cursor-pointer hover:scale-95 transition-all duration-300">
                      <span
                        className={` rounded-full`}
                        style={{ backgroundColor: item.buttonColor }}
                      >
                        <MdArrowOutward
                          size={40}
                          className={`shrink`}
                          style={{ color: item.buttonTextColor }}
                        />{" "}
                      </span>{" "}
                      <span
                        className={` max-md:hidden`}
                        style={{ color: item.learnMoreColor }}
                      >
                        Learn More{" "}
                      </span>
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="relative flex w-full mt-24 px-16 py-11 max-md:py-12 rounded-[45px] justify-between bg-[#F3F3F3] overflow-visible">
        <div className="flex flex-col gap-7 w-[31.25rem] max-md:w-full justify-center z-10">
          <h3>Let’s make things happen</h3>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="w-3/5 bg-[#191A23] text-[#F3F3F3] font-[400] px-[35px] py-[20px] max-md:w-full rounded-[14px] text-xl leading-[28px] cursor-pointer hover:bg-[#B9FF66] hover:text-[#191A23]  transition-all duration-200 ease-in">
            Get your free proposal
          </button>
        </div>
        <div className="absolute -top-10 right-0 transform max-xl:-right-30 -translate-x-1/2 z-0">
          <img
            src={ServicesBannerImage}
            alt="Services Banner Image"
            className="object-contain w-full max-lg:hidden  max-lg:w-2/4"
          />
        </div>
      </div>
    </>
  );
}
