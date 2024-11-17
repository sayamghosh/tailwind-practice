import Link from 'next/link';
import React from 'react'
import { IoMenuSharp } from "react-icons/io5";

function Navbar() {
  return (
    <div className="navbar max-w-screen-xl bg-slate-300 md:bg-white mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/"><h3 className="font-bold text-md">Portfolio</h3></Link>
        <div className="links gap-4 hidden md:flex">
          <Link className="text-md  font-semibold hover:bg-slate-200 px-2 py-1 rounded-md transition ease-in-out" href="/delay">
            Works
          </Link>
          <Link className="text-md  font-semibold hover:bg-slate-200 px-2 py-1 rounded-md transition ease-in-out" href="/delay">
            Contact
          </Link>
          <Link className="text-md  font-semibold hover:bg-slate-200 px-2 py-1 rounded-md transition ease-in-out" href="/delay">
            Services
          </Link>
          <Link className="text-md  font-semibold hover:bg-slate-200 px-2 py-1 rounded-md transition ease-in-out" href="/delay">
            About
          </Link>
        </div>
        <div className="menu block md:hidden">
          <IoMenuSharp />
        </div>
      </div>
  )
}

export default Navbar