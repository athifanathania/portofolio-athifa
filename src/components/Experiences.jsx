import React from "react";

import { VerticalTimeline } from "react-vertical-timeline-component";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "../timeline.css";
import { ORGANIZATION, WORK_EXPERIENCES, COMMITTEE } from "../constants";
import { motion } from "framer-motion";
import mandom from "../assets/mandom.png";
// import "react-vertical-timeline-component/style.min.css";

function Experiences() {
  return (
    <section id="experiences">
      <div className="min-h-[100vh] pt-0 sm:pt-[20px] pb-[80px] pr-[6px] pl-[6px] text-white sm:mt-0 mt-20">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="md:text-5xl text-4xl font-bold md:mt-16 flex justify-center text-transparent bg-clip-text tracking-wide bg-gradient-to-r from-white p-2 ">
            Experiences
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:text-3xl text-xl font-medium md:mt-0 md:mb-10 flex justify-center text-transparent bg-clip-text tracking-wide bg-gradient-to-r from-white p-2 "
        >
          Professional Experiences
        </motion.div>
        <div className="max-w-[1300px] m-auto flex flex-wrap relative">
          <VerticalTimeline>
          {WORK_EXPERIENCES.map((data, key) => (
              <VerticalTimelineElement key={key} date={data.year}>
                <div className=" hover:bg-gradient-to-tr hover:from-indigo-600/20 content drop-shadow-md h-full p-[24px]  rounded-3xl sm:mt-[15px] mt-[0px] mr-4 sm:mr-0 bg-gradient-to-b from-white/10 to-black/25 border-[0.5px] border-white/20 backdrop-filter backdrop-blur-4xl card ">
                  <div className="flex gap-4 items-center">
                    <div className="mb-4 drop-shadow-md h-full p-[12px]  rounded-3xl mt-[0px]  bg-gradient-to-b from-white/10 to-black/25 border-[0.5px] border-white/20 backdrop-filter backdrop-blur-4xl card">
                      <img className="max-w-16 h-16" src={data.logo} alt="" />
                    </div>
                    <div>
                      <div className="sm:text-[22px] leading-tight mb-1 text-lg font-bold   text-transparent bg-clip-text tracking-wide bg-gradient-to-r from-white">
                        {data.role}
                      </div>
                      <div className="text-sm font-semibold mb-4 text-white/70">
                        {data.company}
                      </div>
                    </div>
                  </div>
                  <ul className="list-decimal ml-4 sm:text-base sm:font-thin font-normal text-sm">
                    {data.description.map((desc, index) => (
                      <li key={index}> {desc}</li>
                    ))}
                  </ul>
                  {data.technologies && data.technologies.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {data.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 backdrop-blur-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="md:text-3xl text-xl font-medium md:mt-16 mt-12 md:mb-10 flex justify-center text-transparent bg-clip-text tracking-wide bg-gradient-to-br from-white p-2  "
        >
          Organizational Experiences
        </motion.div>
        <div className="max-w-[1300px] m-auto flex flex-wrap relative">
          <VerticalTimeline>
          {ORGANIZATION.map((data, key) => (
              <VerticalTimelineElement key={key} date={data.year}>
                <div className=" hover:bg-gradient-to-tr hover:from-indigo-600/20 content drop-shadow-md h-full p-[24px]  rounded-3xl sm:mt-[15px] mt-[0px] mr-4 sm:mr-0 bg-gradient-to-b from-white/10 to-black/25 border-[0.5px] border-white/20 backdrop-filter backdrop-blur-4xl card ">
                  <div className="flex gap-4 items-center ">
                    <div className="mb-4 drop-shadow-md h-full p-[12px]  rounded-3xl  mt-[0px]  bg-gradient-to-b from-white/10 to-black/25 border-[0.5px] border-white/20 backdrop-filter backdrop-blur-4xl card ">
                      <img className="max-w-16 h-16 " src={data.logo} alt="" />
                    </div>
                    <div>
                      <div className="sm:text-[22px] leading-tight mb-1 text-lg font-bold   text-transparent bg-clip-text tracking-wide bg-gradient-to-r from-white">
                        {data.role}
                      </div>
                      <div className="text-sm font-semibold mb-4 text-white/70">
                        {data.company}
                      </div>
                    </div>
                  </div>
                  <ul className="list-decimal ml-4 sm:text-base sm:font-thin font-normal text-sm">
                    {data.description.map((desc, index) => (
                      <li key={index}> {desc}</li>
                    ))}
                  </ul>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="md:text-3xl text-xl font-medium md:mt-16 mt-12 md:mb-10 flex justify-center text-transparent bg-clip-text tracking-wide bg-gradient-to-br from-white p-2  "
        >
          Committee Experiences
        </motion.div>
        <div className="max-w-[1300px] m-auto flex flex-wrap relative">
          <VerticalTimeline>
          {COMMITTEE.map((data, key) => (
              <VerticalTimelineElement key={key} date={data.year}>
                <div className=" hover:bg-gradient-to-tr hover:from-indigo-600/20 content drop-shadow-md h-full p-[24px]  rounded-3xl sm:mt-[15px] mt-[0px] mr-4 sm:mr-0 bg-gradient-to-b from-white/10 to-black/25 border-[0.5px] border-white/20 backdrop-filter backdrop-blur-4xl card ">
                  <div className="flex gap-4 items-center ">
                    <div className="mb-4 drop-shadow-md h-full p-[12px]  rounded-3xl  mt-[0px]  bg-gradient-to-b from-white/10 to-black/25 border-[0.5px] border-white/20 backdrop-filter backdrop-blur-4xl card ">
                      <img className="max-w-16 h-16 " src={data.logo} alt="" />
                    </div>
                    <div>
                      <div className="sm:text-[22px] leading-tight mb-1 text-lg font-bold   text-transparent bg-clip-text tracking-wide bg-gradient-to-r from-white">
                        {data.role}
                      </div>
                      <div className="text-sm font-semibold mb-4 text-white/70">
                        {data.company}
                      </div>
                    </div>
                  </div>
                  <ul className="list-decimal ml-4 sm:text-base sm:font-thin font-normal text-sm">
                    {data.description.map((desc, index) => (
                      <li key={index}> {desc}</li>
                    ))}
                  </ul>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
