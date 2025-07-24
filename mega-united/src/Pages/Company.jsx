import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'
import ProjNav from '../components/ProjNav'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const milestones = [
    { year: 1990, event: "Company founded" },
    { year: 2000, event: "Expanded internationally" },
    { year: 2010, event: "Launched flagship product" },
    { year: 2020, event: "Reached 1M customers" },
    { year: 2025, event: "Vision for the future" },
];

const Company = () => {
    const [scrollPercent, setScrollPercent] = useState(0);
    const barRef = useRef(null);
    const [originalTop, setOriginalTop] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
    const [atTop, setAtTop] = useState(true);

    useEffect(() => {

        if (barRef.current && originalTop === null) {
            setOriginalTop(barRef.current.getBoundingClientRect().top + window.scrollY);
        }
        function handleScroll() {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;

            let effectiveScroll = 0;
            if (originalTop !== null && scrollTop > originalTop) {
                effectiveScroll = scrollTop - originalTop;
            }

            const progressRange = docHeight - originalTop;

            const scrolled = progressRange > 0 ? (effectiveScroll / progressRange) * 100 : 0;
            setScrollPercent(Math.max(0, Math.min(scrolled, 100)));
            if (!barRef.current || originalTop === null) return;
            // const barTop = barRef.current.getBoundingClientRect().top;
            if (scrollTop >= originalTop) {
                barRef.current.style.position = "fixed";
                barRef.current.style.top = isVisible ? "" : "";
                barRef.current.style.left = "0";
                barRef.current.style.right = "0";
                barRef.current.style.zIndex = "999";
            } else {
                barRef.current.style.position = "";
                barRef.current.style.top = "";
                barRef.current.style.left = "";
                barRef.current.style.right = "";
                barRef.current.style.zIndex = "";
            }
        }
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
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("scroll", controlNavbar);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [barRef, originalTop]);

    return (


        <div className='w-full not-odd:overflow-hidden shadow-md bg-black'>

            <div className='min-h-screen bg-fixed bg-cover bg-center flex 
           w-full overflow-hidden'
                style={{
                    backgroundImage: 'url("/history/establishment.jpg")',
                    backgroundAttachment: 'fixed',
                    backgroundRepeat: 'no-repeat',
                }}
                id='Header'>

            </div>
            <div className='relative text-white w-full'>
                <h2 className='absolute bottom-0 text-5xl sm:text-6xl md:text-6xl pl-16 pb-16' style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sanserif' }}>Our History</h2>
            </div>
            {/* Navbar */}
            <div className={`fixed top-0 left-0 flex w-full z-50 text-sm py-6 px-6 justify-center items-center pt-10 ${isVisible ? "translate-y-0 transition-transform-colors duration-1000" : "-translate-y-full transition-transform-colors duration-1000"} 
                ${atTop ? "bg-transparent text-black" : "bg-gray-800 text-white"}`}>

                <ul className='fixed flex items-center text-sm gap-6 top-5'>
                    <Link to={"/"} className='h-full bg-tansparent items-center justify-center text-center font-bold cursor-pointer hover:underline underline-offset-3 decoration-3' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link>
                    <Link to={"/About"} className='h-full cursor-pointer font-bold hover:underline underline-offset-3 decoration-3' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About</Link>
                    <Link to={"/Projects"} className='h-full cursor-pointer font-bold hover:underline underline-offset-3 decoration-3' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Projects</Link>
                    <Link to={"/Housing"} className='h-full cursor-pointer font-bold hover:underline underline-offset-3 decoration-3' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Housing</Link>

                </ul>

            </div>
            {/* Progress bar */}
            <div ref={barRef} className={`sticky ${isVisible ? 'top-16' : 'top-0'} w-screen flex flex-row items-center pointer-events-none `}>
                {/* Horizontal thick bar */}
                <div className="sticky w-full h-10 bg-white flex flex-row items-center border border-black">
                    {/* Progress */}
                    <div
                        className="sticky h-full bg-blue-500 transition-all duration-150 ease-out"
                        style={{ width: `${scrollPercent}%` }}
                        zIndex={1}
                    />
                    {/* Milestones inside the bar */}
                    <div className="absolute w-full h-10 flex flex-row justify-between z-10 px-8">
                        {milestones.map((m, i) => (
                            <div key={m.year} className="flex flex-col items-center">
                                <div className="text-4xl text-bl">{m.year}</div>
                                {/* <div className="text-xs text-gray-600 bg-white rounded px-2 shadow">{m.event}</div> */}

                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <About />
            <ProjNav />
            <Footer />
        </div>

    )
}

export default Company
