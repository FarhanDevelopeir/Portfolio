// import data from "../../data/index.json";
// import html from "../../img/html5-logo-31813.png";
// import github from '../../img/github.jpeg'
// import tailwind from '../../img/tailwind.jpeg'
// import react from '../../img/pngwing.com.png'
// import javascript from '../../img/javascript-39395.png'
// import css from '../../img/pngwing.com (1).png'
// import { useRef } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// // import {scrollTrigger} from 'gsa'
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(useGSAP);
// gsap.registerPlugin(ScrollTrigger);


// export default function MySkills() {

//   const box = useRef();


  
  
//   return (
//     <section id="MySkills" className="  w-[95%] m-auto  ">
//       <div className=" text-center mb-20">
//         {/* <p className=" text-lg text-[#c3ac80] ">My Skills</p> */}
//         <h2 className=" text-3xl text-white ">My Skills</h2>
//       </div>
//       <div className="main relative m-auto  p-2 flex flex-col space-y-8 md:space-y-0 " ref={box}>
       
//         <div className=" absolute w-2 h-full md:m-auto bg-gray-300 border-2 border-purple-400 rounded-md left-9 md:left-0 z-0 inset-0 "></div>
//         <motion.div
//           className="  z-10     "
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//         >
//           <img
//             src={html}
//             className="h-16 bg-white xs:absolute md:relative md:m-auto w-16 rounded-full border-4 border-orange-400 p-1 shadow-md"
//           />
//           <div className="textbox1   relative pt-3 xs:pl-16 xs:pt-0  md:m-auto md:w-1/2 md:mr-0 md:-top-16 ">
//             <div className=" absolute h-4 w-4 mt-1 left-6 xs:left-[67px] md:left-9 xs:top-5 bg-gray-200 rotate-45 inset-0"></div>
//             <div className="     bg-gray-200 p-3 lg:w-[60%]  rounded-md xs:ml-3 shadow-md md:-ml-5 ">
//               <h2 className=" text-purple-900">HTML</h2>
//               Proficient in using HTML to structure and organize web content,
//               ensuring accessibility and compatibility across various browsers
//               and devices.
//             </div>
//           </div>
//         </motion.div>
//         <motion.div
//           className="  z-10     "
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
//         >
//           <img
//             src={css}
//             className="h-16 bg-white xs:absolute md:relative md:m-auto w-16 rounded-full border-4 border-blue-700 p-1 shadow-md"
//           />
//           <div className="textbox2 relative pt-3 xs:pl-16 xs:pt-0 md:m-auto md:w-1/2 md:ml-0 md:-top-16 ">
//             <div className="bg-gray-200 lg:w-[60%] md:float-end p-3 rounded-md xs:ml-3 shadow-md md:mr-16 ">
//               <h2 className=" text-purple-900">CSS</h2>
//               Skilled in CSS for designing visually appealing and responsive web
//               layouts, with an emphasis on clean and maintainable code.
//             </div>
//             <div className=" absolute h-4 w-4 mt-1 left-6 xs:left-[67px]  xs:top-5 md:left-auto md:right-14  bg-gray-200 rotate-45 inset-0"></div>
//           </div>
//         </motion.div>
//         <motion.div
//           className="  z-10     "
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
//         >
//           <img
//             src={javascript}
//             className="h-16 bg-white xs:absolute md:relative md:m-auto w-16 rounded-full border-4 border-yellow-400 p-1 shadow-md"
//           />
//           <div className="textbox3 relative pt-3 xs:pl-16 xs:pt-0  md:m-auto md:w-1/2 md:mr-0 md:-top-16 ">
//             <div className=" absolute h-4 w-4 mt-1 left-6 xs:left-[67px] md:left-9 xs:top-5 bg-gray-200 rotate-45 inset-0"></div>
//             <div className="     bg-gray-200 p-3 lg:w-[60%]   rounded-md xs:ml-3 shadow-md md:-ml-5 ">
//               <h2 className=" text-purple-900">JavaScript</h2>
//               Experienced in JavaScript for implementing dynamic and interactive
//               features on websites, enhancing user engagement and functionality.
//             </div>
//           </div>
//         </motion.div>
//         <motion.div
//           className="  z-10     "
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
//         >
//           <img
//             src={react}
//             className="h-16 bg-white xs:absolute md:relative md:m-auto w-16 rounded-full border-4 border-cyan-500 p-1 shadow-md"
//           />
//           <div className="textbox4 relative pt-3 xs:pl-16 xs:pt-0 md:m-auto md:w-1/2 md:ml-0 md:-top-16 ">
//             <div className="bg-gray-200 p-3 lg:w-[60%] md:float-end rounded-md xs:ml-3 shadow-md md:mr-16 ">
//               <h2 className=" text-purple-900">React JS</h2>
//               Adept at building modern, component-based web applications using
//               React.js, with a focus on creating fast and seamless user
//               interfaces.
//             </div>
//             <div className=" absolute h-4 w-4 mt-1 left-6 xs:left-[67px]  xs:top-5 md:left-auto md:right-14  bg-gray-200 rotate-45 inset-0"></div>
//           </div>
//         </motion.div>
//         <motion.div
//           className="  z-10     "
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
//         >
//           <img
//             src={tailwind}
//             className="h-16 bg-white xs:absolute md:relative md:m-auto w-16 rounded-full border-4 border-cyan-500 p-1 shadow-md"
//           />
//           <div className="textbox5 relative pt-3 xs:pl-16 xs:pt-0  md:m-auto md:w-1/2 md:mr-0 md:-top-16 ">
//             <div className=" absolute h-4 w-4 mt-1 left-6 xs:left-[67px] md:left-9 xs:top-5 bg-gray-200 rotate-45 inset-0"></div>
//             <div className="     bg-gray-200 p-3 lg:w-[60%]   rounded-md xs:ml-3 shadow-md md:-ml-5 ">
//               <h2 className=" text-purple-900">Tailwind CSS</h2>
//               Proficient in using Tailwind CSS to create modern, user-friendly
//               website designs with simplicity and style.
//             </div>
//           </div>
//         </motion.div>
//         <motion.div
//           className="  z-10     "
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
//         >
//           <img
//             src={github}
//             className="h-16 bg-white xs:absolute md:relative md:m-auto w-16 rounded-full border-4 border-black p-1 shadow-md"
//           />
//           <div className="textbox6 relative pt-3 xs:pl-16 xs:pt-0 md:m-auto md:w-1/2 md:ml-0 md:-top-16 ">
//             <div className="bg-gray-200 p-3 lg:w-[60%] md:float-end  rounded-md xs:ml-3 shadow-md md:mr-16 ">
//             <h2 className=" text-purple-900">GitHub</h2>
//               Skilled in using GitHub for teamwork, sharing code, and keeping
//               projects organized, making collaboration smooth and hassle-free.
//             </div>
//             <div className=" absolute h-4 w-4 mt-1 left-6 xs:left-[67px]  xs:top-5 md:left-auto md:right-14  bg-gray-200 rotate-45 inset-0"></div>
//           </div>
//         </motion.div>
       
//       </div>
//     </section>
//   );
// }









import React, { useRef } from "react";
import { motion } from "framer-motion";

// Skill icons - using Lucide React icons for consistency
import { 
  Code2, 
  Server, 
  Brain, 
  MessageSquare, 
  Zap, 
  Globe,
  Database,
  Cpu,
  Bot,
  Network,
  Layers
} from "lucide-react";

const skillsData = [
  {
    id: 1,
    title: "Frontend Development",
    icon: <Code2 className="w-8 h-8" />,
    borderColor: "border-blue-500",
    bgGradient: "from-blue-500 to-cyan-500",
    description: "Expert in building responsive, modern web applications using React.js, Next.js, and TypeScript. Proficient in Tailwind CSS, component architecture, state management, and creating seamless user experiences with advanced animations and interactions.",
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"]
  },
  {
    id: 2,
    title: "Backend Development",
    icon: <Server className="w-8 h-8" />,
    borderColor: "border-green-500",
    bgGradient: "from-green-500 to-emerald-500",
    description: "Skilled in developing robust server-side applications using Node.js, Express.js, and Python. Experience with RESTful APIs, GraphQL, database design, authentication systems, and cloud deployment strategies.",
    technologies: ["Node.js", "Express.js", "Python", "MongoDB", "PostgreSQL", "JWT Auth"]
  },
  {
    id: 3,
    title: "AI Models Integration",
    icon: <Brain className="w-8 h-8" />,
    borderColor: "border-purple-500",
    bgGradient: "from-purple-500 to-violet-500",
    description: "Experienced in integrating cutting-edge AI models including GPT, Claude, and custom machine learning models. Proficient in prompt engineering, model fine-tuning, and building intelligent applications with natural language processing capabilities.",
    technologies: ["OpenAI API", "Anthropic Claude", "Hugging Face", "TensorFlow", "PyTorch", "Prompt Engineering"]
  },
  {
    id: 4,
    title: "RAG Chatbots",
    icon: <MessageSquare className="w-8 h-8" />,
    borderColor: "border-orange-500",
    bgGradient: "from-orange-500 to-red-500",
    description: "Specialized in developing Retrieval-Augmented Generation chatbots that combine large language models with custom knowledge bases. Expert in vector databases, semantic search, and context-aware conversational AI systems.",
    technologies: ["LangChain", "Vector DBs", "Pinecone", "Chroma", "Semantic Search", "Context Management"]
  },
  {
    id: 5,
    title: "MCP Tools Integration",
    icon: <Zap className="w-8 h-8" />,
    borderColor: "border-yellow-500",
    bgGradient: "from-yellow-500 to-orange-500",
    description: "Advanced expertise in Model Context Protocol (MCP) tools integration, enabling seamless communication between AI models and external systems. Proficient in building custom MCP servers and implementing complex tool orchestration.",
    technologies: ["MCP Protocol", "Tool Orchestration", "API Integration", "Custom Servers", "Claude MCP", "Function Calling"]
  },
  {
    id: 6,
    title: "Full Stack Development",
    icon: <Globe className="w-8 h-8" />,
    borderColor: "border-indigo-500",
    bgGradient: "from-indigo-500 to-blue-500",
    description: "Comprehensive full-stack development expertise combining frontend excellence with robust backend solutions. Experienced in DevOps, CI/CD pipelines, cloud architecture, and delivering end-to-end solutions for complex business requirements.",
    technologies: ["MERN Stack", "DevOps", "AWS/Vercel", "Docker", "CI/CD", "Microservices"]
  }
];

export default function MySkills() {
  const containerRef = useRef();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="MySkills" className="min-h-screen  py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized in cutting-edge web development and AI integration, delivering innovative solutions 
            that bridge traditional development with artificial intelligence capabilities.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all duration-300 hover:scale-100 hover:shadow-2xl hover:shadow-purple-500/25">
                {/* Icon and Title */}
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${skill.bgGradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4 group-hover:text-blue-300 transition-colors duration-300">
                    {skill.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-white text-lg mb-6" style={{color: "gray"}}>
                  {skill.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      // style={{color: "gray"}}
                     

                      style={{
                        color: "gray",
                       
                      }}
                      className={`px-3 py-1 text-sm rounded-full border ${skill.borderColor}  shadow-md hover:scale-105 transition-transform duration-200`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl border-2 ${skill.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <Cpu className="w-5 h-5" />
            <span>Ready to build the future with AI-powered solutions</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}