import React from 'react'

const Contact = () => {
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' style={{ backgroundColor: '#DABC94'}}
    id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact us</h1>

        <form className='max-w-2xl mx-auto text-gray-600 pt-8'>
        
            <div className='flex flex-wrap gap-4 mb-4'>
                <div className='w-full md:w-1/2 text-left'>Your Name
                </div>

                <input className='w-full bg-white border border-gray-300 rounded py-3 px-4 mt-2'
                type="text" name='Name' placeholder='Your Name' required/>
                
                <div className='w-full md:w-1/2 text-left'>Your Email
                    </div>
                <input className='w-full bg-white border border-gray-300 rounded py-3 px-4 mt-2'
                type="email" name='Email' placeholder='Your Email' required/>
            </div>

            <div className='my-6 text-left'>
                Message
                <textarea className='w-full border border-gray-300 bg-white rounded py-3 px-4 mt-2 h-48 resize-none'
                name="Message" placeholder='Send us a message' required></textarea>

            </div>

            <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>
                Send Messsage
            </button>
        </form>


    </div>
  )
}

export default Contact
