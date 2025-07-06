import React, { useEffect, useState } from 'react'
import Contact from './Contact'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [openContact, setOpenContact] = useState(false);


  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      setAtTop(window.scrollY === 0);
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = 'auto'
    }

    window.addEventListener("scroll", controlNavbar)

    return () => {
      window.removeEventListener("scroll", controlNavbar);

      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <div className={`fixed top-0 left-0 w-full shadow-md z-50 
  ${isVisible ? "translate-y-0 transition-transform-colors duration-700" : "-translate-y-full transition-transform-colors duration-700"}
  ${atTop ? "bg-transparent" : "bg-gray-800"}`}>
      <div className='container mx-auto h-full flex justify-between items-center md:px-20 lg:px-32 bg-transparent pt-8 pb-8'>
        {/* <img src={assets.logoWhite} alt="Logo" className='w-16 h-auto' /> */}
        <div className='hidden w-full align-items-center justify-center text-center md:flex gap-7 text-white'>
            <Link to={"/"} className='bg-tansparent items-center justify-center text-center font-bold cursor-pointer hover:text-gray-400' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link>
          <Link to={"/About"} className='cursor-pointer font-bold hover:text-gray-400' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About</Link>
          <Link to={"/Projects"} className='cursor-pointer font-bold hover:text-gray-400' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Projects</Link>
          <Link to={"/Housing"} className='cursor-pointer font-bold hover:text-gray-400' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Housing</Link>
          {/* <Link to={"/Team"} className='cursor-pointer font-bold hover:text-gray-400' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Team</Link> */}
        </div>
        {/* <button className='hidden md:block bg-white px-3 py-2 w-1/8 rounded-full' onClick={() => setOpenContact(true)}>Contact Us</button>
        {
          openContact &&
          <div className="fixed top-0 right-0 h-full w-full sm:w-[700px] z-50 transition-transform duration-300 translate-x-0"
            style={{ transform: openContact ? "translateX(0)" : "translateX(100%)" }}>
            <button className="absolute top-4 right-4 text-2xl text-white" onClick={() => setOpenContact(false)}>&times;</button>
            <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden bg-gray-800' id='Contact'>
              <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center text-white'>Contact us</h1>
              <form className='max-w-2xl mx-auto text-gray-600 pt-8'>
                <div className='flex flex-wrap gap-4 mb-4'>
                  <div className='w-full md:w-1/2 text-left text-white' >Your Name</div>

                  <input className='w-full bg-white border border-gray-300 rounded py-3 px-4 mt-2'
                    type="text" name='Name' placeholder='Your Name' required />

                  <div className='w-full md:w-1/2 text-left text-white'>Your Email
                  </div>
                  <input className='w-full bg-white border border-gray-300 rounded py-3 px-4 mt-2'
                    type="email" name='Email' placeholder='Your Email' required />
                </div>

                <div className='my-6 text-left text-white'>
                  Message
                  <textarea className='w-full border border-gray-300 bg-white rounded py-3 px-4 mt-2 h-48 resize-none'
                    name="Message" placeholder='What can we help you with?' required></textarea>
                </div>

                <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded' onClick={() => openContact(false)}>
                  Send Messsage
                </button>
              </form>
            </div>
          </div>
        } */}

        <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
      </div>

      {/* Contact Us Submission Sheet */}

      {/* mobile menu */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 
        overflow-hidden bg-white transition-all`}>
        <div className='flex justify-between p-6 cursor-pointer'>
          <img src={assets.logo} alt="Logo" className='w-16 h-auto' />
          <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg
        font-medium'>
          <a onClick={() => setShowMobileMenu(false)} href="#Header" className='px-4 py2 rounded-full inline-block'>Home</a>
          <a onClick={() => setShowMobileMenu(false)} href="#About" className='px-4 py2 rounded-full inline-block'>About</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Projects" className='px-4 py2 rounded-full inline-block'>Projects</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Housing" className='px-4 py2 rounded-full inline-block'>Housing</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Contacts" className='px-4 py2 rounded-full inline-block'>Contact Us</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
