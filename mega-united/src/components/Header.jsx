import React from 'react'
import Navbar from './Navbar'
import headerImg from '../assets/guamBeach.png';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-fixed bg-cover bg-center flex 
        items-center w-full snap-start' 
        style={{
          backgroundImage: `url(${headerImg})`,
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }} 
        id='Header'>

      <Navbar/>
      <div className='container text-center py-4 px-6 md:px20 lg:px-32 text-white'>
        {/* <h1 className='font-bold text-white text-left text-7xl flex items-center min-h-screen pb-80'>Mega United Corp. LTD</h1> */}
        <img src={assets.logoWhite} alt="Logo" className='w-150 h-150 flex items-center'/>
        {/* <div className='space-x-6 mt-16'>
            <a href="#About" className='border border-white hover:bg-blue-600 px-8 py-3 rounded'>About</a>
            <a href="#Projects" className='border border-white hover:bg-blue-600 px-8 py-3 rounded'>Projects</a>
            <a href="#Housing" className='border border-white hover:bg-blue-600 px-8 py-3 rounded'>Housing</a>
            <a href="#Testimonials" className='border border-white hover:bg-blue-600 px-8 py-3 rounded'>Team</a>
        </div> */}
      </div>
    </div>
  )
}

export default Header
