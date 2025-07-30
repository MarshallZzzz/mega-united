import React, { useEffect, useState } from 'react'
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
    <div className={`fixed top-0 left-0 flex w-full z-50 text-sm py-6 px-6 justify-center items-center pt-10 ${isVisible ? "translate-y-0 transition-transform-colors duration-1000" : "-translate-y-full transition-transform-colors duration-1000"} 
    ${atTop ? "bg-transparent text-white" : "bg-gray-900 text-white"}`}>

      <ul className='fixed flex items-center text-sm gap-6 top-5'>
        <Link to={"/"} className='h-full bg-tansparent items-center justify-center text-center font-bold cursor-pointer hover:underline underline-offset-3 decoration-3' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link>
        <Link to={"/History"} className='h-full cursor-pointer font-bold hover:underline underline-offset-3 decoration-3' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>History</Link>
        <Link to={"/Projects#header"} className='h-full cursor-pointer font-bold hover:underline underline-offset-3 decoration-3' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Projects</Link>
        <Link to={"/Housing"} className='h-full cursor-pointer font-bold hover:underline underline-offset-3 decoration-3' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Housing</Link>

      </ul>

    </div>
  )
}

export default Navbar


