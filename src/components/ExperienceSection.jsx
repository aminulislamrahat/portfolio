import React from 'react';
import { motion } from "motion/react"
import { Briefcase, Calendar, MapPin } from 'lucide-react';
export const ExperienceSection = () => {
  const experiences = [{
    position: "Frontend Developer",
    company: "Sweet Itech Limited",
    location: "Dhaka, Bangladesh",
    period: "2023 - 2025",
    description: "Developed responsive web applications for various clients using React, Redux, and modern CSS frameworks. Collaborated with UX designers to implement pixel-perfect interfaces.",
    achievements: ["Contribute 20+ client websites with 100% on-time delivery", "Implemented accessibility improvements across all projects", "Created reusable component library used across multiple projects"]
  }, {
    position: "Web Development and Manual Testing Intern",
    company: "Sweet Itech Limited",
    location: "Dhaka, Bangladesh",
    period: "2022 - 2022",
    description: "Assisted in developing and maintaining company website and web applications using JavaScript, HTML, CSS, and React. Participated in manual testing of software products to identify bugs and ensure functionality across different devices and browsers.",
    achievements: [
      "Redesigned company landing page resulting in 25% increase in lead generation",
      "Created interactive data visualization components for internal dashboards",
      "Developed internal tool for content management",
      "Executed manual test cases for key web modules and documented detailed bug reports",
      "Identified and helped resolve 30+ UI/UX issues during cross-browser testing",
      "Collaborated with developers to validate bug fixes and ensure product quality before deployment"
    ]
  }];
  return <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.5
      }}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Professional Experience
        </h2>
        <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          My professional journey and work experience
        </p>
      </motion.div>
      <div className="max-w-4xl mx-auto">
        <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400 space-y-10 ml-6">
          {experiences.map((job, index) => <motion.div key={index} className="relative" initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.5,
            delay: index * 0.2
          }}>
            <div className="absolute -left-14 bg-blue-600 dark:bg-blue-500 text-white p-2 rounded-full">
              <Briefcase size={24} />
            </div>
            <motion.div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ml-2" whileHover={{
              x: 5
            }}>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                {job.position}
              </h3>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {job.company}
              </h4>
              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                <MapPin size={16} className="mr-2" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                <Calendar size={16} className="mr-2" />
                <span>{job.period}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {job.description}
              </p>
              <div>
                <h5 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">Key Achievements:</h5>
                <ul className="list-disc pl-5 space-y-1">
                  {job.achievements.map((achievement, i) => <li key={i} className="text-gray-600 dark:text-gray-300">{achievement}</li>)}
                </ul>
              </div>
            </motion.div>
          </motion.div>)}
        </div>
      </div>
    </div>
  </section>;
};