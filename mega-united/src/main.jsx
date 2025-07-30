import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import App from './Pages/App.jsx'
import Projects from './Pages/Projects.jsx'
import Housing from './Pages/Housing.jsx'
import Company from './Pages/Company.jsx'
import ProjectDetail from './Pages/ProjectDetail.jsx';
import HouseDetail from './Pages/HouseDetail.jsx';
import { MotionConfig } from 'framer-motion';

const router = createBrowserRouter([
  {path:"/", element: <App />},
  {path:"/History", element: <Company/>},
  {path:"/Projects", element: <Projects />},
  {path:"/Housing", element: <Housing />},
  {path:"/Projects/:title", element: <ProjectDetail/>},
  {path:"/Housing/:title", element:<HouseDetail/>}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MotionConfig 
      transition={{duration: 0.4, type: "spring"}}>
      <RouterProvider router={router}/>

    </MotionConfig>
  </StrictMode>,
)
