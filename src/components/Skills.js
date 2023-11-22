//  src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { id: 'python', name: 'Python' },
        // Add more skills here
    ];

    return (
        <div>
            <h2>Skills</h2>
            <div className="skills-container">
                {skills.map(skill => (
                    <motion.div key={skill.id} className="skill">
                        <p>{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
