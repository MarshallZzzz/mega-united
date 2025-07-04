import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProjNav = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardsToShow(projectsData.length);
            } else {
                setCardsToShow(1)
            }
        };
        updateCardsToShow();

        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);


    }, [])

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }
    const prevProject = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 :
            prevIndex - 1)
    }

    return (
        <div className='overflow-hidden px-16 pt-8 pb-8' id='ProjNav'>
        {/* mx-auto py-4 pt-20 px-6 md:px-20 lg:ps-32 my-20 */}
            {/* Project slider continer */}
            <div className='overflow-hidden w-full h-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-7 w-full'>
                    {projectsData.map((project, index) =>(
                        <div key={index}>
                            <button className='transition-transform duration-300 bg-cover ease-in-out hover:scale-105'>
                                <img src={project.image} alt={project.title} className='max-w-lg h-auto w-full' />
                                <div className='relative left-0 right-0 bottom-5 flex justify-center'>
                                    <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                        <h2 className='text-xl font-semibold text-gray-800'>
                                            {project.title}
                                        </h2>
                                        <p className='text-gray-500 text-sm'>
                                            {project.price} <span></span> {project.location}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        </div>
                    ))}
                </div>

            </div>


        </div>
    )
}

export default ProjNav

{/* Slider buttons */ }


{/* <div className='flex place-content-center mb-8'>
            <button onClick={prevProject} 
            className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
                <img src={assets.left_arrow} alt="Previous"/>
            </button>
            <button onClick={nextProject} 
            className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Project'>
                <img src={assets.right_arrow} alt="Next"/>
            </button>
        </div> */}
