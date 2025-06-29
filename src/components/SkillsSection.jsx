import React, { Children } from 'react';
import { motion } from "motion/react"
export const SkillsSection = () => {
  const frontendSkills = [{
    name: 'HTML5',
    level: 95,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  }, {
    name: 'CSS3/SCSS',
    level: 90,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  }, {
    name: 'JavaScript',
    level: 92,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  }, {
    name: 'TypeScript',
    level: 75,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  }, {
    name: 'React',
    level: 90,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  }, {
    name: 'Tailwind CSS',
    level: 88,
    icon: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg'
  },
  {
    name: 'Next',
    level: 80,
    icon: 'https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg'
  },
  ];
  const otherSkills = [{
    name: 'Node.js',
    level: 75,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  }, {
    name: 'Git/GitHub',
    level: 85,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  }, {
    name: 'Responsive Design',
    level: 95,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
  }, {
    name: 'UI/UX Principles',
    level: 80,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg'
  }, {
    name: 'REST APIs',
    level: 85,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
  }, {
    name: 'Testing (Manual)',
    level: 75,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg'
  },
  {
    name: 'Unity',
    level: 40,
    icon: 'https://pageflows.com/resources/wp-content/uploads/2024/08/Unity-Logo.jpg'
  },
  ];
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  };
  return <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: '-100px'
      }} transition={{
        duration: 0.5
      }}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          My Skills
        </h2>
        <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          These are the technologies and skills I've acquired throughout my
          journey as a frontend developer.
        </p>
      </motion.div>
      <div className="flex flex-col md:flex-row gap-10">
        <motion.div className="md:w-1/2" variants={container} initial="hidden" whileInView="show" viewport={{
          once: true,
          margin: '-100px'
        }}>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
            <span className="relative">
              Frontend Development
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"></span>
            </span>
          </h3>
          <div className="space-y-6">
            {frontendSkills.map(skill => <motion.div key={skill.name} className="mb-6" variants={item}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </div>
                <span className="text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <motion.div className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500" style={{
                  width: '0%'
                }} animate={{
                  width: `${skill.level}%`
                }} transition={{
                  duration: 1,
                  delay: 0.2
                }}></motion.div>
              </div>
            </motion.div>)}
          </div>
        </motion.div>
        <motion.div className="md:w-1/2" variants={container} initial="hidden" whileInView="show" viewport={{
          once: true,
          margin: '-100px'
        }}>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
            <span className="relative">
              Other Skills
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"></span>
            </span>
          </h3>
          <div className="space-y-6">
            {otherSkills.map(skill => <motion.div key={skill.name} className="mb-6" variants={item}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </div>
                <span className="text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <motion.div className="h-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500" style={{
                  width: '0%'
                }} animate={{
                  width: `${skill.level}%`
                }} transition={{
                  duration: 1,
                  delay: 0.2
                }}></motion.div>
              </div>
            </motion.div>)}
          </div>
        </motion.div>
      </div>
      <motion.div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-10" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: '-100px'
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }}>
        <motion.div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" whileHover={{
          y: -10
        }}>
          <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
            3+
          </div>
          <div className="text-gray-600 dark:text-gray-300">
            Years Experience
          </div>
        </motion.div>
        <motion.div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" whileHover={{
          y: -10
        }}>
          <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
            25+
          </div>
          <div className="text-gray-600 dark:text-gray-300">
            Projects Completed & contributed
          </div>
        </motion.div>
        <motion.div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" whileHover={{
          y: -10
        }}>
          <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
            12+
          </div>
          <div className="text-gray-600 dark:text-gray-300">
            Happy Clients
          </div>
        </motion.div>
        <motion.div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" whileHover={{
          y: -10
        }}>
          <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
            15+
          </div>
          <div className="text-gray-600 dark:text-gray-300">Technologies</div>
        </motion.div>
      </motion.div>
    </div>
  </section>;
};