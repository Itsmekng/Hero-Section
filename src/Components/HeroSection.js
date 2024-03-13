import React from 'react'
import Navbar from './Navbar'
import "../Style/Scroll.css"
import Img1 from "./HeroImage.jpg"


export default function HeroSection() {
 
  return (<>
    <div className='shadow'>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
  <div className="absolute inset-0 object-cover object-center w-full h-full bg-fixed" style={{ backgroundImage:`url(${Img1})` }}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    
  </div>
  <Navbar/>
  <div className="top-16 relative z-10 flex flex-col justify-center items-center Full text-center">
    <p className="text-5xl font-bold leading-tight mb-4">Welcome to Our Awesome Website</p>
    <p className="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
    <div href="#" className="text-white bg-red-600 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</div>
  </div>
  <span className="scroll-btn bottom-0 hidden sm:block">

		<span className="mouse">
			<span>
			</span>
		</span>
</span>
</div>
    </div>
    </>
  )
}
