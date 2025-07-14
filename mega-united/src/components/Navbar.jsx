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
  
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = 'auto'
    }

    //window.addEventListener("scroll", controlNavbar)

    return () => {
      //window.removeEventListener("scroll", controlNavbar);

      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <div className='sticky flex justify-center items-center h-full pt-10'>
      {/* <div className='sticky left-0 flex justify-center items-center pt-10 z-10'> */}

        
        <ul className='fixed flex items-center top-5 gap-6 text-sm py-5 px-6  bg-white/50 backdrop-blur-lg rounded-lg'>
          <Link to={"/"} className='h-full bg-tansparent items-center justify-center text-center font-bold cursor-pointer hover:underline underline-offset-3 decoration-3' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link>
          <Link to={"/About"} className='h-full cursor-pointer font-bold hover:underline underline-offset-3 decoration-3' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About</Link>
          <Link to={"/Projects"} className='h-full cursor-pointer font-bold hover:underline underline-offset-3 decoration-3' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Projects</Link>
          <Link to={"/Housing"} className='h-full cursor-pointer font-bold hover:underline underline-offset-3 decoration-3' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Housing</Link>
        
        </ul>


        {/* <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" /> */}
      {/* </div> */}

      {/* Contact Us Submission Sheet */}
      {/* 
      mobile menu
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
      </div> */}
    </div>
  )
}

export default Navbar


