import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjNav from '../components/ProjNav'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const milestones = [
    { year: 1999, event: "Company founded" },
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
        if (window.location.hash === "#header") {
            const el = document.getElementById("header");
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
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
        <div className='w-full overflow-hidden shadow-md bg-black'>

            <div className='min-h-screen bg-fixed bg-cover bg-center flex 
           w-full overflow-hidden'
                style={{
                    backgroundImage: 'url("/history/establishment.jpg")',
                    backgroundAttachment: 'fixed',
                    backgroundRepeat: 'no-repeat',
                }}
                id='header'>

                <div className='relative text-white w-full'>
                    <h2 className='absolute bottom-0 text-5xl sm:text-6xl md:text-6xl pl-16 pb-16' style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sanserif' }}>Our History</h2>
                </div>
            </div>

            {/* Navbar */}
            <div className={`fixed top-0 left-0 flex w-full z-50 text-sm py-6 px-6 justify-center items-center pt-10 ${isVisible ? "translate-y-0 transition-transform-colors duration-1000" : "-translate-y-full transition-transform-colors duration-1000"} 
                ${atTop ? "bg-transparent text-white" : "bg-white text-black"}`}>

                <ul className='fixed flex items-center text-sm gap-6 top-5'>
                    <Link to={"/"} className='h-full bg-tansparent items-center justify-center text-center font-bold cursor-pointer hover:underline underline-offset-3 decoration-3' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link>
                    <Link to={"/History"} className='h-full cursor-pointer font-bold hover:underline underline-offset-3 decoration-3' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>History</Link>
                    <Link to={"/Projects"} className='h-full cursor-pointer font-bold hover:underline underline-offset-3 decoration-3' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Projects</Link>
                    <Link to={"/Housing"} className='h-full cursor-pointer font-bold hover:underline underline-offset-3 decoration-3' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Housing</Link>

                </ul>

            </div>

            {/* Progress bar */}
            <div ref={barRef} className={`sticky ${isVisible ? 'top-16' : 'top-0'} w-screen flex flex-row items-center pointer-events-none overlay`}>
                {/* Horizontal thick bar */}
                <div className="sticky w-full h-10 bg-white flex flex-row items-center border border-black">
                    {/* Progress */}
                    <div
                        className="sticky h-full bg-[#e9dfd1] transition-all duration-150 ease-out"
                        style={{ width: `${scrollPercent}%` }}
                        zIndex={1}
                    />
                    {/* Milestones inside the bar */}
                    <div className="absolute w-full h-10 flex flex-row justify-between z-10 px-8">
                        {milestones.map((m, i) => (
                            <div key={m.year} className="flex flex-col items-center">
                                <div className="text-4xl text-bl">{m.year}</div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='w-full min-h-screen bg-[#e9dfd1] px-4 py-4'>
                <div className='grid grid-col'>

                    <div className='w-full h-full flex flex-col-2 justify-items-center pr-16'>
                        <div>
                            <h1 className='text-bold text-black text-[15rem] w-1/2 pl-8 text-end' id='#1999'> 1999</h1>
                            <p className='text-black' >
                                Mega United Corp., Ltd., a duly registered Guam Corporation was
                                established on May 19, 1999. It was formed to actively engage in
                                commercial and residential projects with general engineering, general
                                building categories and more than ten other specialty
                                construction fields.
                            </p>
                        </div>
                        <img src='/history/dad.jpg' className='rounded px-8 py-8 pr-8 max-w-250' />
                    </div>
                    <div className='flex flex-col-3 gap-4 py-4 pr-16'>
                        <SmallProjectCard
                            title={2020}
                            imgUrl={"/history/establishment.jpg"}
                            description="Sample" />
                        <SmallProjectCard
                            title={2020}
                            imgUrl={"/history/establishment.jpg"}
                            description="Sample" />
                        <SmallProjectCard
                            title={2020}
                            imgUrl={"/history/establishment.jpg"}
                            description="Sample" />
                    </div>
                    <div className='w-full h-full flex flex-col-2'>
                        <img src='/history/three.jpg' className='rounded-lg max-w-250' />
                        <div className='pr-8 items-end'>
                            <h1 className='text-bold text-black text-[15rem] w-1/2 pl-4' id='#1999'> 2001 </h1>
                            <h2> First major milestone</h2>
                        </div>
                    </div>
                    <div className='flex flex-col-3 gap-4 py-4 pr-16'>
                        <SmallProjectCard
                            title={2020}
                            imgUrl={"/history/establishment.jpg"}
                            description="Sample" />
                        <SmallProjectCard
                            title={2020}
                            imgUrl={"/history/establishment.jpg"}
                            description="Sample" />
                        <SmallProjectCard
                            title={2020}
                            imgUrl={"/history/establishment.jpg"}
                            description="Sample" />
                    </div>
                    <div className='w-full h-full flex flex-col-2 justify-items-center'>
                        <h1 className='text-bold text-black text-[15rem] w-1/2 pl-8' id='#1999'> 2002 </h1>
                        <div>
                            <h2> Company was established</h2>
                            <img src='/history/three.jpg' className='rounded px-8 py-8 pr-8 max-w-250' />
                        </div>
                    </div>
                    <div className='flex flex-col-3 gap-4 py-4 pr-16'>
                        <SmallProjectCard
                            title={2020}
                            imgUrl={"/history/establishment.jpg"}
                            description="Sample" />
                        <SmallProjectCard
                            title={2020}
                            imgUrl={"/history/establishment.jpg"}
                            description="Sample" />
                        <SmallProjectCard
                            title={2020}
                            imgUrl={"/history/establishment.jpg"}
                            description="Sample" />
                    </div>
                    <div className='w-full h-full flex flex-col-2 items-center justify-items-center'>
                        <div className='pt-8 pl-8'>
                            <h2> First major milestone</h2>
                            <img src='/history/okay.jpg' className='rounded-lg max-h-150' />
                        </div>
                        <h1 className='text-bold text-black text-[15rem] w-1/2 pl-8' id='#1999'> 2010 </h1>
                    </div>
                </div>

            </div>

            <Footer />
        </div>

    );
};

const SmallProjectCard = ({ title, imgUrl, description }) => {
    return (
        <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow overflow-hidden mb-8 flex flex-col items-center">
            <img
                src={imgUrl}
                alt={title}
                className="w-full object-cover"
                style={{ maxHeight: "200px" }}
            />
            <div className="w-full p-4">
                <h2 className="text-2xl font-bold text-center mb-2">{title}</h2>
                <p className="text-gray-700 text-center">{description}</p>

            </div>
        </div>
    );
};


export default Company
