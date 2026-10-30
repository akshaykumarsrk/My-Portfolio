import React, { memo } from "react";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const ExperienceItem = memo(({ exp }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      opacity: { duration: 0.8, ease: "easeInOut" },
      y: { duration: 0.8, ease: "easeInOut" },
    }}
    viewport={{ once: true }}
    className="p-8 mb-12 border border-neutral-800 rounded-3xl shadow-xl 
               bg-gradient-to-r from-purple-800 via-indigo-900 to-blue-900 
               transform transition duration-200 bg-opacity-80"
  >
    <div className="flex items-center mb-2">
      <Briefcase className="text-white w-10 h-8 mr-4" />
      <h3 className="text-2xl font-semibold text-white">
        {exp.role}
      </h3>
    </div>

    <p className="text-lg text-gray-300 font-medium">
      {exp.company}
    </p>
    <p className="text-lg text-gray-400 mb-4">
      {exp.duration}
    </p>

    <ul className="list-disc list-inside space-y-2 text-gray-300">
      {exp.responsibilities.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </motion.div>
));

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      role: "Software Engineering Intern (ServiceNow)",
      company: "Bangmetric",
      duration: "Nov 2025 – Present",
      responsibilities: [
        "Developed and debugged backend workflows using Java-based configurations and scripting, improving system reliability.",
        "Investigated and resolved production issues by analyzing logs and identifying root causes in Linux-based environments.",
        "Assisted in system design discussions, requirement analysis, and implementation of new features.",
        "Contributed to technical documentation and knowledge transfer for supported modules.",
        "Collaborated with cross-functional teams following Agile development practices.",
      ],
    },
    {
      id: 2,
      role: "Java Full Stack Development Trainee",
      company: "AccioJob",
      duration: "March 2024 – June 2025",
      responsibilities: [
        "Built full-stack applications using Java, Spring Boot, React, and SQL following layered architecture.",
        "Designed REST APIs with proper validation, error handling, and performance-optimized database queries.",
        "Solved 300+ Data Structures and Algorithms problems, strengthening algorithmic thinking.",
        "Used Git, Docker, and CI/CD pipelines to automate build and deployment workflows.",
      ],
    },
  ];

  return (
    <motion.div
      id="experience"
      className="relative z-10 border border-neutral-800 rounded-3xl 
                 shadow-xl m-2 pt-10 lg:mb-16 px-4 bg-transparent"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-center text-3xl font-bold text-transparent 
                     bg-clip-text bg-gradient-to-r 
                     from-pink-300 via-slate-500 to-purple-500 
                     tracking-wide animate-pulse">
        Experience
      </h2>

      <div className="space-y-8 m-8">
        {experienceData.map((exp) => (
          <ExperienceItem key={exp.id} exp={exp} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
