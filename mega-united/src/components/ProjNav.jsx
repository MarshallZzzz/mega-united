import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../assets/assets';

const ProjNav = () => {
    const params = useParams();
    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            // if(!params.id) return;
            // console.log(params.id);
            const response = await fetch(`http://localhost:3000/api/data`);
            const data = await response.json();
            // console.log(data);
            setProjectsData(data);
        }
        fetchData();

    }, []);
    // console.log(params);

    // const [currentIndex, setCurrentIndex] = useState(0);
    // const [cardsToShow, setCardsToShow] = useState(1);

    // useEffect(() => {
    //     const updateCardsToShow = () => {
    //         if (window.innerWidth >= 1024) {
    //             setCardsToShow(projectsData.length);
    //         } else {
    //             setCardsToShow(1)
    //         }
    //     };
    //     updateCardsToShow();

    //     window.addEventListener('resize', updateCardsToShow);
    //     return () => window.removeEventListener('resize', updateCardsToShow);


    // }, []);

    return (
        <motion.div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
        >
            <div className='overflow-hidden bg-black' id='ProjNav'>
                {/* mx-auto py-4 pt-20 px-6 md:px-20 lg:ps-32 my-20 */}
                {/* Project slider continer */}
                <div className='overflow-hidden w-full h-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w divide-x-8 divide-y-8 divide-black'>
                        {projectsData.map((item, index) => (
                            <div key={index}>
                                <Link to={`/Projects/${item._id}`} className='group'>
                                    <div className='transition-transform duration-300 bg-cover hover:scale-101'>
                                        <img src={item.thumbnail} alt={item.title} className='max-w max-h-150 h-auto w-full' />
                                        <div className='relative left-0 right-0 bottom-10 flex justify-center'>

                                            <h2 className='absolute left-0 items-start pl-8 text-xl text-white dark:text-white'>
                                                {item.title}
                                            </h2>
                                            {/* <p className='text-gray-500 text-sm'>
                                                {item.price}
                                            </p> */}
                                            {/* <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                            </div> */}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </motion.div>

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
