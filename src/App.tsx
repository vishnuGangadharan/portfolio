import React from 'react'
import { LampDemo } from './components/ui/lamp'
import NavBar from './components/NavBar'
import Projects from './Projects/Project'
import { HoverEffect } from './components/ui/card-hover-effect'
import { items } from './components/skils/skils'
function App() {
  
  
  
  return (
    <div className='bg-black text-white'>
      {/* hellloo */}
    <NavBar/>
   <LampDemo/>
   <HoverEffect items={items}/>
    <Projects/>

    </div>
  )
}

export default App
