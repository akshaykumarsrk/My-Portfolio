import React, { memo } from 'react';
import { GraduationCap } from 'lucide-react'; 
import { motion } from 'framer-motion'; 

const EducationItem = memo(({ edu }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{
      opacity: { duration: 0.8, ease: "easeInOut" }, 
      y: { duration: 0.8, ease: "easeInOut" },
    }}
    viewport={{ once: true }}
    className="p-8 mb-12 border border-neutral-800 rounded-3xl shadow-xl bg-gradient-to-r from-purple-800 via-indigo-900 to-blue-900 transform transition duration-200 bg-opacity-80"
  >
    <div className="flex items-center mb-2">
      <GraduationCap className="text-white w-10 h-8 mr-4" />
      <h3 className="text-2xl font-semibold text-white">{edu.degree}</h3>
    </div>
    <p className="text-lg text-gray-300">{edu.institution}</p>
    <p className="text-lg text-gray-300">{edu.duration}</p>
    <p className="text-lg text-gray-300">{edu.CGPA}</p>
  </motion.div>
));

const Education = () => {
  const educationData = [
    {
      id: 1, 
      degree: "Master of Computer Applications (MCA)",
      institution: "College of Engineering Roorkee (COER), Roorkee, Uttarakhand",
      duration: "2024 - 2026",
      CGPA: "CGPA: 8.6/10",
    },
    {
      id: 2, 
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Maa Shakumbhari University, Saharanpur, Uttar Pradesh",
      duration: "2021 - 2024",
      CGPA: "CGPA: 7.75/10",
    },
  ];

  return (
    <motion.div
      id="educations"
      className="relative z-10 border border-neutral-800 rounded-3xl shadow-xl m-2 pt-10 lg:mb-16 px-4 bg-transparent"
      initial={{ opacity: 0, y: -20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeInOut" }} 
      viewport={{ once: true }}
    >
      <h2 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 tracking-wide animate-pulse">
        Education
      </h2>

      <div className="space-y-8 m-8">
        {educationData.map((edu) => (
          <EducationItem key={edu.id} edu={edu} />
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
