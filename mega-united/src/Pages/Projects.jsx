import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import ProjNav from '../components/ProjNav'
import headerImg from '../assets/GuamBeach.png'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'



const Projects = () => {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }, []);

  return (
     
      <div className='w-full not-odd:overflow-hidden shadow-md bg-black'>
        
        <div className='min-h-screen mb-4 bg-fixed bg-cover bg-center flex 
           w-full overflow-hidden' 
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2t5c2NyYXBlcnxlbnwwfHwwfHx8MA%3D%3D)`,
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
          }} 
          id='Header'>

          <div className='relative text-white w-full'>
            <h2 className='absolute bottom-0 text-5xl sm:text-6xl md:text-6xl pl-16 pb-16' style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sanserif'}}>Government Projects</h2>

          </div>
          
        </div>
        <div>
          <ProjNav/>

        </div>
        <Navbar/>
        <Footer/>
      </div>
    
  )
}

export default Projects
