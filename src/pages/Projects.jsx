import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

// Import all your local images from assets
import bushub from "../assets/bushub.png";
import chatbot from "../assets/chatbot.jpeg";
import library from "../assets/library.png";
import workaid from "../assets/workaid.png";
import calculator from "../assets/calculator.png";

const Projects = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, -100]);

    const projects = [
        {
            id: 1,
            title: "BusHubLK",
            description: "Digital platform designed to improve and modernize public transport services provided by the Sri Lanka Transport Board. Connects passengers, drivers, and all levels of SLTB management.",
            image: bushub,   // 👈 now local image
            tech: ["React", "Node.js", "PostgreSQL", "JWT", "ReactNative", "Tailwind"],
            link: "https://github.com/MurshidAkram/BusHubLK",
        },
        {
            id: 2,
            title: "chatbot automation testing - Learning mini project",
            description: "Developed automation scripts using Selenium + Java to validate chatbot responses. This is a mini learning project to gain hands-on experience in automation testing.",
            image: chatbot,   // 👈 now local image
            tech: ["Java", "Selenium Web Driver", "Chrome Driver", "Maven", "TestNG"],
            link: "https://github.com/Nirukshiya-Loganathan/AI_Chatbot_QA",
        },
        {
            id: 3,
            title: "Moonlit-Devs (Library Management System)",
            description: "A Java-based desktop application for managing library operations, including user registration, book cataloging, borrowing, and returns. Implemented DAO layer with unit testing using JUnit 5.",
            image: library,   // 👈 now local image
            tech: ["Java", "JDBC", "MySQL", "JUnit 5", "Maven"],
            link: "https://github.com/Nirukshiya-Loganathan/Moonlit-Devs-UNIT-tESTING",
        },
        {
            id: 4,
            title: "WorkAid",
            description: "Web-based, mobile-responsive service management platform designed to streamline client and worker interactions for service bookings. Connects clients, workers, and admin/finance staff to manage services, payments, and schedules efficiently.",
            image: workaid,   // 👈 now local image
            tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "Figma"],
            link: "https://github.com/anjananadee23/WorkAid",
        },
        {
            id: 5,
            title: "Online calculator automation testing - Learning Mini project",
            description: "Automated functional test cases for a demo online calculator, validating core operations (addition, subtraction, multiplication, division) using Playwright.",
            image: calculator,   // 👈 now local image
            tech: ["Playwright", "Typescript", "NPM", "Playwright Test Runner"],
            link: "https://github.com/Nirukshiya-Loganathan/playwright-calculator-tests",
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <motion.div
            className="max-w-6xl mx-auto px-4"
            style={{ y }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center space-y-6 mb-16"
            >
                <motion.h1
                    className="text-4xl md:text-6xl font-bold text-white"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    My Projects
                </motion.h1>
                <motion.p
                    className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Here are some of the projects I've worked on. Each one represents a unique challenge
                    and learning opportunity that has shaped my development journey.
                </motion.p>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                        className="h-full flex"
                    >
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            tech={project.tech}
                            link={project.link}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
                className="text-center mt-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.h3
                    className="text-3xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Interested in working together?
                </motion.h3>
                <motion.p
                    className="text-gray-400 mb-8 text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Let's discuss your project and see how I can help bring your ideas to life.
                </motion.p>
                <motion.a
                    href="/contact"
                    className="inline-block bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.a>
            </motion.div>
        </motion.div>
    );
};

export default Projects;
