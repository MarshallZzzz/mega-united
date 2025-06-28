import React from 'react'

const Contact = () => {
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' style={{ backgroundColor: '#DABC94'}}
    id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact us</h1>
        
        <form className='max-w-2xl mx-auto text-gray-600 pt-8'>
        
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>
                    Your Name
                </div>

                <input type="text" name='Name' placeholder='Your Name' required/>
                
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                    Your Email
                    </div>
                <input type="email" name='Email' placeholder='Your Email' required/>
            </div>
        </form>
    </div>
  )
}

export default Contact
