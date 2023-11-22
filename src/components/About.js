// src/components/About.js

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about-section"
    >
      <h1>About Me</h1>
      <p>I specialize in Python, JavaScript, SQL, AWS, HTML, CSS, Computer Vision, LLM, and Generative AI. My experience includes roles in AI Engineering and Data Engineering at Sampled and Kenvue.</p>
      {/* Add more content about yourself here */}
    </motion.div>
  );
}

export default About;
