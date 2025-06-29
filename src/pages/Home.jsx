import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '../contexts/ThemeContext';
import { Header } from "../components/Header";
import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { SkillsSection } from "../components/SkillsSection";
import { EducationSection } from "../components/EducationSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { ProjectModal } from "../components/ProjectModal";
import { Footer } from "../components/Footer";
import { AnimatePresence } from 'framer-motion';


export const Home = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            });
        });
    }, []);
    return (
        <ThemeProvider>
            <div className="min-h-screen transition-colors duration-300 bg-gradient-to-br from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100">
                <Header />
                <main>
                    <HeroSection />
                    <AboutSection />
                    <SkillsSection />
                    <EducationSection />
                    <ExperienceSection />
                    <ProjectsSection setSelectedProject={setSelectedProject} />
                    <ContactSection />
                </main>
                <Footer />
                <AnimatePresence>
                    {selectedProject && (
                        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                    )}
                </AnimatePresence>
            </div>
        </ThemeProvider>
    )
}
