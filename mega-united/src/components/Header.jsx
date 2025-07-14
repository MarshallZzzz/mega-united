import React from 'react'
import Navbar from './Navbar'
import headerImg from '../assets/guamBeach.png';
import { assets } from '../assets/assets';
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
          backgroundImage: `url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2t5c2NyYXBlcnxlbnwwfHwwfHx8MA%3D%3D)`,
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }}
        id='Header'>
        {/* <div className='absolute left-0 top-0 h-full w-1/2 pointer-events-none z-0 bg-black bg-opacity-100'></div> */}
        {/* <div className='bg-transparent pt-10'>
                <Navbar/>
              </div> */}

        <div className='container text-center py-4 px-6 md:px-20 lg:px-32 text-white'>
          {/* <h1 className='font-bold text-white text-left text-7xl flex items-center min-h-screen pb-80'>Mega United Corp. LTD</h1> */}
          <motion.img src={assets.logoWhite} alt="Logo" className='w-150 h-150 flex items-center pt-16' 
            initial={{opacity: 0, y:-50}}
            animate={{ opacity: 1, y: 0}}
            transition={{duration: 1}}
          />
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

export default Header
