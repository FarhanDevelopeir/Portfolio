// import data from "../../data/index.json";
// import { motion } from "framer-motion";

// export default function MyPortfolio() {
//   return (
//     <section className="mt-20 w-[90%] m-auto" id="MyPortfolio">
//       <div className=" md:flex md:justify-between mb-10 ">
//         <div className="portfolio--container">
//           <p className="sub--title  ">Recent Projects</p>
//           <h2 className="section--heading mb-5 md:mb-0 ">My Portfolio</h2>
//         </div>
//         <div className=" ">
//           <a href="https://github.com/FarhanDevelopeir" target="_blank" style={{ textDecoration: 'none' }}>
//             <motion.button className="btn btn-github m-auto " whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="32"
//                 height="32"
//                 viewBox="0 0 33 33"
//                 fill="none"
//               >
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M16.3333 0.166748C7.50028 0.166748 0.333252 7.33378 0.333252 16.1667C0.333252 24.9997 7.50028 32.1667 16.3333 32.1667C25.1489 32.1667 32.3333 24.9997 32.3333 16.1667C32.3333 7.33378 25.1489 0.166748 16.3333 0.166748ZM26.9016 7.54202C28.8105 9.8674 29.9559 12.8348 29.9906 16.0452C29.5394 15.9585 25.0274 15.0387 20.4808 15.6114C20.3767 15.3858 20.2899 15.1428 20.1858 14.8999C19.9081 14.2405 19.5958 13.5637 19.2834 12.9216C24.3159 10.8739 26.6066 7.9238 26.9016 7.54202ZM16.3333 2.52684C19.804 2.52684 22.9797 3.82836 25.3919 5.96285C25.1489 6.30992 23.0838 9.06914 18.2248 10.8912C15.9862 6.77846 13.5047 3.41187 13.1229 2.89126C14.1467 2.64831 15.2227 2.52684 16.3333 2.52684ZM10.5199 3.811C10.8843 4.2969 13.3138 7.68085 15.5871 11.7068C9.20093 13.4075 3.56102 13.3728 2.95364 13.3728C3.83867 9.13855 6.70201 5.61577 10.5199 3.811ZM2.65863 16.1841C2.65863 16.0452 2.65863 15.9064 2.65863 15.7676C3.24865 15.7849 9.87772 15.8717 16.6977 13.824C17.0969 14.5875 17.4613 15.3684 17.8084 16.1493C17.6348 16.2014 17.4439 16.2535 17.2704 16.3055C10.2248 18.5788 6.47642 24.7914 6.16405 25.312C3.99485 22.8999 2.65863 19.6895 2.65863 16.1841ZM16.3333 29.8413C13.1749 29.8413 10.2595 28.7654 7.95147 26.9606C8.19442 26.4574 10.971 21.1125 18.676 18.4227C18.7107 18.4053 18.7281 18.4053 18.7628 18.388C20.689 23.3684 21.47 27.5506 21.6782 28.748C20.0296 29.4595 18.2248 29.8413 16.3333 29.8413ZM23.9515 27.4986C23.8127 26.6656 23.0838 22.6743 21.2964 17.7632C25.5828 17.0864 29.3311 18.1971 29.7997 18.3533C29.2097 22.1537 27.0231 25.4335 23.9515 27.4986Z"
//                   fill="currentColor"
//                 />
//               </svg>
//               Visit My GitHub
//             </motion.button>
//           </a>
//         </div>
//       </div>
//       <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
//         {data?.portfolio?.map((item, index) => (
//           <motion.div
//             key={index}
//             className="border shadow-md rounded-md"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
//           >
//             <div className=" hover-zoom ">
//               <img src={item.src} alt="Placeholder" className=" h-52 w-full hover-zoom rounded-t-md border-b " />
//             </div>
//             <div className="p-3">
//               <div>
//                 <h3 className="mb-2 font-semibold ">{item.title}</h3>
//                 <p className="text-sm md:text-[16px] mb-5">{item.description}</p>
//               </div>
//               <div className="portfolio-demo mb-4  flex flex-col md:flex-row">
//                 <p className="text-sm portfolio--link mb-3 md:mb-0 ">
//                   {item.link}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="12"
//                     height="12"
//                     viewBox="0 0 20 19"
//                     fill="none"
//                   >
//                     <path
//                       d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
//                       stroke="currentColor"
//                       strokeWidth="2.66667"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </p>
//                 <a href={item.weblink} target="_blank" rel="noreferrer">
//                   <button className="btn-projects btn-primary w-full md:w-transparent ">{item.demo}</button>
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }












import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

import cvmaker from "../../img/cvmaker.png";
import cvmaker2 from "../../img/ecomm.png";
import cvmaker3 from "../../img/pokemon.png";
import cvmaker4 from "../../img/pokemon.png";


// Sample portfolio data - replace with your actual data
const portfolioData = [
  {
    id: 1,
    title: "AI-Powered RAG Chatbot",
    description: "Advanced conversational AI system with custom knowledge base integration, vector search, and intelligent response generation using Claude API.",
    image: cvmaker,
    technologies: ["React", "Node.js", "Claude API", "Vector DB", "LangChain"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    category: "AI/ML"
  },
  {
    id: 2,
    title: "Full Stack E-Commerce Platform",
    description: "Complete e-commerce solution with modern design, secure payment integration, and comprehensive admin dashboard.",
    image: cvmaker2,
    technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Tailwind"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    category: "Full Stack"
  },
  {
    id: 3,
    title: "MCP Tools Dashboard",
    description: "Custom Model Context Protocol tools integration dashboard with real-time monitoring and orchestration capabilities.",
    image: cvmaker3,
    technologies: ["React", "MCP", "WebSocket", "Node.js", "Express"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    category: "MCP Tools"
  },
  
];

export default function MyPortfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
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
    <section className="py-20   min-h-screen" id="MyPortfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 lg:mb-0">
           
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              My Portfolio
            </h2>
            <p className="text-white text-lg mt-4 max-w-2xl" style={{color: "gray"}}>
              Showcasing innovative solutions that blend cutting-edge technology with practical applications.
            </p>
          </div>
          
          <motion.a 
            href="https://github.com/FarhanDevelopeir" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-6 h-6 text-gray-50" />
            <span className="text-gray-50">Visit GitHub</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-gray-50" />
          </motion.a>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {portfolioData.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group bg-transparent border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-500 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-200 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white text-center py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 border-2 border-gray-200 rounded-xl hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center justify-center"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
         
          <a 
            href="#contact" 
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>Let's Work Together</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}