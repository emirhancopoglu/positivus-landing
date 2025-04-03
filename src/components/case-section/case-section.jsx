import React from "react";
import SectionHeader from "../section-header/section-header";

export default function CaseSection() {
  const caseStudiesItem = [
    {
      text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
      buttonText: "Learn More",
      isBorder: true,
    },
    {
      text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
      buttonText: "Learn More",
      isBorder: true,
    },
    {
      text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
      buttonText: "Learn More",
      isBorder: false,
    },
  ];

  return (
    <>
      <SectionHeader
        heading={"Case Studies"}
        description={
          "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        }
      />

      <div className="w-full flex flex-row gap-x-16 bg-[#191A23] rounded-[45px] px-[60px] py-[70px] justify-center">
        {caseStudiesItem.map((item, index) => (
          <>
            <div key={index} className="flex flex-col gap-5 w-[18rem]">
              <p className="text-white">{item.text}</p>
              <span className="text-[#B9FF66]">{item.buttonText}</span>
            </div>
            {item.isBorder === true && (
              <div className="border border-[#F3F3F3]" />
            )}
          </>
        ))}
      </div>
    </>
  );
}
