import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Gov from '../components/Gov'
import TeamMembers from '../components/TeamMembers'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import House from '../components/House'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

const App = () => {

  return (
    <div className='w-full overflow-hidden scroll-smooth snap-y snap-mandatory'>
      <div className='snap-center snap-always'>
        <Header/>
      </div>
      <div className='snap-center snap-always border-b border-gray-500'>
        <About/>
      </div>
      <div className='snap-center snap-always border-b border-gray-500'>
        <Gov/>
      </div>
      <div className='snap-center snap-always border-b border-gray-500'>
        <House/>
      </div>
      <div className='snap-center snap-always border-b border-gray-500'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center px-8 pt-16' id='Testimonials'>Meet the Team</h1>
        <TeamMembers/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
