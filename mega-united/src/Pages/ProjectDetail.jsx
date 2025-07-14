import React, { useEffect, useState } from 'react'
import { motion, useTransform, useScroll } from "framer-motion";
import { useParams } from 'react-router-dom'
import { projectsData } from '../assets/assets'
import Navbar from '../components/Navbar'
import { assets } from '../assets/assets'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';



const ProjectDetail = () => {

  const params = useParams();
  console.log(params);
  const [projectsData, setProjectsData] = useState([]);
  const [openInfo, setOpenInfo] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    async function fetchData() {
      // if (!params) return;
      // console.log(params);
      const response = await fetch(`http://localhost:3000/api/data/${params.id}`);
      const data = await response.json();
      console.log("Here is data" + data);
      setProjectsData(data);
    }
    fetchData();

  }, [params.id]);


  return (
    <div className='flex flex-col'>

      {/* {projectsData.map((item, index) => (
        <div key={index}> */}
      <div className='relative min-h-screen mb-4 bg-fixed bg-cover bg-center flex 
            items-center w-full'
        style={{
          backgroundImage: `url(${projectsData.thumbnail})`,
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }}
        id='Header'>
          
        <div className='absolute bottom-0 w-full flex flex-col justify-center items-start p-8'>
          <h1 className='text-8xl text-white md:text-6xl lg:text-8xl dark:text-white'>{projectsData.title}</h1>
          <h2 className='tracking-wider text-white font-3xl lg:text-3xl'>{projectsData.location}</h2>
      
        </div>
          

        {/* <div className='relative ml-[100px] bg-white/30 backdrop:blur'>
          <button className="absolute w-[50px] h-[150px] inset-0 bg-white bg-opacity-40 rounded-lg border-gray-300 ease-in-out hover:scale-105" id='heroButton'
            onClick={() => {
              if (openInfo) {
                setOpenInfo(false);
              } else {
                setOpenInfo(true);
              }
            }}>
            <h1 className='text-2xl'>::</h1>
          </button>
          {
            openInfo &&
            <div className="absolute w-[500px] h-[150px] rounded-lg inset-0 bg-white bg-opacity-40 z-50 transition-transform duration-1000 translate-x-0 text-black"
              style={{ transform: openInfo ? "translateX(0) duration-1000" : "translateX(100%) duration-1000" }}>
                <button className='absolute top-0 right-0 w-12 h-12 text-3xl'
                onClick={() => setOpenInfo(false)}>&times;</button>
              <div className='flex flex-col justify-center items-center h-full text-center py-2'>
                <h2 className='font-bold text-xs tracking-wider text-blue-600 uppercase leading-[1.3] mb-[15px] font-2xl'>{projectsData.location}</h2>
                <h1 className='mb-4 px-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-3xl lg:text-4xl dark:text-white'>{projectsData.title}</h1>
                <p className='font-bold'>Completed on {projectsData.completionD}</p>
              </div>

            </div>
          }
        </div> */}
      </div>
      <div className='container w-full px-16 pl-16'>
        
        <div className='pl-16 pt-16'>
          <p className='text-black text-3xl flex items-center tracking-widest' style={{fontFamily: '"Helvetica Neue", Helvetica, Arial, sanserif'}}>{projectsData.description}</p>
        </div>
        {/* <div className='container w-1/2 h-auto mx-auto pt-24 mb-16' syle={{ maxWidth: '400px', margin: '0 auto' }}>
                <ImageGallery items={images} /> 
              </div> */}
        <div className='w-full flex justify-start my-8 py-16'>

          <Link to={`/Projects`} className="w-full flex justify-start rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
            Back to Projects <FiArrowUpRight className="inline" />
          </Link>
        </div>
      </div>
      <Navbar />
      <Footer />
      {/* </div>
      ))}; */}

    </div>
  )
}


export default ProjectDetail
