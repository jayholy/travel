import React from "react";
import Bgimage from "../img/21.jpg";
import { FaLongArrowAltDown } from "react-icons/fa";

const Home = () => {
  return (
    <div className=" h-full overflow-hidden flex flex-col">
      <div
        className=" before:absolute
           before:rounded-lg   before:content
            before:w-[99rem] before:h-[2px] before:-bottom-0 before:left-12  before:bg-gradient-to-tr
             from-[#d5dbe2] to-[#d5dbe2] capitalize relative "
      >
        <img
          className=" w-full  object-cover   absolute  -z-10  "
          src={Bgimage}
          alt=""
        />
        <header className=" h-full ml-14    py-6 flex  gap-8 ">
          <div className="mt-5 text-white   flex">
            <h1 className="text-2xl hover:cursor-pointer ">TRAVELAR</h1>
            <ul className="flex items-center ml-[5rem] gap-5">
              <li className="hover:cursor-pointer hover:scale-110 ease-in-out transition-all duration-500 hover:text-[#37261D]">
                Home
              </li>
              <li className="hover:cursor-pointer hover:scale-110 ease-in-out transition-all duration-500 hover:text-[#37261D]">
                Explore
              </li>
              <li className="hover:cursor-pointer hover:scale-110 ease-in-out transition-all duration-500 hover:text-[#37261D]">
                Travel Places
              </li>
            </ul>
          </div>
        </header>
      </div>
      <div className="flex justify-center  top-28 relative">
        <div className="text-white       ">
          <p className="uppercase text-xl md:text-9xl font-bold">
            world <br />
            of <span className="outline-title text-transparent">
              paradise,
            </span>{" "}
            <br /> kumasi.
          </p>
          <p className="text-[#f3f3f3] text-lg   ">
            Let's explore the best city in Ghana, Lorem <br /> ipsum, dolor sit
            amet consectetur adipisicing elit. Sint quia commodi minima. <br />{" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat,
            aperiam.
          </p>
          <div className="text-5xl flex items-center justify-center mb-32 mt-32 hover:cursor-pointer">
            <FaLongArrowAltDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
