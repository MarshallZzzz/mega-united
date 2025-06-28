import React, {useEffect, useState} from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center
    container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'
    id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>MEGA: <span
        className='underline underline-offset-4 decoration-1 under font-light'>Certifications</span></h1>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg'/>
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>20 + </p>
                        <p>Government projects</p>    
                    </div>    
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>Ghura</p>
                        <p>Contractor</p>    
                    </div>    
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>220 +</p>
                        <p>General Housing</p>    
                    </div>    
                </div>
                <p className='my-10 max-w-lg'>This is a dummy text in place of the
                    actual description of the project. This will include more details 
                    of the project, the project scope, and what we tried to accomplish.
                </p>
                <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn more</button>
            </div>
        </div>
    </div>

  )
}

export default About
