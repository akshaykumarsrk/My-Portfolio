import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Contact = () => {
  return (
    <div id="contact" className="border border-neutral-800 rounded-3xl shadow-xl m-2 pb-20 lg:mb-16">
      <motion.h1
        className="my-10 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl font-semibold text-transparent tracking-wide animate-text"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Let's Connect
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          className="my-4 text-lg text-gray-300"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          className="my-4 text-lg text-gray-300"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          href={`mailto:${CONTACT.email}`}
          className="text-lg border-b cursor-pointer text-gray-300"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, color: '#A855F7' }}
          style={{ display: 'inline-block' }}
        >
          {CONTACT.email}
        </motion.a>
      </div>
      <div className="mt-10 flex justify-center gap-8 text-xl">
        <motion.a
          href="https://github.com/akshaykumarsrk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-purple-500"
          whileHover={{ scale: 1.1 }}
        >
          <FaGithub />
          <span>GitHub</span>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/akshay-kumar121817/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-purple-500"
          whileHover={{ scale: 1.1 }}
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
