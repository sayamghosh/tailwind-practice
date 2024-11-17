import React from 'react'
import { IoMenuSharp } from "react-icons/io5";

function Navbar() {
  return (
    <div className="navbar max-w-screen-xl bg-slate-300 md:bg-white mx-auto px-6 py-3 flex justify-between items-center">
        <a href="/"><h3 className="font-bold text-md">Portfolio</h3></a>
        <div className="links gap-4 hidden md:flex">
          <a className="text-md  font-semibold hover:bg-slate-200 px-2 py-1 rounded-md transition ease-in-out" href="/delay">
            Works
          </a>
          <a className="text-md  font-semibold hover:bg-slate-200 px-2 py-1 rounded-md transition ease-in-out" href="/delay">
            Contact
          </a>
          <a className="text-md  font-semibold hover:bg-slate-200 px-2 py-1 rounded-md transition ease-in-out" href="/delay">
            Services
          </a>
          <a className="text-md  font-semibold hover:bg-slate-200 px-2 py-1 rounded-md transition ease-in-out" href="/delay">
            About
          </a>
        </div>
        <div className="menu block md:hidden">
          <IoMenuSharp />
        </div>
      </div>
  )
}

export default Navbar