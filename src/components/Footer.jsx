import React from 'react';
import { ArrowUpIcon } from 'lucide-react';
import { motion } from "motion/react"
export const Footer = () => {
  return <footer className="bg-gray-800 dark:bg-gray-900 text-white py-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <motion.div className="mb-6 md:mb-0" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
          <a href="#home" className="text-2xl font-bold text-blue-400 dark:text-blue-300">
            AIR
          </a>
          <p className="mt-2 text-gray-400 dark:text-gray-500">
            Creating beautiful web experiences.
          </p>
        </motion.div>
        <motion.div className="flex flex-col items-center md:items-end" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
          <motion.a href="#home" className="bg-blue-600 dark:bg-blue-700 text-white p-3 rounded-full mb-4 hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors" whileHover={{
            y: -5
          }} whileTap={{
            scale: 0.9
          }} aria-label="Back to top">
            <ArrowUpIcon size={20} />
          </motion.a>
          <p className="text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Aminul Islam Rahat. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  </footer>;
};