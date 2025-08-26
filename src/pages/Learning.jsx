import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

export default function Certificates() {
    const certificates = [
        {
            title: "Software Testing Foundation: Testing Preparation",
            org: "Foundation",
            link: "https://drive.google.com/file/d/1gJGZ3FoEsMoinbHouTP86xFvBmlwkZc5/view",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Postman API Test Path",
            org: "Postman",
        
            link: "https://drive.google.com/file/d/1NVZio-9DfQVw28x3BS7CfvEzLmJ0uMDb/view",
            color: "from-yellow-500 to-orange-500"
        },
        {
            title: "Programming Foundations: Software Testing/QA",
            org: "LinkedIn Learning",

            link: "https://drive.google.com/file/d/1sRrZwQeDuxa5kBHMv3A0YTbWttqlghlV/view",
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Java (HackerRank)",
            org: "HackerRank",
    
            link: "https://www.hackerrank.com/certificates/d666e7e1c949",
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "Angular",
            org: "SoloLearn",

            link: "https://drive.google.com/file/d/10iJ7lay-jjNlbEcWHnySrpoHInp29qu_/view",
            color: "from-pink-500 to-red-500"
        },
        {
            title: "JavaScript",
            org: "SoloLearn",
        
            link: "https://drive.google.com/file/d/1NXlpp7koIWJemVxNW3J0DTtp_KGTQyuy/view",
            color: "from-indigo-500 to-blue-700"
        },
        {
            title: "AWS Cloud Essential Practitioner",
            org: "Amazon Web Services",
    
            link: "https://drive.google.com/file/d/1U9IiyMnqqWFoHfezw8BkLM2AcyvGNTMG/view",
            color: "from-orange-500 to-yellow-600"
        },
        {
            title: "Azure Security Concepts",
            org: "Microsoft",
            link: "https://drive.google.com/file/d/1eZzJVTx69DqxY_uEmXvA7JYAx6YOWBlS/view",
            color: "from-teal-500 to-cyan-600"
        },
        {
            title: "Azure Data Fundamentals",
            org: "Microsoft",

            link: "https://drive.google.com/file/d/1dokUV363PTnP1Uk3fpEn4KKpPFZ3IFjK/view",
            color: "from-purple-500 to-indigo-600"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-6 mb-16"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                    My <span className="text-green-400">Certificates</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Here are some of the certifications I’ve earned while growing my skills.
                </p>
            </motion.div>

            {/* Certificates Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 gap-8"
            >
                {certificates.map((cert) => (
                    <motion.div
                        key={cert.title}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="relative overflow-hidden rounded-2xl p-8 border border-gray-700 bg-gray-800/50 backdrop-blur-sm"
                    >
                        {/* Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-10 blur-xl`} />

                        <div className="relative z-10 space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} text-white`}>
                                    <FaAward className="text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                                    <p className="text-gray-400 text-sm">{cert.org}</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-400">Issued {cert.date}</span>
                                {cert.link && (
                                    <motion.a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        className="flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-medium"
                                    >
                                        View <FaExternalLinkAlt className="text-xs" />
                                    </motion.a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
