import React from 'react';
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

import { AiOutlineGithub } from 'react-icons/ai';
import Reveal from './Reveal';
import { motion } from 'framer-motion';

const projects = [
  {
    img: project1,
    title: "Project #1",
    description: "UI for frontend development using React.",
    links: { site: "#", github: "#" },
  },
  {
    img: project2,
    title: "Project #2",
    description: "A portfolio to showcase our files.",
    links: { site: "#", github: "#" },
  },
  {
    img: project3,
    title: "Project #3",
    description:
      "A responsive e-learning platform built with Next.js, where teachers can manage their courses, set them as paid or free, track student progress, upload multimedia content, and interact with students through quizzes, discussions, and real-time feedback.",
    links: { site: "#", github: "#" },
  },
  {
    img: project4,
    title: "Project #4",
    description:
      "A telemedicine app for booking appointments, assigning pharmacies and hospitals, managing clinic schedules, and receiving treatment.",
    links: { site: "#", github: "#" },
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="max-w-6xl mx-auto px-6 md:px-8 py-20">
      <h2 className="text-4xl font-bold text-white mb-12 text-center border-b-2 border-gray-700 inline-block pb-2">
        Portfolio
      </h2>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <Reveal key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                } items-center gap-10`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-xl"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>

              {/* Description */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="w-full md:w-1/2 space-y-4"
              >
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed">{project.description}</p>

                <div className="flex gap-4 mt-4">
                  <a
                    href={project.links.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition duration-300 font-medium"
                  >
                    View Site
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition duration-300 text-xl"
                  >
                    <AiOutlineGithub />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
