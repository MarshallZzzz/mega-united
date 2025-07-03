import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import ProjNav from '../components/ProjNav'
import Gov from '../components/Gov'


const Projects = () => {
  return (
    <div className='w-full overflow-hidden'>
        <Header />
        <Navbar/>
        
        <ProjNav/>
    </div>
  )
}

export default Projects
