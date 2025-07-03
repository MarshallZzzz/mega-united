import React from 'react'
import Navbar from './Navbar'
import headerImg from '../assets/guamBeach.png';

const Header = () => {
  return (
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
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Mega United Corporation LTD</h2>
        <div className='space-x-6 mt-16'>
            <a href="#Projects" className='border border-white hover:bg-blue-600 px-8 py-3 rounded'>Projects</a>
            <a href="#Contact" className='border border-white hover:bg-blue-600 px-8 py-3 rounded'>Contact Us</a>
        </div>
      </div>
    </div>
  )
}

export default Header
