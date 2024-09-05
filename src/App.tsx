import React from 'react'
import { LampDemo } from './components/ui/lamp'
import NavBar from './components/NavBar'
import Projects from './Projects/Project'
function App() {
  return (
    <div className='bg-black text-white'>
    <NavBar/>
   <LampDemo/>
    <Projects/>
    </div>
  )
}

export default App
