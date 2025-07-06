import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Gov from '../components/Gov'
import TeamMembers from '../components/TeamMembers'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import House from '../components/House'
import { Routes, Route, useLocation, BrowserRouter} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const App = () => {

  return (
    <div className='w-full overflow-hidden scroll-smooth snap-y snap-mandatory'>
      <div className='snap-center snap-always'>
        <Header/>
      </div>
      <motion.div className='snap-center snap-always border-b border-gray-500'
        initial={{opacity: 0, y:40}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 2}}>
          <About/>

      </motion.div>
      <motion.div className='border-b border-gray-500'
        initial={{opacity: 0, y:40}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 2}}>
        <Gov/>
      </motion.div>
      <motion.div className='border-b border-gray-500'
        initial={{opacity: 0, y:40}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 2}}>
        <House/>
      </motion.div>
      <motion.div className='border-b border-gray-500'
        initial={{opacity: 0, y:40}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 2}}>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center px-8 pt-16' id='Testimonials'>Meet the Team</h1>
        <TeamMembers/>
      </motion.div>
      <Footer/>
    </div>
  )
}

export default App
