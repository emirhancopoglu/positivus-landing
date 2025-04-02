import React from "react";
import SectionHeader from "../section-header/section-header";
import SearchEngineImage from "@/assets/services-section/search-engine.png";
import PayPerClickImage from "@/assets/services-section/payperclick.png";
import SocialMediaMarketingImage from "@/assets/services-section/socialmediamarketing.png";
import EmailSendingImage from "@/assets/services-section/emailsending.png";
import ContentCreatorImage from "@/assets/services-section/contentcreator.png";
import AnaltyicsImage from "@/assets/services-section/analytics.png";

import { MdArrowOutward } from "react-icons/md";
import useWindowSize from "@/utils/use-window-size";

export default function ServicesSection() {
  const { width } = useWindowSize();
  const servicesItems = [
    {
      text: "Search engine",
      secondText: "optimization",
      cardColor: "F3F3F3",
      textBackgroundColor: "B9FF66",
      buttonColor: "191A23",
      buttonTextColor: "B9FF66",
      learnMoreColor: "191A23",
      src: SearchEngineImage,
      srcAlt: "Search Engine",
    },
    {
      text: "Pay-per-click",
      secondText: "advertising",
      cardColor: "B9FF66",
      textBackgroundColor: "F3F3F3",
      buttonColor: "191A23",
      buttonTextColor: "B9FF66",
      learnMoreColor: "191A23",
      src: PayPerClickImage,
      srcAlt: "Search Engine",
    },
    {
      text: "Social Media",
      secondText: "Marketing",
      cardColor: "191A23",
      textBackgroundColor: "F3F3F3",
      buttonColor: "F3F3F3",
      buttonTextColor: "191A23",
      learnMoreColor: "F3F3F3",
      src: SocialMediaMarketingImage,
      srcAlt: "Search Engine",
    },
    {
      text: "Email",
      secondText: "Marketing",
      cardColor: "F3F3F3",
      textBackgroundColor: "B9FF66",
      buttonColor: "191A23",
      buttonTextColor: "B9FF66",
      learnMoreColor: "191A23",
      src: EmailSendingImage,
      srcAlt: "Search Engine",
    },
    {
      text: "Content",
      secondText: "Creation",
      cardColor: "B9FF66",
      textBackgroundColor: "F3F3F3",
      buttonColor: "191A23",
      buttonTextColor: "B9FF66",
      learnMoreColor: "191A23",
      src: ContentCreatorImage,
      srcAlt: "Search Engine",
    },
    {
      text: "Analytics and",
      secondText: "Tracking",
      cardColor: "191A23",
      textBackgroundColor: "B9FF66",
      buttonColor: "F3F3F3",
      buttonTextColor: "191A23",
      learnMoreColor: "F3F3F3",
      src: AnaltyicsImage,
      srcAlt: "Search Engine",
    },
  ];

  return (
    <>
      <div className="mt-34 mb-24">
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
              className={`flex flex-row w-[47%] max-md:w-full max-md:gap-0 max-md:flex-col max-md:p-8 max-xl:gap-0 gap-20 border border-b-6 rounded-[45px] p-12 bg-[#${item.cardColor}]`}
            >
              {width >= 767 ? (
                <>
                  <div className="flex flex-col gap-23">
                    <div className="flex flex-col">
                      <h3
                        className={`bg-[#${item.textBackgroundColor}] px-2 rounded-lg`}
                      >
                        {item.text}
                      </h3>
                      <h3
                        className={`bg-[#${item.textBackgroundColor}] px-2 rounded-lg w-[12.5rem]`}
                      >
                        {item.secondText}
                      </h3>
                    </div>

                    <span className="flex flex-row gap-4 items-center text-xl leading-7 cursor-pointer hover:scale-95 transition-all duration-300">
                      <span
                        className={`bg-[#${item.buttonColor}] rounded-full`}
                      >
                        <MdArrowOutward
                          size={40}
                          className={`shrink text-[#${item.buttonTextColor}]`}
                        />{" "}
                      </span>{" "}
                      <span
                        className={`text-[#${item.learnMoreColor}] max-md:hidden`}
                      >
                        Learn More{" "}
                      </span>
                    </span>
                  </div>
                  <img
                    src={item.src}
                    alt={item.srcAlt}
                    className="object-contain max-md:w-full max-lg:hidden"
                  />
                </>
              ) : (
                <>
                  <div className="flex flex-col gap-23">
                    <div className="flex flex-col">
                      <h3
                        className={`bg-[#${item.textBackgroundColor}] px-2 rounded-lg`}
                      >
                        {item.text}
                      </h3>
                      <h3
                        className={`bg-[#${item.textBackgroundColor}] px-2 rounded-lg w-[12.5rem]`}
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
                          className={`bg-[#${item.buttonColor}] rounded-full`}
                        >
                          <MdArrowOutward
                            size={40}
                            className={`shrink text-[#${item.buttonTextColor}]`}
                          />{" "}
                        </span>{" "}
                        <span
                          className={`text-[#${item.learnMoreColor}] max-md:hidden`}
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
      </div>
    </>
  );
}
