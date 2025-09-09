








import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

import legacy from "../../img/legacy.png";
import meeting from "../../img/meeting.png";
import bookerise from "../../img/bookerise.png";
// import cvmaker4 from "../../img/pokemon.png";


const portfolioData = [
  {
    id: 1,
    title: "Quran Academy",
    description: `Learn Quran Online with Expert Teachers.
Join thousands of students worldwide in their journey to master the Holy Quran. Learn from qualified teachers in the comfort of your home.`,
    image: legacy, // replace with actual Quran Academy image
    technologies: ["Next.js", "MongoDB", "shadcn", "TailwindCSS"],
    liveLink: "https://legacyquranacademy.com/",
    githubLink: "https://github.com/FarhanDevelopeir/lagecy-quran-academy", // update if available
    category: "Full Stack"
  },
  {
    id: 2,
    title: "AI-Powered Requirement Engineering Assistant",
    description: `Create, organize, and collaborate on your notes with the power of AI.
Transform your ideas into actionable insights with our intelligent notebook platform.`,
    image: meeting, // replace with actual project image
    technologies: ["Vite + React.js", "WebRTC", "MongoDB", "Langraph", "Socket.IO", "Realtime OpenAI Agent", "Python", "Flask"],
    liveLink: "https://pori-otula01.rd.tut.fi/",
    githubLink: "https://github.com/html5technologies786/MARARE/", // update if available
    category: "Full Stack"
  },
  {
    id: 3,
    title: "Bookerise",
    description: `The idea of Bookerise occurred when we were talking to our clients at Design2tech, our software/web development agency,
and started getting increasing requests to make a booking software that could take payments and manage customer data.`,
    image: bookerise, // replace with actual Bookerise image
    technologies: ["Next.js", "MongoDB", "Node.js", "Stripe", "shadcn"],
    liveLink: "https://app.bookerise.com",
    githubLink: "https://github.com", // update if available
    category: "Full Stack"
  }
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


  const phoneNumber = "03070582931"
  const whatsappUrl = `https://wa.me/${phoneNumber}`

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
            <p className="text-white text-lg mt-4 max-w-2xl" style={{ color: "gray" }}>
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
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
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
                    className="p-3 border-2 border-gray-200 rounded-xl hover:border-gray-900 hover:bg-gray-900 text-white transition-all duration-300 flex items-center justify-center"
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
            href={whatsappUrl}
            target="_blank"
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