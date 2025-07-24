import React from 'react'
import{ APIProvider, Map, AdvancedMarker, Pin, InfoWindow} from "@vis.gl/react-google-maps"
"use Client";
// import apiKey from meta.env.VITE_GOOGLE_MAPS_API_KEY;

const Footer = () => {
  return (
    <div className=' bg-gray-900 w-full' id='Footer'>
      {/* <div className='container flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3'>
            <img src={assets.logoWhite} alt="" />
        </div>
        <div className='w-full md:w-1/5'>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul className='flex flex-col text-gray-400'>
                <a href="#Header" className='hover:text-white'>Home</a>
                <a href="#About" className='hover:text-white'>About</a>
                <a href="#Contact" className='hover:text-white'>Contact</a>
                <a href="#Header" className='hover:text-white'>Privacy Policy</a>
            </ul>
        </div>

      </div> */}
      <div className=' text-gray-400 py-2 mt-2 text-center items-center'>
        Copyright 2024 &copy; Marshall Zhang
      </div>
    </div>
  )
}

export default Footer
