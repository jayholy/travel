import React from "react";
import Bgimage from "../img/21.jpg";

const Home = () => {
  return (
    <div>
      <img className="w-full h-[100vh] absolute -z-10  object-fit" src={Bgimage} alt="" />
      <div
        className=" before:absolute
           before:rounded-lg   before:content
            before:w-[99rem] before:h-[4px] before:-bottom-0 before:left-12  before:bg-gradient-to-tr
             from-[#ADC1DA] to-[#256FB8] capitalize relative "
      >
        <header className=" h-full ml-14    py-6 flex  gap-8 ">
          <div className="mt-5 text-white   flex">
            <h1 className="text-2xl hover:cursor-pointer ">TRAVELAR</h1>
            <ul className="flex items-center ml-[5rem] gap-5">
              <li className="hover:cursor-pointer hover:scale-110 ease-in-out transition-all duration-500 hover:text-[#256fb8]">Home</li>
              <li className="hover:cursor-pointer hover:scale-110 ease-in-out transition-all duration-500 hover:text-[#256fb8]">Travel Places</li>
              <li className="hover:cursor-pointer hover:scale-110 ease-in-out transition-all duration-500 hover:text-[#256fb8]">Explore</li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Home;
