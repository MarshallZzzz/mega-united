import React from 'react'
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps"
"use Client";
// import apiKey from meta.env.VITE_GOOGLE_MAPS_API_KEY;

const Footer = () => {
  return (
    <div className=' bg-gray-900 w-full' id='Footer'>
      <div className=' text-gray-400 py-2 mt-2 text-center items-center'>
        Copyright 2024 &copy; Marshall Zhang
      </div>
    </div>
  )
}

export default Footer
