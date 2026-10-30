import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Project = () => {
  return (
    <div id="projects" className="relative z-10 border-2 border-neutral-800 rounded-3xl shadow-xl m-2 p-8 lg:mb-16">
      <motion.h1
        className="text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col bg-gradient-to-r from-purple-800 via-indigo-900 to-blue-900 p-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex flex-col mb-4">
              <h6 className="text-xl font-semibold text-white mb-2">{project.title}</h6>
              <p className="text-neutral-200 mb-4">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="bg-neutral-800 text-sm font-medium text-purple-400 rounded-full px-3 py-1"
                    whileHover={{ scale: 1.1, backgroundColor: '#A855F7', color: '#FFFFFF' }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:underline text-lg"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:underline text-lg"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
