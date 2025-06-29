import React from 'react';
import { Github, Linkedin, Mail, ArrowDownIcon, FileText, Facebook, Twitter } from 'lucide-react';
import { motion } from "motion/react"
import profile from "../assets/profile.png"
export const HeroSection = () => {
  const handleResumeDownload = () => {
    // In a real application, this would download the resume
    alert('Resume download functionality would be implemented here!');
  };
  return <section id="home" className="relative w-full min-h-screen pt-24 pb-16 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950">
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(5)].map((_, i) => <motion.div key={i} className="absolute rounded-full bg-blue-500/10 dark:bg-blue-500/5" style={{
        width: Math.random() * 300 + 100,
        height: Math.random() * 300 + 100,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`
      }} animate={{
        x: [0, Math.random() * 100 - 50],
        y: [0, Math.random() * 100 - 50]
      }} transition={{
        repeat: Infinity,
        repeatType: 'reverse',
        duration: Math.random() * 10 + 10
      }} />)}
    </div>
    <div className="container relative mx-auto px-4 pt-16 md:pt-20 flex flex-col md:flex-row items-center justify-between">
      <motion.div className="md:w-1/2 mb-10 md:mb-0" initial={{
        opacity: 0,
        x: -50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5
      }}>
        <motion.span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300" initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2,
          duration: 0.5
        }}>
          Welcome to my portfolio
        </motion.span>
        <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.3,
          duration: 0.5
        }}>
          <span className="text-gray-800 dark:text-gray-100">Hi, I'm </span>
          <span className="text-blue-600 dark:text-blue-400 relative">
            Aminul Islam Rahat
            <motion.span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400" initial={{
              width: 0
            }} animate={{
              width: '100%'
            }} transition={{
              delay: 0.8,
              duration: 0.5
            }}></motion.span>
          </span>
        </motion.h1>
        <motion.h2 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-400 mb-6" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.4,
          duration: 0.5
        }}>
          Frontend Developer
        </motion.h2>
        <motion.p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.5,
          duration: 0.5
        }}>
          I create beautiful, responsive websites with modern technologies
          that help businesses achieve their goals and stand out in the
          digital world.
        </motion.p>
        <motion.div className="flex space-x-4 mb-8" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.5
        }}>
          <motion.a href="https://github.com/aminulislamrahat" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110" whileHover={{
            y: -5
          }} whileTap={{
            scale: 0.9
          }}>
            <Github size={20} />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/md-aminul-islam-rahat-803437219/" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110" whileHover={{
            y: -5
          }} whileTap={{
            scale: 0.9
          }}>
            <Linkedin size={20} />
          </motion.a>
          {/* <motion.a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-all duration-300 hover:scale-110" whileHover={{
            y: -5
          }} whileTap={{
            scale: 0.9
          }}>
            <Twitter size={20} />
          </motion.a> */}
          <motion.a href="https://www.facebook.com/aminulislam.rahat.3" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110" whileHover={{
            y: -5
          }} whileTap={{
            scale: 0.9
          }}>
            <Facebook size={20} />
          </motion.a>
          <motion.a href="mailto:aminulislambhuiyanrahat@gmail.com" className="p-2 bg-red-600 text-white rounded-full hover:bg-red-500 transition-all duration-300 hover:scale-110" whileHover={{
            y: -5
          }} whileTap={{
            scale: 0.9
          }}>
            <Mail size={20} />
          </motion.a>
        </motion.div>
        <motion.div className="flex flex-wrap gap-4" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.7,
          duration: 0.5
        }}>
          <motion.a
            href="https://aminul-islam-rahat-portfolio.surge.sh/Resume_of_Md_Aminul_Islam_Bhuiyan.pdf"
            // href={`${import.meta.env.BASE_URL}Resume_of_Md_Aminul_Islam_Bhuiyan.pdf`} 

            target="_blank" className="px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 flex items-center gap-2 group" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
            <FileText size={18} className="group-hover:animate-bounce" />
            Download Resume
          </motion.a>
          <motion.a href="#contact" className="px-6 py-3 bg-indigo-600 dark:bg-indigo-700 text-white rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all duration-300" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
            Contact Me
          </motion.a>
          <motion.a href="#projects" className="px-6 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
            View My Work
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div className="md:w-1/2 flex justify-center" initial={{
        opacity: 0,
        x: 50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }}>
        <div className="relative">
          <motion.div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl" whileHover={{
            scale: 1.05
          }} initial={{
            y: 20
          }} animate={{
            y: [0, -10, 0]
          }} transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse'
            }
          }}>
            <img src={profile} alt="John Doe" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-700 p-3 rounded-full shadow-lg" initial={{
            scale: 0
          }} animate={{
            scale: 1
          }} transition={{
            delay: 0.5,
            type: 'spring'
          }}>
            <div className="bg-blue-600 dark:bg-blue-500 text-white p-2 rounded-full">
              <code className="text-sm font-bold">{'<coder/>'}</code>
            </div>
          </motion.div>
          {/* Decorative elements */}
          <motion.div className="absolute -top-6 -left-6 w-12 h-12 bg-yellow-400 dark:bg-yellow-500 rounded-lg rotate-12" initial={{
            opacity: 0,
            scale: 0
          }} animate={{
            opacity: 0.8,
            scale: 1,
            rotate: 12
          }} transition={{
            delay: 0.6,
            duration: 0.5
          }} />
          <motion.div className="absolute -bottom-8 left-10 w-8 h-8 bg-purple-500 dark:bg-purple-600 rounded-full" initial={{
            opacity: 0,
            scale: 0
          }} animate={{
            opacity: 0.8,
            scale: 1
          }} transition={{
            delay: 0.7,
            duration: 0.5
          }} />
          <motion.div className="absolute top-10 -right-6 w-10 h-10 bg-green-400 dark:bg-green-500 rounded-lg rotate-45" initial={{
            opacity: 0,
            scale: 0
          }} animate={{
            opacity: 0.8,
            scale: 1,
            rotate: 45
          }} transition={{
            delay: 0.8,
            duration: 0.5
          }} />
        </div>
      </motion.div>
    </div>
    <motion.div className="container mx-auto px-4 flex justify-center mt-16" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 1,
      duration: 0.5
    }}>
      <motion.a href="#about" className="animate-bounce bg-white dark:bg-gray-700 p-2 rounded-full shadow-md text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors" whileHover={{
        scale: 1.2
      }} whileTap={{
        scale: 0.9
      }}>
        <ArrowDownIcon size={24} />
      </motion.a>
    </motion.div>
  </section>;
};