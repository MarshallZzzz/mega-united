import React, { useRef, useState, useEffect } from 'react'
import Header from '../components/Header'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { FiArrowUpRight } from "react-icons/fi"
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const position = { lat: 13.5032, lng: 144.807 }
const transition = { duration: 1, ease: [.25, .1, .25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(10%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};


const App = () => {
  useEffect(() => {
    // Prevent duplicate map initialization
    if (!document.getElementById('map')._leaflet_id) {
      // Initialize map
      const map = L.map('map').setView([13.4988946, 144.8066718], 14);
      const marker = L.marker([13.4988946, 144.8066718]).addTo(map);
      const popup = L.popup({
        offset: [0, -30]
      })
        .setLatLng([13.4988946, 144.8067])
        .setContent("Mega United Corp LTD.")
        .openOn(map);
      // Add tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);
    }
  }, []);

  return (
    <div className="bg-black">

      <Header />

      <TextParallaxContent
        imgUrl={"/history/establishment.jpg"}
        subheading="This is a dummy text in place of the
                        actual description of the project. This will include more details
                        of the project, the project scope, and what we tried to accomplish."
        heading="Our History"
        loc="History#header"
      ></TextParallaxContent>
      <TextParallaxContent
        imgUrl={"/FleeMarket/Thumbnail.JPG"}
        subheading="Community is our priority. We take pride in enhancing community infrastructures and public services through the help of government funding. We are committed to upholding the highest standards of quality, safety, and compliances to ensure timely completion."
        heading="Government Projects"
        loc="Projects#header"
      >
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={"/Subdivision/front2.jpg"}
        subheading="We are dedicated to providing high-quality, affordable housing solutions that meet the needs of diverse communities. Our approach emphasizes thoughtful planning, durable construction, and a commitment to creating safe, comfortable living environments. By working closely with local partners and stakeholders, we strive to ensure that every housing project contributes to long-term community growth and well-being."
        heading="Housing"
        loc="Housing#header"
      >
      </TextParallaxContent>
      <Navbar />
      <div className='w-full justify-items-center bg-gray-900'>


        <h1 className='text-7xl text-white px-8 py-8'>Contacts and Location</h1>
        <div className='grid grid-cols-2'>
          <div id='map' style={{
            height: "500px",
            width: "600px",
            borderRadius: "16px",
            overflow: "hidden",
            border: "2px solid #fff"
          }} />
          <div className='text-white pl-32 pt-32'
            style={{
              width: "350px",
              height: "300px"
            }}>
            <h1 className='text-3xl pb-4'>Get in Touch!</h1>
            <p>218 Rojas St, Harmon Industrial Park, 96913, Guam</p>
            <p>Office number: </p>
            <p>Office number: </p>
          </div>

        </div>

        <Footer />
      </div>
    </div>
  )
}

const IMG_PADDING = 0;

const TextParallaxContent = ({ imgUrl, subheading, heading, loc }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} loc={loc} />
      </div>
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden mb-4"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading, loc }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 h-screen w-full flex-col grid grid-cols-2 text-white"
    >
      <div className='flex flex-col justify-center items-center h-full w-full gap-4'>
        <p className="text-left text-4xl md:text-7xl pb-16">{heading}</p>
        <p className="text-left text-xl md:text-3xl pl-16">
          {subheading}
        </p>
        <div className='pt-16'>
          <Link to={`/${loc}`} className="flex rounded bg-white px-9 py-4 text-xl text-black md:w-fit">
            Learn more<FiArrowUpRight className="inline" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};



export default App
