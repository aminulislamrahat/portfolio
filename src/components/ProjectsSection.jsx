import React, { useState, Component } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { motion } from "motion/react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
export const ProjectsSection = ({
  setSelectedProject
}) => {
  const [filter, setFilter] = useState('all');
  const projects = [{
    id: 1,
    title: 'React Marketplace',
    category: 'public',
    images: ['https://img001.prntscr.com/file/img001/JJ58wXvOTQSSGihs4Vil5g.png', 'https://img001.prntscr.com/file/img001/J5E_flq3SRCe4fheh1vdTw.png', 'https://img001.prntscr.com/file/img001/PhXcQn0VSSS8-oQ6OrAfXg.png'],
    description: 'DoTask is a modern freelance task marketplace platform.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Daisy ui'],
    liveLink: 'https://freelance-task-marketpla-db095.web.app',
    githubLink: 'https://github.com/aminulislamrahat/freelance-task-marketplace',
    fullDescription: 'DoTask is a modern freelance task marketplace platform that connects job seekers with task providers. Users can post tasks, bid on tasks, and collaborate based on skills, budget, and deadlines.',
    challenges: 'The main challenge was implementing multiple theme while maintaining fast performance. I solved this by using Daisy Ui and optimizing render cycles.',
    futureImprovements: 'Planning to add AI-powered Task searching, more customizable dashboard widgets, and integration with additional payment processors.'
  }, {
    id: 2,
    title: 'Zafenity',
    category: 'private',
    images: ['https://img001.prntscr.com/file/img001/lWRPEXynTsOfJ8Lf52gRYg.png', 'https://img001.prntscr.com/file/img001/g8slViQcTtS-W-64IQy4vg.png', 'https://img001.prntscr.com/file/img001/_j4xcZdeRP6HIwWoNNZAQA.png'],
    description: 'An American home service marketplace',
    technologies: ['Next', 'MySql', 'Firebase', 'CSS3'],
    liveLink: 'https://zafenity.com/',
    githubLink: 'https://gitlab.com/aminulislamrahat',
    fullDescription: 'Zafenity is an online platform that generates unique opportunities for the homeowners. Homeowners always need vendors or contractors around the year to fix issues of their homes. Getting an appropriate vendor or contractor requires a lot of consideration and time. Zafenity is trying its best to share homeowners concerns.',
    challenges: 'Implementing use location in map and merge with usa lat,lng, state. State wise user services',
    futureImprovements: 'Zafenity is currently working with plumbers, carpenters, roof repairers and general contractors.'
  }, {
    id: 3,
    title: 'Social Development Events',
    category: 'public',
    images: ['https://img001.prntscr.com/file/img001/L5JW0YrvR9Sr4jnz2MuupQ.png', 'https://img001.prntscr.com/file/img001/vDl-0AAnQCq51zIdIrTS7g.png', 'https://img001.prntscr.com/file/img001/6H4epUNPTaq21-wHsKUoTQ.png'],
    description: 'CommunityAct is a public service event platform.',
    technologies: ['React', 'Tailwindcss', 'API Authentication', 'Daisy Ui'],
    liveLink: 'https://social-development-events.web.app/',
    githubLink: 'https://github.com/aminulislamrahat/social-development-events',
    fullDescription: 'CommunityAct is a public service event platform that connects socially conscious individuals with community-driven initiatives. Users can explore upcoming events, create new ones, and join causes that matter — like cleanups, tree plantations, donations, and workshops.',
    challenges: 'JWT authentication in private api and controlling via firebase token',
    futureImprovements: 'Planning to add some extra features near future'
  },
    // {
    //   id: 4,
    //   title: 'Weather App',
    //   category: 'private',
    //   images: ['https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', 'https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80'],
    //   description: 'Real-time weather forecasts with beautiful visualizations and location-based updates.',
    //   technologies: ['JavaScript', 'Weather API', 'HTML5', 'CSS3'],
    //   liveLink: 'https://example.com/weather-app',
    //   githubLink: 'https://github.com/weather-app',
    //   fullDescription: 'This weather application provides real-time forecasts, radar maps, and weather alerts. It uses geolocation to provide local weather and allows users to save multiple locations.',
    //   challenges: 'Creating smooth animations for weather transitions while maintaining performance across devices was difficult. I implemented optimized rendering techniques to solve this issue.',
    //   futureImprovements: 'Planning to add historical weather data comparison, more detailed radar maps, and extreme weather notifications.'
    // }, {
    //   id: 5,
    //   title: 'Task Management System',
    //   category: 'private',
    //   images: ['https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80', 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80', 'https://images.unsplash.com/photo-1611224885990-2a7d122405d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'],
    //   description: 'Kanban-style task management with drag-and-drop functionality and team collaboration.',
    //   technologies: ['React', 'TypeScript', 'React DnD', 'Firebase'],
    //   liveLink: 'https://example.com/task-management',
    //   githubLink: 'https://github.com/task-management',
    //   fullDescription: 'This task management system uses a Kanban board interface to help teams visualize and manage their workflow. Features include drag-and-drop task management, team collaboration tools, and deadline tracking.',
    //   challenges: 'Implementing real-time updates across multiple users while maintaining a smooth drag-and-drop experience required careful state management and optimization.',
    //   futureImprovements: 'Planning to add time tracking, automated task assignments based on workload, and integration with popular calendar applications.'
    // }, {
    //   id: 6,
    //   title: 'Portfolio Website',
    //   category: 'private',
    //   images: ['https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1955&q=80'],
    //   description: 'Professional portfolio website with smooth animations and responsive design.',
    //   technologies: ['JavaScript', 'HTML5', 'CSS3', 'GSAP'],
    //   liveLink: 'https://example.com/portfolio',
    //   githubLink: 'https://github.com/portfolio',
    //   fullDescription: 'This professional portfolio website showcases my work with smooth animations and interactive elements. It features a responsive design that works across all devices and screen sizes.',
    //   challenges: 'Creating performant animations that work consistently across browsers required extensive testing and optimization. I used GSAP for reliable animation sequencing.',
    //   futureImprovements: 'Planning to add a blog section, more interactive project showcases, and a custom content management system.'
    // }
  ];
  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);
  return <section id="projects" className="py-20 bg-white dark:bg-gray-800">
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
          My Projects
        </h2>
        <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Check out some of my recent work. These projects showcase my skills
          and experience.
        </p>
      </motion.div>
      <motion.div className="flex justify-center mb-10" initial={{
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
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
          <motion.button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-md transition-all duration-300 ${filter === 'all' ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
            All
          </motion.button>
          <motion.button onClick={() => setFilter('public')} className={`px-4 py-2 rounded-md transition-all duration-300 ${filter === 'react' ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
            Public
          </motion.button>
          <motion.button onClick={() => setFilter('private')} className={`px-4 py-2 rounded-md transition-all duration-300 ${filter === 'javascript' ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
            Private
          </motion.button>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => <motion.div key={project.id} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg border border-gray-100 dark:border-gray-600 transition-all duration-300 hover:shadow-xl" initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: '-50px'
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} whileHover={{
          y: -10
        }}>
          <div className="h-48 overflow-hidden">
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
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs rounded-md">
                {tech}
              </span>)}
            </div>
            <div className="flex justify-between items-center">
              <div className="flex space-x-3">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                  <ExternalLink size={16} className="mr-1" />
                  <span>Live</span>
                </a>
                {project?.category == "public" ? <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                  <Github size={16} className="mr-1" />
                  <span>Code</span>
                </a> : null}

              </div>
              <motion.button onClick={() => setSelectedProject(project)} className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors" whileHover={{
                x: 5
              }}>
                Details
                <ChevronRight size={16} className="ml-1" />
              </motion.button>
            </div>
          </div>
        </motion.div>)}
      </div>
    </div>
  </section>;
};