import React, { useState } from "react";
import SectionHeader from "../../section-header/section-header";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function AccordionSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionContent = [
    {
      number: "01",
      caption: "Consultation",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      number: "02",
      caption: "Research and Strategy Development",
      content:
        "We conduct in-depth market analysis, competitor research, and audience segmentation. This allows us to craft a tailored strategy that aligns with your business objectives and ensures maximum impact.",
    },
    {
      number: "03",
      caption: "Implementation",
      content:
        "During the implementation phase, we put the strategy into action by executing targeted campaigns, optimizing digital assets, and deploying best practices. Our team ensures seamless execution while closely monitoring initial performance to make necessary adjustments.",
    },
    {
      number: "04",
      caption: "Monitoring and Optimization",
      content:
        "We continuously track key performance indicators, analyze data insights, and refine strategies. This allows us to maximize efficiency, improve engagement, and ensure your business goals are met effectively.",
    },
    {
      number: "05",
      caption: "Reporting and Communication",
      content:
        "We provide detailed insights, performance reports, and strategic recommendations. Regular updates and transparent discussions ensure alignment with your business objectives and continuous improvement.",
    },
    {
      number: "06",
      caption: "Continual Improvement",
      content:
        "During the continual improvement phase, we evaluate past performance, implement new innovations, and refine strategies for sustained growth. By staying proactive and data-driven, we ensure long-term success and adaptability in an evolving market.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SectionHeader
        heading={"Our Working Process"}
        description={"Step-by-Step Guide to Achieving Your Business Goals"}
      />
      <div className="w-full h-auto flex flex-col gap-8">
        {accordionContent.map((content, index) => (
          <>
            <div
              key={content.key}
              className={`w-full flex flex-col ${
                openIndex === index ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"
              } border transition-all duration-300 border-[#191A23] border-b-6 py-[41px] px-[60px] max-md:py-[30px] max-md:px-[20px] rounded-[45px]`}
            >
              <div className="w-full flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-6">
                  <span className="text-[60px] max-md:text-xl font-[600]">
                    {content.number}
                  </span>
                  <span className="text-[30px] max-md:text-xl font-[600]">
                    {" "}
                    {content.caption}
                  </span>
                </div>
                <motion.div
                  onClick={() => handleToggle(index)}
                  className="rounded-full border bg-[#F3F3F3]"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaMinus className="px-4 py-4 shrink text-[60px] max-md:text-[40px] max-md:px-2 max-md:py-2" />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaPlus className="px-4 py-4 shrink text-[60px] max-md:text-[40px] max-md:px-2 max-md:py-2" />
                    </motion.div>
                  )}
                </motion.div>
              </div>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="w-full border mt-8 mb-8 border-[#191A23]" />
                    <p>{content.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
