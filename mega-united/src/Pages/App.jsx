import React, {useRef} from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Gov from '../components/Gov'
import TeamMembers from '../components/TeamMembers'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import House from '../components/House'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowUpRight } from "react-icons/fi"
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'


const App = () => {

  return (
    <div className="bg-white">
      {/* <TextParallaxContent
        imgUrl={assets.header_img}
        subheading="Built for all of us."
        heading="Mega United Coporation LTD"
      >
        
      </TextParallaxContent> */}
      <Header/>
      <ExampleContent
          title= "About Mega United"
          description="We are a general contracting company that prioritizes quality and cost efficiency."
          expected="Our mission is to provide maximized efficiency while minimizing cost."
          link="/"
        />
      <TextParallaxContent
        imgUrl={assets.gov_img}
        subheading="Completed"
        heading="Government Projects"
      >
        <ExampleContent
          title="Government Projects"
          description="Community is our priority. We take pride in enhancing community infrastructures and public services through the help of government funding. We are committed to upholding the highest standards of quality, safety, and compliances to ensure timely completion."
          expected="Learn more about the projects we've completed below."
          link="/Projects"
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={assets.housing_img}
        subheading="Available"
        heading="Housing"
      >
        <ExampleContent
          title="Available Housing"
          description="We are dedicated to providing high-quality, affordable housing solutions that meet the needs of diverse communities. Our approach emphasizes thoughtful planning, durable construction, and a commitment to creating safe, comfortable living environments. By working closely with local partners and stakeholders, we strive to ensure that every housing project contributes to long-term community growth and well-being."
          expected="Looking for housing?"
          link="/Housing"
        />
      </TextParallaxContent>
      <Footer/>
    </div>
  )
}

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
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

const OverlayCopy = ({ subheading, heading }) => {
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
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = ({ title, description, expected, link}) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      {title}
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        {description}
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        {expected}
      </p>
      <Link to={link} className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </Link>
    </div>
  </div>
);

export default App
