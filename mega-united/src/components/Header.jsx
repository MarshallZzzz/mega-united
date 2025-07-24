import React from 'react'
import Navbar from './Navbar'
import { motion, useScroll, useTransform } from 'framer-motion'

const transition = { duration: 1, ease: [.25, .1, .25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(10%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const Header = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
    // transition={{staggerChildren:0.04 }}
    >
      <div className='min-h-screen mb-4 bg-fixed bg-cover bg-center flex 
        items-center w-full overflow-hidden transition-all'
        style={{
          backgroundImage: 'url("/cover.jpeg")',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%'
        }}
        id='Header'>
        {/* <div className='absolute left-0 top-0 h-full w-1/2 pointer-events-none z-0 bg-black bg-opacity-100'></div> */}
        {/* <div className='bg-transparent pt-10'>
                <Navbar/>
              </div> */}

        <div className='absolute top-0 left-8 items-start text-white'>
          {/* <h1 className='font-bold text-white text-left text-7xl flex items-center min-h-screen pb-80'>Mega United Corp. LTD</h1> */}
          <motion.img src="/AnimationIntro.gif" alt="Logo" className='w-150 h-150 flex items-center'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
          {/* <video src="/AnimationIntro.mp4" className='w-150 h-150 flex items-center pt-16' autoPlay/> */}
          <h1 className="text-5xl leading-snug pl-50 pt-16">
            Our{" "}
            <span className="relative">
              Portfolio
              <svg
                viewBox="0 0 286 73"
                fill="none"
                className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{
                    duration: 1.25,
                    ease: "easeInOut",
                  }}
                  d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                  stroke="#FACC15"
                  strokeWidth="3"
                />
              </svg>
            </span>{" "}
          </h1>
          {/* <div className='space-x-6 mt-16'>
            <a href="#About" className='border border-white hover:bg-blue-600 px-8 py-3 rounded'>About</a>
            <a href="#Projects" className='border border-white hover:bg-blue-600 px-8 py-3 rounded'>Projects</a>
            <a href="#Housing" className='border border-white hover:bg-blue-600 px-8 py-3 rounded'>Housing</a>
            <a href="#Testimonials" className='border border-white hover:bg-blue-600 px-8 py-3 rounded'>Team</a>
        </div> */}
        </div>
      </div>
    </motion.div>

  )
}

const DrawCircleText = () => {
  return (
    <div className="grid place-content-center px-4 py-24 text-white">
      <h1 className="max-w-2xl text-center text-5xl leading-snug">
        Our{" "}
        <span className="relative">
          Portfolio
          <svg
            viewBox="0 0 286 73"
            fill="none"
            className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="#FACC15"
              strokeWidth="3"
            />
          </svg>
        </span>{" "}
      </h1>
    </div>
  );
};

export default Header
