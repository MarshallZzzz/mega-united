import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Gov from '../components/Gov'
import TeamMembers from '../components/TeamMembers'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='w-full overflow-hidden scroll-smooth'>
      <Header/>
      <About/>
      <Gov/>
      <TeamMembers/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
