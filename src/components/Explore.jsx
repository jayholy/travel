import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import One from "../img/1.jpg";
import Two from "../img/2.jpg";
import Three from "../img/3.jpg";
import Four from "../img/4.jpg";
import five from "../img/5.jpg";
import six from "../img/6.jpg";
import seven from "../img/7.jpg";
import eight from "../img/8.jpg";
import nine from "../img/9.jpg";
import ten from "../img/10.jpg";
import eleven from "../img/11.jpg";
import twelve from "../img/12.jpg";
import thirteen from "../img/13.jpg";
import fouteen from "../img/14.jpg";
import fifteen from "../img/15.jpg";
import sixteen from "../img/16.jpg";
import seventeen from "../img/17.jpg";

import "swiper/css/pagination";
import "swiper/css";

SwiperCore.use([Navigation, Pagination]);

const Explore = () => {
  const clients = [
    {
      img: One,
      review:
        "Lorem ipsum dolor, sit amet consectetur  Sequi ad, repudiandae, rem veniam eos quis sint eius explicabo velit dolorem ducimus expedita provident omnis.",
    },
    {
      img: Two,
      review:
        "Lorem ipsum dolor, sit amet consectetur  Sequi ad, repudiandae, rem veniam eos quis sint eius explicabo velit dolorem ducimus expedita provident omnis.",
    },
    {
      img: Three,
      review:
        "Lorem ipsum dolor, sit amet consectetur Sequi ad, repudiandae, rem veniam eos quis sint eius explicabo velit dolorem ducimus expedita provident omnis.",
    },
    {
      img: Four,
      review:
        "Lorem ipsum dolor, sit amet consectetur  Sequi ad, repudiandae, rem veniam eos quis sint eius explicabo velit dolorem ducimus expedita provident omnis.",
    },
    {
      img: six,
      review:
        "Lorem ipsum dolor, sit amet consectetur  Sequi ad, repudiandae, rem veniam eos quis sint eius explicabo velit dolorem ducimus expedita provident omnis.",
    },
    {
      img: five,
      review:
        "Lorem ipsum dolor, sit amet consectetur Sequi ad, repudiandae, rem veniam eos quis sint eius explicabo velit dolorem ducimus expedita provident omnis.",
    },
    {
      img: seven,
      review:
        "Lorem ipsum dolor, sit amet consectetur  Sequi ad, repudiandae, rem veniam eos quis sint eius explicabo velit dolorem ducimus expedita provident omnis.",
    },
    {
      img: eight,
      review:
        "Lorem ipsum dolor, sit amet consectetur  Sequi ad, repudiandae, rem veniam eos quis sint eius explicabo velit dolorem ducimus expedita provident omnis.",
    },
    {
      img: nine,
      review:
        "Lorem ipsum dolor, sit amet consectetur  Sequi ad, repudiandae, rem veniam eos quis sint eius explicabo velit dolorem ducimus expedita provident omnis.",
    },
    {
      img: ten,
      review:
        "Lorem ipsum dolor, sit amet consecteturSequi ad, repudiandae, rem veniam eos quis sint eius explicabo velit dolorem ducimus expedita provident omnis.",
    },
  ];

  return (
    <div name='pag' className=" w-full h-[100vh]">
      <div className="text-center py-2">
        <h2 className="text-4xl font-extrabold">Explore Travel Places</h2>
        <p className="mt-1 font-xl font-semibold">
          View our tour package and find out more about the places we will visit
          together on this <br /> journey to the beautiful city of{" "}
          <span className="text-[#4682C0]">Kumasi </span> , exploring so many
          historical and amazing locations <br /> with the group and having so
          much fun.
        </p>
      </div>
      <Swiper className="-mt-5"
        modules={{ Pagination }}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        {clients.map((clients, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col py-8 items-center justify-center">
                <img className="w-[50rem] h-[40rem]" src={clients.img} alt="" />
                <span className="w-[40rem] text-[1.2rem] text-center">
                  {clients.review}
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Explore;
