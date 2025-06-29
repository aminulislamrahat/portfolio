import React, { useEffect } from 'react';
import { motion } from "motion/react"
import { X, ExternalLink, Github } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
export const ProjectModal = ({
  project,
  onClose
}) => {
  if (!project) return null;
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80" initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} onClick={onClose}>
    <motion.div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-2xl" initial={{
      scale: 0.9,
      opacity: 0
    }} animate={{
      scale: 1,
      opacity: 1
    }} exit={{
      scale: 0.9,
      opacity: 0
    }} transition={{
      type: "spring",
      damping: 15
    }} onClick={e => e.stopPropagation()}>
      <button className="absolute top-4 right-4 z-10 p-1 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 transition-colors" onClick={onClose}>
        <X size={24} />
      </button>
      <div className="h-64 sm:h-80">
        <Swiper modules={[Pagination, Navigation, Autoplay]} pagination={{
          clickable: true
        }} navigation autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }} className="h-full w-full">
          {project.images.map((image, i) => <SwiperSlide key={i}>
            <img src={image} alt={`${project.title} - slide ${i + 1}`} className="w-full h-full object-cover" />
          </SwiperSlide>)}
        </Swiper>
      </div>
      <div className="p-6 overflow-y-auto max-h-[calc(90vh-20rem)]">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {project.title}
        </h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs rounded-md">
            {tech}
          </span>)}
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Project Overview
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {project.fullDescription}
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Challenges Faced
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {project.challenges}
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Future Improvements
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {project.futureImprovements}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
            <ExternalLink size={16} className="mr-2" />
            Visit Live Site
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
            <Github size={16} className="mr-2" />
            View Source Code
          </a>
        </div>
      </div>
    </motion.div>
  </motion.div>;
};