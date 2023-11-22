// src/components/About.js

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="about-section"
    >
      <h1>About Me</h1>
      <p>Hi, I'm Viktor. I specialize in Artificial Intelligence and my main skills are Python, JavaScript, SQL, AWS, HTML, CSS, Computer Vision, LLM, and Generative AI. I have worked in AI Engineering and Data Engineering at Sampled and Kenvue.</p>
      {/* Add more content about yourself here */}
    </motion.div>
  );
}

export default About;
