import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faWhatsapp,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Contact = () => {
  const newTab = (url) => {
    window.open(url);
  };
  return (
    <section id="contact">
      <div className="h-fit flex items-center flex-col justify-center mt-16 sm:mb-24 mb-32">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:text-5xl text-4xl font-bold  flex  text-transparent bg-clip-text tracking-wide bg-gradient-to-r from-white to-white/30 p-2 mb-6"
        >
          Let's Connect
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="sm:px-0 lg:w-[60%] w-[90%] mx-auto  grid md:grid-cols-9 grid-cols-none  place-items-center lg:gap-x-4 md:gap-x-8 gap-2 items-center justify-center"
        >
          <div className="col-span-1 place-content-center card md:w-fit w-full px-4  content drop-shadow-md sm:h-full h-fit rounded-3xl  bg-gradient-to-b from-slate-100/10 to-black/20 border-[0.5px] border-white/20 backdrop-filter backdrop-blur-4xl">
            <ul className="flex md:flex-col flex-row md:gap-4 gap-4 items-center justify-center m-auto py-4 h-fit w-fit">
              <button
                onClick={() =>
                  newTab("https://www.linkedin.com/in/athifanthn/")
                }
                className=" flex drop-shadow-md w-14 h-14  p-[12px] rounded-3xl mt-[0px] bg-gradient-to-b from-slate-100/10 to-black/20 border-[0.5px] border-white/20 backdrop-filter backdrop-blur-4xl hover:bg-blue-900"
              >
                <AiFillLinkedin className="w-[40px] h-auto text-gray-300/80 m-auto "></AiFillLinkedin>
              </button>

              <button
                onClick={() => newTab("https://github.com/athifanathania")}
                className="flex drop-shadow-md w-14 h-14 p-[8px] rounded-3xl mt-[0px] bg-gradient-to-b from-slate-100/10 to-black/20 border-[0.5px] border-white/20 backdrop-filter backdrop-blur-4xl hover:bg-slate-800"
              >
                <AiFillGithub className="w-[40px] h-auto text-gray-300/85 m-auto"></AiFillGithub>
              </button>
              <button
                onClick={() =>
                  newTab("https://wa.me/+6287774403654?text=Halo,+Athifa!")
                }
                className=" flex drop-shadow-md w-14 h-14 p-[8px] rounded-3xl mt-[0px] bg-gradient-to-b from-slate-100/10 to-black/20 border-[0.5px] border-white/20 backdrop-filter backdrop-blur-4xl hover:bg-green-800"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="w-[30px] h-auto text-gray-300/85 m-auto"
                />
              </button>
              <button
                onClick={() =>
                  newTab("https://www.instagram.com/athifanthn/")
                }
                className="flex drop-shadow-md w-14 h-14 p-[8px] rounded-3xl mt-[0px] bg-gradient-to-b from-slate-100/10 to-black/20 border-[0.5px] border-white/20 backdrop-filter backdrop-blur-4xl hover:bg-pink-900"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-[30px] h-auto text-gray-300/85 m-auto"
                />
              </button>
            </ul>
          </div>
          <div className="md:col-span-8 col-span-1 place-content-center card sm:w-[100%] w-[100%] content drop-shadow-md h-full  p-[24px]  rounded-3xl  mt-[0px]  sm:mr-0 bg-gradient-to-b from-slate-100/10 to-black/20 border-[0.5px] border-white/20 backdrop-filter backdrop-blur-4xl ">
            <div className="md:text-xl text-lg mb-2 font-normal  flex  text-transparent bg-clip-text tracking-wide bg-gradient-to-r from-white ml-2 ">
              Send me an Email!
            </div>
            <form
              className="p-2 my-auto "
              id="form"
              action="https://getform.io/f/allzedva"
              method="POST"
            >
              <input
                type="text"
                id="name"
                placeholder="Your Name ..."
                name="name"
                className="block mb-2 w-full rounded-xl border border-[#33353F] py-2 pl-4 pr-4 bg-[#18191e] text-gray-100 placeholder-gray-400"
              />
              <input
                type="email"
                id="email"
                placeholder="Your Email ..."
                name="email"
                className="block mb-2 w-full rounded-xl border border-[#33353F] py-2 pl-4 pr-4 bg-[#18191e] text-gray-100 placeholder-gray-400"
              />
              <textarea
                type="textarea"
                id="textarea"
                cols="100"
                row="100"
                placeholder="Your Message ..."
                name="email"
                className="block mb-4 w-full h-24  rounded-xl border border-[#33353F] py-2 pl-4 pr-4 bg-[#18191e] text-gray-100 placeholder-gray-400"
              />
              <button className="w-full flex  pl-3 pr-3 pt-2 pb-2 mr-3 text-xl rounded-2xl border-[0.5px] border-slate-100/50 bg-white/5 hover:scale-105 hover:bg-slate-300/10">
                <span className="backdrop-filter backdrop-blur-4xl text-transparent m-auto bg-clip-text bg-gradient-to-br from-white to-neutral-600">
                  {" "}
                  Send Message
                </span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
