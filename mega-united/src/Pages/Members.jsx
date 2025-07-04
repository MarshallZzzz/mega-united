import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import TeamMembers from '../components/TeamMembers'
import Profile from '../components/Profile'
import Footer from '../components/Footer'

const Members = () => {
  return (
    <div>
      <Navbar/>

      {/* Banner */}
      <div className='text-center w-full py-4 px-6 md:px20 lg:px-32 text-white bg-gray-600'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Our Team </h2>
      </div>

      {/* Profile -- add grid */}
      <Profile/>
      <Footer/>
    </div>
  )
}

export default Members
