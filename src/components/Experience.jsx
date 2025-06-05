import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
  {
    work: 'Front-End Development',
    UsedTech: 'HTML, CSS, React',
    description:
      'Developed responsive and visually engaging user interfaces using HTML, CSS, and React. Focused on cross-device compatibility and intuitive user experiences.',
  },
  {
    work: 'Social Media Hosting Platform',
    UsedTech: 'Next.js, CSS, MongoDB',
    description:
      'Contributed to the development of a scalable social media hosting platform using Next.js for the backend and MongoDB for data management. Implemented key features for user interaction and content sharing.',
  },
  {
    work: 'Health Management System',
    UsedTech: 'Next.js, Tailwind CSS, MySQL, Stripe, Prisma',
    description:
      'Built a responsive health management system enabling remote appointment booking, video consultations, secure payments via Stripe, and efficient data handling using Prisma and MySQL.',
  },
  {
    work: 'E-Learning Platform',
    UsedTech: 'Next.js, Tailwind CSS, MySQL, Stripe, Mux, Prisma',
    description:
      'Developed a fully responsive e-learning platform enabling course management, content monetization, video delivery with Mux, and real-time student progress tracking.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const hoverVariants = {
  hover: {
    scale: 1.03,
    backgroundColor: 'rgba(168, 85, 247, 0.15)',
    transition: { duration: 0.3 },
  },
}

const textFadeVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const Experience = () => {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl text-center font-bold text-gray-200 mb-12">
        Experience
      </h1>

      <motion.div
        className="space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              variants={{ ...itemVariants, ...hoverVariants }}
              className="border border-purple-600 bg-purple-800/10 p-6 rounded-2xl shadow-md transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-100 mb-1">
                {experience.work}
              </h2>
              <motion.p
                className="text-sm text-purple-300 italic mb-2"
                variants={textFadeVariants}
              >
                {experience.UsedTech}
              </motion.p>
              <p className="text-gray-300">{experience.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  )
}

export default Experience
