import React from 'react'
import { FaGithubSquare, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center p-6 md:p-10 gap-8 md:gap-0 mt-12 bg-gray-950 rounded-xl shadow-xl">
      {/* Profile Card */}
      <div className="space-y-4 p-6 bg-gray-900 rounded-2xl shadow-md w-fit text-center">
        <h3 className="text-3xl font-bold text-white">
          Daniel<span className="text-indigo-400"> D</span>
        </h3>

        <div className="flex justify-center gap-6 text-4xl text-gray-400">
          <a
            href="#"
            className="hover:text-white transition duration-300"
            aria-label="GitHub"
          >
            <FaGithubSquare />
          </a>
          <a
            href="#"
            className="hover:text-pink-500 transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-center text-gray-400 text-sm md:text-base tracking-wide font-light">
        © 2024 <span className="font-medium text-white">Daniel D.</span> All rights reserved.
      </p>

    </div>

  )
}

export default Footer