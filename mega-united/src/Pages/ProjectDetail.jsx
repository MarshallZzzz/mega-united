import React, { useEffect, useState } from 'react'
import { motion, useTransform, useScroll } from "framer-motion";
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { project, getProjectByTitle } from '../assets/project.js';



const ProjectDetail = () => {

  const params = useParams();
  const t = params.title;
  console.log(t);
  const item = getProjectByTitle(t);

  useEffect(() => {
      window.scrollTo({top: 0, behavior: "smooth"});
    }, []);

  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  //   async function fetchData() {
  //     // if (!params) return;
  //     // console.log(params);

  //     const title = project.find(p => p.title === params.title);
  //     console.log("Here is data " + title);
  //     setProjectsData(title);
  //   }
  //   fetchData();

  // }, []);


  return (
    <div className='flex flex-col'>
      <div className='relative min-h-screen mb-4 bg-fixed bg-cover bg-center flex 
            items-center w-full'
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
      <div className='container w-full px-16 pl-16'>

        <div className='pl-16 pt-16'>
          <p className='text-black text-3xl flex items-center tracking-widest' style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sanserif' }}>{item.description}</p>
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
    </div>

  )
}


export default ProjectDetail
