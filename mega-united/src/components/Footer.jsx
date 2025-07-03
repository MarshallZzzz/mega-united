import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:ox-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img src={assets.logoWhite} alt="" />
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul className='flex flex-col gap-2 text-gray-400'>
                <a href="#Header" className='hover:text-white'>Home</a>
                <a href="#About" className='hover:text-white'>About</a>
                <a href="#Contact" className='hover:text-white'>Contact</a>
                <a href="#Header" className='hover:text-white'>Privacy Policy</a>
            </ul>
        </div>
        <div className='flex flex-col w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Contact Us Directly</h3>
                <p className='text-gray-400'>Phone: +16716893293</p>
                <p className='text-gray-400'>Fax: +16716863828</p>
                <p className='text-gray-400'>Email: zhangwmh@netpci.com</p>
        </div>

      </div>
      <div className='border-t border-gray-700 text-gray-400 py-4 mt-10 text-center'>
        Copyright 2024 &copy; Marshall Zhang
      </div>
    </div>
  )
}

export default Footer
