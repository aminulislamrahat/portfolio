import React, { Children } from 'react';
import { Code, Globe, Award, Heart, Coffee, Music, BookOpen } from 'lucide-react';
import { motion } from "motion/react"
export const AboutSection = () => {
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return <section id="about" className="py-20 bg-white dark:bg-gray-800">
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
          About Me
        </h2>
        <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Get to know me and my journey in the world of web development.
        </p>
      </motion.div>
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <motion.div className="md:w-1/2" initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          margin: '-100px'
        }} transition={{
          duration: 0.5
        }}>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 relative inline-block">
            My Story
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400"></span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            I'm a passionate frontend developer with over 3 years of
            experience creating modern web applications. My journey began when
            I built my first pc in university, and I've been hooked on
            coding ever since.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            I specialize in React and modern JavaScript, with a strong focus
            on creating intuitive user interfaces and responsive designs that
            work across all devices. I'm constantly learning new technologies
            and techniques to stay at the forefront of web development.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            When I'm not coding, you can find me traveling in nature, listening
            music, reading tech blogs, or experimenting with new web
            technologies. I believe that a good developer is always learning,
            and I'm committed to growing my skills every day.
          </p>
          <motion.div className="flex flex-wrap gap-4 mt-6" variants={container} initial="hidden" whileInView="show" viewport={{
            once: true,
            margin: '-100px'
          }}>
            <motion.div variants={item} className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full">
              <Heart size={16} className="text-red-500" />
              <span className="text-gray-700 dark:text-gray-300">Traveling</span>
            </motion.div>
            <motion.div variants={item} className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full">
              <Music size={16} className="text-purple-500" />
              <span className="text-gray-700 dark:text-gray-300">Music</span>
            </motion.div>
            <motion.div variants={item} className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full">
              <Coffee size={16} className="text-brown-500" />
              <span className="text-gray-700 dark:text-gray-300">Coffee</span>
            </motion.div>
            <motion.div variants={item} className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full">
              <BookOpen size={16} className="text-green-500" />
              <span className="text-gray-700 dark:text-gray-300">
                Reading
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="md:w-1/2" variants={container} initial="hidden" whileInView="show" viewport={{
          once: true,
          margin: '-100px'
        }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-b-4 border-blue-600 dark:border-blue-500" variants={item} whileHover={{
              y: -10
            }}>
              <div className="bg-blue-600 dark:bg-blue-500 text-white p-3 rounded-lg inline-block mb-4">
                <Code size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                Clean Code
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                I write clean, maintainable code following best practices and
                industry standards.
              </p>
            </motion.div>
            <motion.div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-b-4 border-blue-600 dark:border-blue-500" variants={item} whileHover={{
              y: -10
            }}>
              <div className="bg-blue-600 dark:bg-blue-500 text-white p-3 rounded-lg inline-block mb-4">
                <Globe size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                Responsive Design
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                My websites work flawlessly on all devices, from mobile phones
                to large desktops.
              </p>
            </motion.div>
            <motion.div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-b-4 border-blue-600 dark:border-blue-500" variants={item} whileHover={{
              y: -10
            }}>
              <div className="bg-blue-600 dark:bg-blue-500 text-white p-3 rounded-lg inline-block mb-4">
                <Award size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                Modern Tech
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                I use the latest technologies and frameworks to build fast,
                efficient web applications.
              </p>
            </motion.div>
            <motion.div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-b-4 border-blue-600 dark:border-blue-500" variants={item} whileHover={{
              y: -10
            }}>
              <div className="bg-blue-600 dark:bg-blue-500 text-white p-3 rounded-lg inline-block mb-4">
                <Code size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                Problem Solver
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                I enjoy tackling complex problems and finding elegant
                solutions.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};