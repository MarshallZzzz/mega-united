import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import ProjNav from '../components/ProjNav'
import headerImg from '../assets/GuamBeach.png'
import Footer from '../components/Footer'

const Housing = () => {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
      }, []);
    
  return (
    
    <div>
        <div className='w-full overflow-hidden shadow-md'>
            <div className='min-h-screen mb-4 bg-fixed bg-cover bg-center flex 
                items-center w-full overflow-hidden' 
                style={{
                backgroundImage: `url(${headerImg})`,
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                }} 
                id='Header'>

                <Navbar/>
                <div className='container text-center mx-auto py-4 px-6 md:px20 lg:px-32 text-white'>
                    <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Housing Available</h2>

                </div>
                
            </div>
            <div>
                <ProjNav/>
                <Footer/>
            </div>
        </div>

    </div>
  )
}

export default Housing
