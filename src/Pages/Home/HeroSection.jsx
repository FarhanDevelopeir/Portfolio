import { useState, useRef, useEffect } from "react";
import Resume from "./Resume";
import { motion } from "framer-motion";
import Typed from 'typed.js'

export default function HeroSection() {

  const [openResume, setOpenResume] = useState(false)
  const typedElement = useRef(null);


  const handleResume = () => {
    setOpenResume(true)
  }


  useEffect(() => {
    const options = {
      strings: ["Full Stack Development", "AI and LLM Integration", "Real-Time Applications", "Custom Software Solutions"],
      loop: true,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 400,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy(); // Cleanup Typed.js instance
    };
  }, []);

  return (
    <div className=" z-10  pt-36 md:pt-40 pb-20">
      <section id="heroSection" className=" flex items-center w-[90%]  md:w-[70%] m-auto justify-between  ">
        <motion.div
          className="  lg:w-[50%]  lg:text-left  "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* <div className="">
            <p className=" font-semibold text-2xl">Assalamoalaikum! I'm Muhammad Farhan</p>
            <p className=" text-[40px] md:text-[50px] font-semibold py-5">React <br/> Developer</p>
            <p className="text-[15px] lg:text-xl">
              Experienced React developer dedicated to transforming design concepts into functional web solutions.
              <br />
            </p>
            <motion.button
              className="btn btn-github mt-7"
              onClick={handleResume}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              View Resume
            </motion.button>
          </div> */}


          <div className=" flex flex-col justify-center text-center md:justify-normal md:text-left ">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-200 mb-2">
              I'm Muhammad Farhan
            </h1>
            <span ref={typedElement} className="text-2xl md:text-3xl text-blue-500 font-semibold" />
            <p className="mt-4 text-gray-300 max-w-xl  md:text-[24px]">
              Full-Stack & AI Engineer helping businesses build scalable,
              real-time, and intelligent solutions.
            </p>
            <div className="mt-6 flex gap-4 m-auto md:m-0">
              {/* <a href="#projects" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow">
                View My Work
              </a> */}
              <motion.button
              // className="btn btn-github mt-7"
               className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow"
              onClick={handleResume}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              View Resume
            </motion.button>
            </div>
           
          </div>
        </motion.div>
        <motion.div
          className=" hidden lg:block h-[450px]  "
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <img src="./img/mainpic.png" alt="Hero Section" className="h-full" />
        </motion.div>
      </section>
      {openResume && <Resume setOpenResume={setOpenResume} />}
    </div>
  );
}
