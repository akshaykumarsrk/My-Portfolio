import React from "react";
import profilePic from "../assets/AkshayProfile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

const Hero = () => {
  return (
    <section className="border-2 border-neutral-800 rounded-3xl shadow-xl m-2 p-20 lg:mb-26">
      <div className="flex flex-wrap items-center">
   
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
    
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="py-8 text-5xl font-thin tracking-tight lg:mt-10 lg:text-7xl"
            >
              Akshay Kumar
            </motion.h1>


            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent"
            >
              Software Engineer
            </motion.span>

  
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-xl py-4 text-center font-light leading-relaxed tracking-tight lg:text-left"
            >
            Passionate Software Engineer skilled in Java, Spring Boot, and full-stack development. Experienced in building scalable systems, RESTful APIs, and secure applications with hands-on expertise in cloud deployment and microservices. Strong problem-solver with 300+ DSA challenges solved, eager to innovate, learn, and deliver impactful engineering solutions.
            </motion.p>

            <motion.a
  href="https://drive.google.com/file/d/1XHXv4n_qeGDGpMO1kiJqN92blrVA4hl2/view?usp=sharing" 
  download
  target="_blank"  // This makes the link open in a new tab
  variants={container(0.4)}  
  initial="hidden"
  animate="visible"
  className="mt-6 rounded-lg bg-purple-600 px-6 py-3 text-lg font-semibold text-white hover:bg-purple-700"
>
  Download My Resume
</motion.a>

          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="h-64 w-64 rounded-full shadow-lg object-cover"
              src={profilePic}
              alt="Neha's Profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
