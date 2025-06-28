"use client";

import React from "react";
import { Rancho } from "next/font/google";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const rancho = Rancho({
  subsets: ["latin"],
  weight: "400",
});

export default function Banner() {
  const router = useRouter();

  return (
    <section className="bg-[#FFE5D0] py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div>
          <h1
            className={`text-5xl mb-4 font-extrabold md:text-6xl text-orange-600 ${rancho.className}`}
          >
            Hungry?
          </h1>
          <h1 className="py-2 text-7xl md:text-5xl font-extrabold text-[#ED6923] leading-tight mb-4">
            <span className="text-black">Let Us</span> Bring <br /> The Feast to
            You
          </h1>
          <p className="text-gray-700 mb-6">
            Explore hundreds of delicious options from top restaurants and enjoy
            fast, reliable delivery right to you.
          </p>

          {/* Input field */}
          <div className="flex items-center mb-6 w-full max-w-xl">
            <Toaster position="top-right" />
            <input
              type="text"
              placeholder="Enter your location"
              className="flex-grow px-4 py-3 border border-gray-300 text-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              onClick={() => toast.success("Searching near your location...")}
              className="bg-[#ED6923] text-white px-6 py-3 rounded-r-lg text-lg font-medium hover:bg-[#d9571f] transition whitespace-nowrap"
            >
              Find Food
            </button>
          </div>
        </div>

        {/* Right Image Section with additional elements */}
        <div className="relative flex justify-center items-center h-[450px] md:h-[550px] lg:h-[600px] w-full">
          {/* Main Hero Image */}
          <img
            src="/Banner/banner.png"
            alt="Delicious Food"
            className="w-[300px] md:w-[400px] lg:w-[500px] drop-shadow-2xl object-contain h-auto max-w-full"
          />

          {/* Satisfied Customer Card */}
           <div className="absolute top-10 md:top-20 left-1/2 -translate-x-1/2 md:left-[unset] md:-translate-x-0 md:right-[calc(50%+10px)] lg:right-[calc(50%+40px)] bg-white p-3 rounded-xl shadow-lg flex flex-col items-center gap-1 min-w-[150px] md:min-w-[180px] z-10">
            <div className="flex items-center">
              {/* User Images */}
              <img
                src="/Banner/man3.jpg"
                alt="Satisfied Customer 3"
                className="w-10 h-10 object-cover rounded-full border-2 border-white z-10"
              />
              <img
                src="/Banner/man2.jpg"
                alt="Satisfied Customer 2"
                className="w-10 h-10 object-cover rounded-full -ml-2 border-2 border-white z-20"
              />
              <img
                src="/Banner/man1.jpg"
                alt="Satisfied Customer 1"
                className="w-10 h-10 object-cover rounded-full -ml-2 border-2 border-white z-30"
              />
              <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center -ml-2 z-40">
                <span className="text-white text-base font-bold">+</span>
              </div>
            </div>
            {/* "Satisfied Customer" text moved to a new line */}
            <span className="font-bold text-gray-700 text-sm pt-2">
              Satisfied Customer
            </span>
            <div className="flex items-center gap-1">
              {/* Star Icon (Inline SVG) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="text-yellow-500 w-4 h-4"
              >
                <path
                  fill="currentColor"
                  d="M316.9 18.6c.3-.9 .7-1.8 1.2-2.7h0c4.1-7.7 13.9-10.1 21.6-6c7.7 4.1 10.1 13.9 6 21.6L290.4 246.5l88.5 76.5 11.2 9.7c7.4 6.4 17.4 8.7 26.9 6.9s17.3-6.2 22.2-14.2l32-52.5c2.3-3.8 5.4-7.4 9-10.7l13.5-12.4c11.9-10.9 30-9.2 39.9 2.7c9.9 11.9 8.2 30-3.7 39.9L499.9 388c-4.4 4-8.9 7.6-13.6 10.9l-19.1 13.7c-8.9 6.3-15.9 14.8-20.9 24.3l-25.2 46c-2.3 4.2-3.5 8.9-3.5 13.7c0 4.8 1.2 9.5 3.5 13.7l25.2 46c5 9.5 12 18 20.9 24.3l19.1 13.7c4.7 3.3 9.2 6.9 13.6 10.9L557.6 448c11.9 9.9 13.6 28-.3 39.9c-11.9 9.9-30 .3-39.9-11.6L493.5 425c-3.6-3.3-6.7-6.9-9-10.7l-32-52.5c-4.9-8-11.2-13.5-18.7-16.1s-15.5-2.2-22.9 .7L365.1 364l-88.5-76.5c-.5-.4-1-.8-1.5-1.3c-7.7-4.1-17.5-1.7-21.6 6c-4.1 7.7-1.7 17.5 6 21.6l88.5 76.5-59.2 51.3-11.2 9.7c-7.4 6.4-17.4 8.7-26.9 6.9s-17.3-6.2-22.2-14.2l-32-52.5c-2.3-3.8-5.4-7.4-9-10.7l-13.5-12.4c-11.9-10.9-30-9.2-39.9 2.7c-9.9 11.9-8.2 30 3.7 39.9L76.1 388c4.4 4 8.9 7.6 13.6 10.9l19.1 13.7c8.9 6.3 15.9 14.8 20.9 24.3l25.2 46c2.3 4.2 3.5 8.9 3.5 13.7c0 4.8-1.2 9.5-3.5 13.7l-25.2 46c-5 9.5-12 18-20.9 24.3l-19.1 13.7c-4.7 3.3-9.2 6.9-13.6 10.9L18.4 448c-11.9 9.9-13.6 28 .3 39.9c11.9 9.9 30 .3 39.9-11.6L82.5 425c3.6-3.3 6.7-6.9 9-10.7l32-52.5c4.9-8 11.2-13.5 18.7-16.1s15.5-2.2 22.9 .7L210.9 364l59.2-51.3c.5-.4 1-.8 1.5-1.3zM288 0c-12.8 0-24.8 6.4-32 17.3L157.7 200H64c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64h48.9l-13.7 11.9L24.4 456c-11.9 9.9-13.6 28-.3 39.9c9.9 11.9 28.1 13.6 39.9 .3L160 416l128 112 128-112 95.7 79.5c11.9 9.9 30 .3 39.9-11.6c9.9-11.9 8.2-30-.3-39.9L499.1 370.4l-13.7-11.9H512c35.3 0 64-28.7 64-64V264c0-35.3-28.7-64-64-64H418.3L320 17.3c-7.2-10.9-19.2-17.3-32-17.3z"/>
              </svg>
              <span className="font-bold text-gray-800">4.9</span>
              <span className="text-gray-500 text-sm">Kaliurang, Sleman</span>
            </div>
          </div>

          {/* Flavor Fusion Bistro Card */}
          <div className="absolute bottom-10 md:bottom-20  translate-x-1/2  md:translate-x-0 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 min-w-[200px] md:min-w-[250px] z-10">
            <img
              src="/Banner/bannerR.jpg"
              alt="Restaurant Icon"
              className="w-14 h-12 object-cover rounded-lg"
            />
            <div>
              <p className="font-bold text-gray-800 text-lg">
                Flavor Fusion Bistro
              </p>
              <div className="flex items-center gap-1">
                {/* Star Icon*/}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="text-yellow-500 w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M316.9 18.6c.3-.9 .7-1.8 1.2-2.7h0c4.1-7.7 13.9-10.1 21.6-6c7.7 4.1 10.1 13.9 6 21.6L290.4 246.5l88.5 76.5 11.2 9.7c7.4 6.4 17.4 8.7 26.9 6.9s17.3-6.2 22.2-14.2l32-52.5c2.3-3.8 5.4-7.4 9-10.7l13.5-12.4c11.9-10.9 30-9.2 39.9 2.7c9.9 11.9 8.2 30-3.7 39.9L499.9 388c-4.4 4-8.9 7.6-13.6 10.9l-19.1 13.7c-8.9 6.3-15.9 14.8-20.9 24.3l-25.2 46c-2.3 4.2-3.5 8.9-3.5 13.7c0 4.8 1.2 9.5 3.5 13.7l25.2 46c5 9.5 12 18 20.9 24.3l19.1 13.7c4.7 3.3 9.2 6.9 13.6 10.9L557.6 448c11.9 9.9 13.6 28-.3 39.9c-11.9 9.9-30 .3-39.9-11.6L493.5 425c-3.6-3.3-6.7-6.9-9-10.7l-32-52.5c-4.9-8-11.2-13.5-18.7-16.1s-15.5-2.2-22.9 .7L365.1 364l-88.5-76.5c-.5-.4-1-.8-1.5-1.3c-7.7-4.1-17.5-1.7-21.6 6c-4.1 7.7-1.7 17.5 6 21.6l88.5 76.5-59.2 51.3-11.2 9.7c-7.4 6.4-17.4 8.7-26.9 6.9s-17.3-6.2-22.2-14.2l-32-52.5c-2.3-3.8-5.4-7.4-9-10.7l-13.5-12.4c-11.9-10.9-30-9.2-39.9 2.7c-9.9 11.9-8.2 30 3.7 39.9L76.1 388c4.4 4 8.9 7.6 13.6 10.9l19.1 13.7c8.9 6.3 15.9 14.8 20.9 24.3l25.2 46c2.3 4.2 3.5 8.9 3.5 13.7c0 4.8-1.2 9.5-3.5 13.7l-25.2 46c-5 9.5-12 18-20.9 24.3l-19.1 13.7c-4.7 3.3-9.2 6.9-13.6 10.9L18.4 448c-11.9 9.9-13.6 28 .3 39.9c11.9 9.9 30 .3 39.9-11.6L82.5 425c3.6-3.3 6.7-6.9 9-10.7l32-52.5c4.9-8 11.2-13.5 18.7-16.1s15.5-2.2 22.9 .7L210.9 364l59.2-51.3c.5-.4 1-.8 1.5-1.3zM288 0c-12.8 0-24.8 6.4-32 17.3L157.7 200H64c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64h48.9l-13.7 11.9L24.4 456c-11.9 9.9-13.6 28-.3 39.9c9.9 11.9 28.1 13.6 39.9 .3L160 416l128 112 128-112 95.7 79.5c11.9 9.9 30 .3 39.9-11.6c9.9-11.9 8.2-30-.3-39.9L499.1 370.4l-13.7-11.9H512c35.3 0 64-28.7 64-64V264c0-35.3-28.7-64-64-64H418.3L320 17.3c-7.2-10.9-19.2-17.3-32-17.3z"
                  />
                </svg>
                <span className="font-bold text-gray-800">4.9</span>
                <span className="text-gray-500 text-sm">Kaliurang, Sleman</span>
              </div>
            </div>
          </div>

          {/* 24/7 Delivery Icon */}
          <div className="absolute top-1/2 md:top-auto md:bottom-20 right-5 md:right-[unset] md:left-[calc(100%-60px)] lg:left-[calc(100%-80px)] transform -translate-y-1/2 md:translate-y-0 bg-white p-4 rounded-full shadow-lg flex flex-col items-center justify-center text-center w-20 h-20 md:w-24 md:h-24 z-10">
            {/* Truck Icon (Inline SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="text-[#ED6923] w-8 h-8"
            >
              <path
                fill="currentColor"
                d="M128 32c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32zm0 64H512V256H128V96zM0 288c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm512 0c0-17.7 14.3-32 32-32H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H544c-17.7 0-32-14.3-32-32zM128 352h384c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384c0-17.7 14.3-32 32-32zM32 448c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V480c0-17.7-14.3-32-32-32H32zm512 0c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V480c0-17.7-14.3-32-32-32h-32z"
              />
            </svg>
            <span className="text-gray-700 text-xs md:text-sm font-semibold mt-1">
              24/7 Delivery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
