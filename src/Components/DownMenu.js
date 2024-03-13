import React from 'react'
import "../Style/Card.css"
import BlackImg from "./BlackImg.jpg"

export default function DownMenu() {
    

  return (<div className='bg-cover bg-center' style={{ backgroundImage:`url(${BlackImg})` }}> 
    <h3  className='text-center text-4xl text-white  hover:text-red-600 font-sans font-semibold py-8' >Select Who You Are</h3>
    <div className="box-container py-8">
	<div className="box-item">
    <div className="flip-box">
      <div className="flip-box-front text-center" style={{backgroundImage: 'url("https://s25.postimg.cc/frbd9towf/cta-2.png")'}}>
        <div className="inner color-white">
          <h3 className="flip-box-header">Custom Domains</h3>
          <p>A short sentence describing this callout is.</p>
          {/* <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img"/> */}
        </div>
      </div>
      <div className="flip-box-back text-center" style={{backgroundImage: 'url("https://s25.postimg.cc/frbd9towf/cta-2.png")'}}>
        <div className="inner color-white">
          <h3 className="flip-box-header">Custom Domains</h3>
          <h4>A short sentence describing this callout is. A short sentence describing this callout is.</h4>
          <button className="flip-box-button">Learn More</button>
        </div>
      </div>
    </div>
	</div>
	<div className="box-item">
    <div className="flip-box">
      <div className="flip-box-front text-center" style={{backgroundImage: 'url("https://s25.postimg.cc/hj4c4qnov/cta-3.png")'}}>
        <div className="inner color-white">
          <h3 className="flip-box-header">Never Sleeps</h3>
          <h4>A short sentence describing this callout is.</h4>
          {/* <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img"/> */}
        </div>
      </div>
      <div className="flip-box-back text-center" style={{backgroundImage: 'url("https://s25.postimg.cc/hj4c4qnov/cta-3.png")'}}>
        <div className="inner color-white">
          <h3 className="flip-box-header">Never Sleeps</h3>
          <h4>A short sentence describing this callout is.</h4>
          <button className="flip-box-button">Learn More</button>
        </div>
      </div>
    </div>
	</div>
	<div className="box-item">
    <div className="flip-box">
      <div className="flip-box-front text-center filter-" style={{backgroundImage: 'url("https://s25.postimg.cc/l2q9ujy4f/cta-4.png")'}}>
        <div className="inner color-white">
          <h3 className="flip-box-header">Dedicated</h3>
          <h4>A short sentence describing this callout is.</h4>
          {/* <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img"/> */}
        </div>
      </div>
      <div className="flip-box-back text-center" style={{backgroundImage: 'url("https://s25.postimg.cc/l2q9ujy4f/cta-4.png")'}}>
        <div className="inner color-white">
          <h3 className="flip-box-header">Dedicated</h3>
          <h4>A short sentence describing this callout is.</h4>
          <button className="flip-box-button">Learn More</button>
        </div>
      </div>
    </div>
	</div>
</div></div>
  )
}
