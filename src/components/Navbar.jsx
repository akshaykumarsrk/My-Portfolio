import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="mb-5 mt-5 m-2 border border-neutral-800 rounded-3xl shadow-xl flex items-center justify-between py-6 px-4 lg:px-10">

      <div className="text-2xl font-bold text-purple-500"></div>

      <div className="hidden lg:flex items-center gap-8 text-lg">
        {["about", "experience", "educations", "technologies", "projects", "contact"].map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            className="cursor-pointer  from-pink-300 via-slate-500 to-purple-500 hover:text-purple-900 transition-all"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>

     
      <div className="flex gap-4 ">
        <a
          href="https://www.linkedin.com/in/akshay-kumar121817/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-900 transition-transform transform hover:scale-110"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/akshaykumarsrk"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-900 transition-transform transform hover:scale-110"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
