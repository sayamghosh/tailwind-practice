import React from "react";
import { IoMenuSharp } from "react-icons/io5";

function page() {
  return (
    <div className="main w-full h-screen">
      <div className="navbar max-w-screen-xl bg-blue-500 mx-auto px-6 py-3 flex justify-between items-center">
        <h3 className="font-bold text-md">Stake</h3>
        <div className="links gap-4 hidden md:flex">
          <a className="text-md  font-semibold" href="">
            Works
          </a>
          <a className="text-md  opacity-60 font-semibold" href="">
            Contact
          </a>
          <a className="text-md  opacity-60 font-semibold" href="">
            Services
          </a>
          <a className="text-md  opacity-60 font-semibold" href="">
            About
          </a>
        </div>
        <div className="menu block md:hidden">
          <IoMenuSharp />
        </div>
      </div>
    </div>
  );
}

export default page;
