import React from 'react'
import HeroSection from './Components/HeroSection'
import Boost from './Components/Boost'
import Footer from './Components/Footer'
import DownMenu from './Components/DownMenu'
import BottomBar from './Components/BottomBar'
import "./Style/All.css"
import AnimatedCursor from "react-animated-cursor"

export default function App() {

  return (
    <div className='noscrollbar'>
   <AnimatedCursor
   
  innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  innerStyle={{
    backgroundColor: 'var(--cursor-color)'
  }}
  outerStyle={{
    border: '2px solid var(--cursor-color)'
  }}
/>


    <HeroSection/>
   <DownMenu/>
   <Boost/>
    <Footer/>
    <BottomBar/>
 </div>
  )
}
