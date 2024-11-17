import React from "react";
import { IoMenuSharp } from "react-icons/io5";

function page() {
  return (
    <div className="main w-full h-screen">
      <div className="navbar max-w-screen-xl bg-slate-300 md:bg-white mx-auto px-6 py-3 flex justify-between items-center">
        <h3 className="font-bold text-md">Portfolio</h3>
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
      <div className="info max-w-screen-xl mx-auto w-full h-full flex flex-col items-center mt-28">
        <div className="image w-32 h-32 bg-sky-300 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <h3 className="mt-4 font-semibold text-xl tracking-tight">
          Hi, I'm Sayam 👋
        </h3>
        <h1 className="font-bold text-3xl text-center w-3/4 mt-4 leading-none tracking-tight">
          Building digital products, brands and experience.
        </h1>
        <h2 className="font-semibold text-xl tracking-tight text-center w-4/5 mt-4 md:w-3/5">
          a Product Designer and Visual Developer in SF. I specialize in UI/UX
          Design, Responsive Web Design, and Visual Development.
        </h2>
        <button className="px-4 py-3 mt-6 font-semibold tracking-tight rounded-full bg-black text-white text-l hover:bg-slate-900 transition ease-in-out">Connect with me</button>
      </div>
    </div>
  );
}

export default page;
