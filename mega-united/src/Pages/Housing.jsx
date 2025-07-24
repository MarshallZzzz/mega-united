import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import headerImg from '../assets/guamBeach.png'
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer'
import { housing } from '../../public/housing';


const Housing = () => {
    const params = useParams();
    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {
        async function fetchData() {

            const response = await fetch(`/housing.json`);
            const data = await response.json();
            setProjectsData(data);
        }
        fetchData();

        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <div>
            <Navbar />

            <div className='w-full overflow-hidden shadow-md bg-black'>

                <div className='min-h-screen mb-4 bg-fixed bg-cover bg-center flex 
                items-center w-full overflow-hidden'
                    style={{
                        backgroundImage: `url(${headerImg})`,
                        backgroundAttachment: 'fixed',
                        backgroundRepeat: 'no-repeat',
                    }}
                    id='Header'>
                    <div className='text-white w-full'>
                        <h2 className='absolute bottom-0 text-5xl sm:text-6xl md:text-6xl pl-16 pb-16' style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sanserif'}}>Housing</h2>

                    </div>

                </div>

                <div className='overflow-hidden bg-black' id='ProjNav'>
                    {/* mx-auto py-4 pt-20 px-6 md:px-20 lg:ps-32 my-20 */}
                    {/* Project slider continer */}
                    <div className='overflow-hidden w-full h-auto bg-black'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w divide-x-8 divide-y-8 divide-black'>
                            {housing.map((item, index) => (
                                <div key={index}>
                                    <Link to={`/Housing/${item.title}`} className='group'>
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

            <Footer />
            </div>
        </div>
    )
}

export default Housing
