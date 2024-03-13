import React from 'react'
import "../Style/All.css"
import "../Style/Scroll.css"

export default function Navbar() {
  return (
<header
    className="inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md py-6 md:top-2 md:rounded-3xl lg:max-w-screen-lg">
    <div>
        <div className="flex items-center justify-between">
            <div className="flex shrink-0">
                <a aria-current="page" className="flex items-center" href="/">
                    <img className="h-12 w-auto" src="https://civilguruji.com/_next/image?url=%2Fassets%2Fcivil-guruji-logo.png&w=96&q=75" alt=""/>
                    {/* <p className="sr-only">Website Title</p> */}
                </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                <a aria-current="page"
                    className="inline-block link rounded-lg px-2 py-1 text-base hover:text-lg font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 shadow-black "
                    href="/">Home</a>
                <a className="inline-block link hover:text-lg rounded-lg px-2 py-1 text-base font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 shadow-black"
                    href="/">About</a>
					 <a aria-current="page"
                    className="inline-block rounded-lg link hover:text-lg px-2 py-1 text-base font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 shadow-black"
                    href="/">Contact Us</a>
                <a className="inline-block rounded-lg px-2 link hover:text-lg py-1 text-base font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 shadow-black"
                    href="/">Know More</a>
            </div>
            <div className="flex items-center justify-end gap-3">
                <a className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                    href="/login">Sign in</a>
                <a className="ishadow-black nline-flex link hover:text-lg items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-base font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    href="/login">Login</a>
            </div>
        </div>
    </div>
</header>
  )
}
