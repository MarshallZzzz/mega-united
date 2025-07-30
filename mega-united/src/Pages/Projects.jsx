import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ProjNav from '../components/ProjNav'
import Footer from '../components/Footer'





const Projects = () => {
  useEffect(() => {
    // window.scrollTo({top: 0, behavior: "smooth"});
    if (window.location.hash === "#header") {
      const el = document.getElementById("header");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (

    <div className='w-full not-odd:overflow-hidden shadow-md bg-black'>

      <div className='min-h-screen mb-4 bg-fixed bg-cover bg-center flex 
           w-full overflow-hidden'
        style={{
          backgroundImage: 'url("/FleeMarket/Thumbnail.JPG")',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }}
        id='header'>

        <div className='relative text-white w-full'>
          <h2 className='absolute bottom-0 text-5xl sm:text-6xl md:text-6xl pl-16 pb-16' style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sanserif' }}>Government Projects</h2>

        </div>

      </div>
      <div>
        <ProjNav />

      </div>
      <Navbar />
      <Footer />
    </div>

  )
}

export default Projects
