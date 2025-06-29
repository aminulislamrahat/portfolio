import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from "motion/react"
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const {
    isDarkMode,
    toggleTheme
  } = useTheme();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Education',
    href: '#education'
  }, {
    name: 'Experience',
    href: '#experience'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    type: 'spring',
    stiffness: 100
  }} className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <motion.a href="#home" className="text-2xl font-bold text-blue-600 dark:text-blue-400" whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }}>
        AIR
      </motion.a>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <ul className="flex space-x-8">
          {navItems.map(item => <motion.li key={item.name} whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.95
          }}>
            <a href={item.href} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group">
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </motion.li>)}
        </ul>
        {/* <motion.button onClick={toggleTheme} className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300" whileHover={{
          rotate: 15,
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} aria-label="Toggle theme">
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button> */}
      </nav>
      {/* Mobile Navigation Toggle */}
      <div className="md:hidden flex items-center space-x-4">
        {/* <motion.button onClick={toggleTheme} className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300" whileHover={{
          rotate: 15,
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} aria-label="Toggle theme">
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </motion.button> */}
        <motion.button className="text-gray-600 dark:text-gray-300 focus:outline-none" onClick={toggleMenu} whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </motion.button>
      </div>
    </div>
    {/* Mobile Navigation Menu */}
    {isMenuOpen && <motion.div className="md:hidden bg-white dark:bg-gray-800 shadow-lg" initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }} exit={{
      opacity: 0,
      height: 0
    }} transition={{
      duration: 0.3
    }}>
      <nav className="container mx-auto px-4 py-4">
        <ul className="space-y-4">
          {navItems.map(item => <motion.li key={item.name} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.2
          }}>
            <a href={item.href} className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" onClick={toggleMenu}>
              {item.name}
            </a>
          </motion.li>)}
        </ul>
      </nav>
    </motion.div>}
  </motion.header>;
};