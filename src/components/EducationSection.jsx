import React from 'react';
import { motion } from "motion/react"
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
export const EducationSection = () => {
  const education = [{
    degree: "Bachelor of Science in Computer Science Engineering",
    institution: "American International University Bangladesh, Dhaka",
    location: "Dhaka, Bangladesh",
    period: "2017 - 2022",
    description: "Graduated with honors. Focused on web development and user interface design. Participated in some hackathons and coding competitions."
  }];
  return <section id="education" className="py-20 bg-white dark:bg-gray-800">
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
          Education
        </h2>
        <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          My academic background and qualifications
        </p>
      </motion.div>
      <div className="max-w-4xl mx-auto">
        <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400 space-y-10 ml-6">
          {education.map((item, index) => <motion.div key={index} className="relative" initial={{
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
              <GraduationCap size={24} />
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ml-2">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                {item.degree}
              </h3>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {item.institution}
              </h4>
              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                <MapPin size={16} className="mr-2" />
                <span>{item.location}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                <Calendar size={16} className="mr-2" />
                <span>{item.period}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          </motion.div>)}
        </div>
      </div>
    </div>
  </section>;
};