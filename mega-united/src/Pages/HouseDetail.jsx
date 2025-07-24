import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import { housing, getHousingByTitle } from '../../public/housing';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { FiArrowUpRight } from 'react-icons/fi';



const HouseDetail = () => {


    const params = useParams();
    const t = params.title;
    const item = getHousingByTitle(t);
    const img = item.images;

    const [imageIndex, setImageIndex] = useState(0);
    const [showGallery, setShowGallery] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    //const handleShowGallery = () => setShowGallery(true);

    const showNextImg = () => {
        setImageIndex(imageIndex === img.length - 1 ? 0 : imageIndex + 1)
    }

    const showPrevImg = () => {
        setImageIndex(imageIndex === 0 ? img.length - 1 : imageIndex - 1)
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);


    // useEffect(() => {
    //     async function fetchData() {
    //         // if (!params) return;
    //         // console.log(params);
    //         // const response = await fetch(`http://localhost:3000/api/data/${params.id}`);
    //         const response = await fetch(`/housing.json`);
    //         const data = await response.json();
    //         setData(data);
    //         console.log(data);
    //         return () => window.removeEventListener("scroll", controlNavbar);
    //     }
    //     fetchData();

    // }, []);


    return (
        <div className='flex flex-col bg-black'>


            <div className={`relative min-h-screen mb-4 bg-fixed bg-cover bg-center flex 
            items-center w-full ${blur ? "bg-black" : ""}`}
                style={{
                    backgroundImage: `url(${item.thumbnail})`,
                    backgroundAttachment: 'fixed',
                    backgroundRepeat: 'no-repeat',
                }}
                id='Header'>

                <div className='absolute bottom-0 w-full flex flex-col justify-center items-start p-8'>
                    <h1 className='text-8xl text-white md:text-6xl lg:text-8xl dark:text-white'>{item.title}</h1>
                    <h2 className='tracking-wider text-white font-3xl lg:text-3xl'>{item.location}</h2>
                </div>
            </div>

            {/* Body */}
            <div className='w-full flex flex-col justify-center px-4'>

                <div className='flex flex-cols-2 items-start mt-10 text-gray-600 px-8 pb-8'>
                    <p className='text-white text-3xl flex flex-start items-center tracking-widest' style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sanserif' }}>{item.description}</p>
                    <div className="relative">
                        <div className={`fixed top-0 right-0 w-1/4 h-screen bg-gray-800 text-white rounded shadow-lg z-40 transform transition-transform duration-300
                                ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
                            <div className="absolute left-[-27px] top-1/2 -translate-y-1/2 w-32 h-16 bg-gray-800 rounded-sm">

                                <button className='flex flex-row gap-1 pl-1 pt-5' onClick={() => setMenuOpen(!menuOpen)}>
                                    <span className="block w-1 h-4 bg-white rounded"></span>
                                    <span className="block w-1 h-4 bg-white rounded"></span>
                                    <span className="block w-1 h-4 bg-white rounded"></span>
                                </button>
                            </div>
                            <div className='top-0 w-full h-1/7 justify-items-center'>

                                <h1 className='text-6xl pt-16 underline'>Overview</h1>
                            </div>
                            <div className='grid grid-cols-2 justify-items-center h-1/8'>
                                <h2 className='flex flex-col left-2 items-start text-2xl'>Year Built: <span className='text-base'>{item.yrbuilt}</span></h2>
                                <h2 className='flex flex-col left-2 items-start text-2xl'>Price: <span className='text-base'>{item.price}</span></h2>
                            </div>
                            <div className='grid grid-cols-2 justify-items-center h-1/8'>
                                <h2 className='flex flex-col left-2 items-start text-2xl'>Bed: <span className='text-base'>{item.bed}</span></h2>
                                <h2 className='flex flex-col left-2 items-start text-2xl'>Bath: <span className='text-base'>{item.bath}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 items-center justify-items-center text-center p-16'>
                    <h2 className='text-white'>Description</h2>
                    <img src={img[0]} className='rounded-lg max-h-200' />
                </div>
                <div className='grid grid-cols-2 items-center justify-items-center text-center p-16'>
                    <img src={img[1]} className='rounded-lg max-h-200' />
                    <h2 className='text-white'>Description</h2>
                </div>
                <div className='grid grid-cols-2 items-center justify-items-center text-center p-16'>
                    <h2 className='text-white'>Description</h2>
                    <img src={img[2]} className='rounded-lg max-h-200' />
                </div>

                {/* {img.map((imgSrc, i) => (
                    i % 2 == 0 ? (
                        <div className='grid grid-cols-2 items-center justify-items-center text-center p-16'>
                            <h2 className='text-white'>Description</h2>
                            <img key={i} src={imgSrc} alt={`house image ${i}`} className='rounded-lg max-h-200' />
                        </div>
                    )

                        :
                        <div className='grid grid-cols-2 justify-center justify-items-center items-center text-center p-16 rounded-lg'>
                            <img key={i} src={imgSrc} alt={`house image ${i}`} className='rounded-lg max-h-200' />
                            <h2 className='text-white'>Description</h2>
                        </div>
                ))} */}

                {!showGallery &&
                    <div className='relative flex w-full justify-center pt-16 bg-black'>

                        <button onClick={() => setShowGallery(true)} className='hover:opacity-80 justify-items-center'>
                            <div className="relative inline-block group">
                                <img src={item.images[0]} className="mx-auto block rounded-lg max-h-180" />
                                <span className="absolute inset-0 flex items-center justify-center Dbg-black bg-opacity-60 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                    View Gallery
                                </span>
                            </div>
                        </button>
                    </div>
                }


                {showGallery &&
                    <div className='relative flex w-full pt-16 bg-black'>

                        <button onClick={showPrevImg} className='absolute left-0 top-1/2 -translate-y-1/2 z-10'>
                            <FiArrowLeft color='white' size={32} />
                        </button>
                        <img src={item.images[imageIndex]} className='mx-auto block justify-items-center rounded-lg max-h-180' />
                        <button onClick={showNextImg} className='absolute right-0 top-1/2 -translate-y-1/2 z-10'>
                            <FiArrowRight color='white' size={32} />
                        </button>
                    </div>
                }


                <div className='w-full flex justify-items-center my-8'>

                    <Link to={`/Housing`} className="flex rounded bg-white px-9 py-4 text-xl text-black md:w-fit">
                        Back to Housing <FiArrowUpRight className="inline" />
                    </Link>
                </div>
            </div>
            <Navbar />
            <Footer />
        </div>
    )
}

export default HouseDetail