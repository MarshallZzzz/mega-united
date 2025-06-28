import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/projects'
import TeamMembers from './components/TeamMembers'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Projects/>
      <TeamMembers/>
      <Contact/>
    </div>
  )
}

export default App
