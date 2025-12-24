import React from 'react';
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import leetcodeLogo from '../assets/leetcodeLogo.webp';
import gfgLogo from '../assets/gfgLogo.jpg';
import codechefLogo from '../assets/codechefLogo.webp';
import { motion } from 'framer-motion';
const About = () => {
  return (
    <div id="about" className="border border-neutral-800 rounded-3xl shadow-xl m-2 p-1 lg:mb-16">
    <h1 className="my-10 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-3xl font-semibold tracking-tight text-transparent bg-clip-text">
  About Me
</h1>

      <div className="flex flex-wrap">

        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1.02}} className="w-full lg:w-1/2 lg:p-8 flex justify-center">
          <img className="rounded-2xl" src={aboutImg} alt="About" />
        </motion.div>

        
        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1.02}} className="w-full lg:w-1/2 lg:p-8">
          <div className="flex flex-col justify-center">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>

            <div className="container mx-auto px-4 py-8">
              <h2 className="text-3xl font-bold text-center mb-4">Here Are My Coding Profiles</h2>
              <div className="flex justify-center gap-8 text-2xl">
            
                <a
                  href="https://leetcode.com/u/akshaykumarsrk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  className="flex flex-col items-center gap-2 text-blue-500 hover:text-blue-700"
                >
                  <img
                    src={leetcodeLogo}
                    alt="LeetCode Logo"
                    className="w-10 h-10"
                  />
                  <span>LeetCode</span>
                </a>

              
                <a
                  href="https://www.geeksforgeeks.org/user/akshaykumarlc7u/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GeeksforGeeks Profile"
                  className="flex flex-col items-center gap-2 text-green-500 hover:text-green-700"
                >
                  <img
                    src={gfgLogo}
                    alt="GFG Logo"
                    className="w-10 h-10"
                  />
                  <span>GFG</span>
                </a>


                <a
                  href="https://www.codechef.com/users/akshay121817"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CodeChef Profile"
                  className="flex flex-col items-center gap-2 text-orange-500 hover:text-orange-700"
                >
                  <img
                    src={codechefLogo}
                    alt="CodeChef Logo"
                    className="w-10 h-10"
                  />
                  <span>CodeChef</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
