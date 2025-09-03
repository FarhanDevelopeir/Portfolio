


import Masonry from 'react-masonry-css';
import mypic2 from '../../img/main.png'
import mypic from '../../img/glasses.jpg'
import { motion } from 'framer-motion'



export default function AboutMe() {
  const items = [
    { id: 1, img: mypic, position: "top-left" },
    { id: 2, img: mypic2, position: "bottom-right" }
  ];

  const myBreakpointsAndCols = {
    default: 2,
    1100: 2,
    700: 1
  };

  return (
    <div className='my-20 text-white '>
      <h1 className="text-[35px] text-center mb-10">About Me</h1>
      <section id="AboutMe" className="flex flex-col sm:flex-row sm:gap-20 w-[90%] md:w-[80%] justify-center items-center m-auto">
        
        <motion.div
          className=" w-[90%] sm:w-[40%] h-auto shadow border-double p-2 rounded-xl border-[#5e3bee] relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Masonry
            breakpointCols={myBreakpointsAndCols}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
           

            {/* Second image with overlap */}
            {/* <div className="rounded-xl overflow-hidden relative -mt-12  ">
              <img src={items[1].img} alt="second" className="w-full h-auto rounded-xl shadow-lg" />
            </div> */}

             {/* First image */}
             {/* <div className="rounded-xl overflow-hidden relative z-10">
              <img src={items[0].img} alt="first" className="w-full h-auto rounded-xl" />
            </div> */}

            {/* Second image with overlap */}
            <motion.div
              className="rounded-xl overflow-hidden relative -mt-12"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.img
                src={items[1].img}
                alt="second"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </motion.div>

            {/* First image */}
            <motion.div
              className="rounded-xl overflow-hidden relative z-10 hidden sm:block"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.img
                src={items[0].img}
                alt="first"
                className="w-full h-auto rounded-xl"
              />
            </motion.div>
            
          </Masonry>
        </motion.div>

        <motion.div
          className=" mt-10 w-[90%] sm:w-[40%] "
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div>
            <p className="font-semibold text-xl pb-5">About</p>
            <p className="md:text-xl text-justify font-normal">
            I'm a AI Engineer and Full Stack Developer with 1.5+ years of experience building smart, scalable, and AI-powered web applications. I specialize in integrating Generative AI, RAG (Retrieval-Augmented Generation), and Voice-based Chatbots using cutting-edge models like GPT, LLaMA, Grok, and DeepSeek.

            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
