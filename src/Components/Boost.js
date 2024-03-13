import React from 'react'
import "../Style/All.css"
import ImageCasual from './ImageCasual'
import "../Style/Card.css"
import Img2 from "./Img2.jpg"

export default function Boost() {

    const myComponentStyle = {
        backgroundImage: `linear-gradient(4deg, rgba(38,8,31,0.75) 30%, rgba(213,49,127,0.3) 45%, rgba(232,120,12,0.3) 100%), url(${Img2})`,
        // add other styles as needed
      };

  return (
    <div className="mybgtext  relative overflow-hidden  pt-16 pb-32 space-y-24 bg-cover bg-center bg-fixed" style={myComponentStyle}>
    <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">

                <div>
                     <div className="mt-6">
                        <p className="drop-shadow-2xl text-3xl font-bold tracking-tight text-white ">
                            Natural Language Processing (NLP):
                        </p>
                        <p className="mt-4 text-lg font-semibold text-white drop-shadow-2xl">
                            The AI product utilizes advanced NLP algorithms to understand and interpret human language,
                            enabling it to accurately process and analyze text-based inputs.
                        </p>
                       
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className=" lg:relative ml-16 lg:m-0 lg:h-full lg:px-0">
                    <ImageCasual/>
                </div>
            </div>
        </div>
    </div>



    <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                <div>
                   
                    <div className="mt-6">
                        <p className="text-3xl font-bold tracking-tight text-white text-right drop-shadow-2xl">
                            Sentiment Analysis:
                        </p>
                        <p className="mt-4 text-lg text-white text-right font-semibold drop-shadow-2xl">
                            The product has built-in sentiment analysis capabilities, allowing it to determine the
                            sentiment (positive, negative, or neutral) expressed in text or customer feedback.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="lg:relative ml-16 lg:m-0 lg:h-full lg:px-0">
                   <ImageCasual/>
                </div>
            </div>
        </div>
    </div>



    <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                <div>
                    <div className="mt-6">
                        <p className="text-3xl font-bold tracking-tight text-white drop-shadow-2xl">
                            Natural Language Generation (NLG):
                        </p>
                        <p className="mt-4 text-lg text-white font-semibold drop-shadow-2xl shadow-black">
                            The AI product can generate human-like written content, summaries, or reports based on
                            structured data or analysis results.
                        </p>
                     
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="lg:relative ml-16 lg:m-0 lg:h-full lg:px-0">
                    <ImageCasual/>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
