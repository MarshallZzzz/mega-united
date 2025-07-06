import React from 'react'
import { useParams } from 'react-router-dom'
import { projectsData } from '../assets/assets'
import Navbar from '../components/Navbar'
import { assets } from '../assets/assets'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
import Footer from '../components/Footer'

import collage_img1 from '../assets/FleeMarket/Side.JPG'
import collage_img2 from '../assets/FleeMarket/Back.JPG'
import collage_img3 from '../assets/FleeMarket/Pourch.JPG'
import collage_img4 from '../assets/FleeMarket/Interior.JPG'
import collage_img5 from '../assets/FleeMarket/FirePump.JPG'
import collage_img6 from '../assets/FleeMarket/FirePump2.JPG'
import collage_img7 from '../assets/FleeMarket/OutdoorPump.JPG'



const ProjectDetail = () => {
  const { projectTitle } = useParams();
  const project = projectsData.find(
    p => p.title.replace(/\s+/g, '-').toLowerCase() === projectTitle
  );

  const images = [
    {
      original: collage_img1,
      thumbnail: collage_img1
    },
    {
      original: collage_img2,
      thumbnail: collage_img2
    },
    {
      original: collage_img3,
      thumbnail: collage_img3
    },
    {
      original: collage_img4,
      thumbnail: collage_img4
    },
    {
      original: collage_img5,
      thumbnail: collage_img5
    },
    {
      original: collage_img6,
      thumbnail: collage_img6
    },
    {
      original: collage_img7,
      thumbnail: collage_img7
    },

  ];

  if (!project) return <div>Project not found</div>;

  return (
    <div>
      <Navbar />
      <div className='min-h-screen mb-4 bg-fixed bg-cover bg-center flex 
        items-center w-full snap-start'
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }}
        id='Header'>
          <h1 className='font-bold text-white text-left text-7xl flex items-center min-h-screen pl-16'>{project.title}</h1>
      </div>
      <div className='container w-full'>
        <p className='text-black text-5xl flex items-center min-h-screen pl-16'>Description of the project</p>
      </div>
      <div className='container w-1/2 h-auto mx-auto pt-24 mb-16' syle={{ maxWidth: '400px', margin: '0 auto' }}>
        <ImageGallery items={images} />
      </div>
      <Footer/>

    </div>
  )
}

export default ProjectDetail
