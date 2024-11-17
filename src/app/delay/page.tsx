import Navbar from "../components/navbar";
import React from 'react'

function page() {
  return (
    <>
    <Navbar />
    <div className="w-full h-screen flex flex-col gap-1 justify-center items-center"> 
        <h1 className="font-semibold text-4xl">Sorry for the inconvenience 💀 </h1>
        <h1 className="font-semibold text-xl">Our developer is lazy 🦥</h1>
    </div>
    </>
    
    
  )
}

export default page