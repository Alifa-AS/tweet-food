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
    <section className="bg-gradient-to-r from-orange-200 to-orange-50 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div>
          <h1
            className={`text-5xl mb-4 font-extrabold md:text-6xl text-orange-600 ${rancho.className}`}
          >
            Hungry?
          </h1>
          <h1 className="py-2 text-4xl md:text-5xl font-extrabold text-[#ED6923] leading-tight mb-4">
            <span className="text-black">Let Us</span> Bring <br /> The Feast to You
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

       {/* Right Image Section */}
        <div className="relative flex justify-center items-center w-full h-auto min-h-[300px] md:min-h-[450px]">
          {/* Main Hero Image */}
          <img
            src="/Banner/banner.png"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/450x450/ED6923/FFFFFF?text=Image+Error" }} 
            alt="Delicious Food"
            className="w-[250px] md:w-[350px] lg:w-[450px] drop-shadow-2xl object-contain"
          />

          {/* Glass card*/}
          <div className="absolute top-5 left-5 md:top-10 md:left-10 backdrop-blur-md bg-white/30 border border-white/40 shadow-lg rounded-xl p-4 flex-col items-center hidden sm:flex">
            <div className="flex -space-x-3 mb-2">
              <img src="/Banner/man1.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="User1" /> 
              <img src="/Banner/man2.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="User2" /> 
              <img src="/Banner/man3.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="User3" /> 
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center border-2 border-white text-sm font-bold">+</div>
            </div>
            <span className="font-semibold text-sm text-gray-800">Satisfied Customer</span>
            <span className="text-xs text-gray-700">⭐ 5.0 (3K Reviews)</span>
          </div>

     
          <div className="absolute bottom-5 right-5 md:bottom-10 md:right-10 backdrop-blur-md bg-white/30 border border-white/40 shadow-lg rounded-xl flex items-center p-3 space-x-3 hidden sm:flex">
            <img src="/Banner/bannerR.jpg" alt="Bistro" className="w-12 h-12 rounded-lg object-cover" /> 
            <div>
              <p className="font-bold text-gray-800 text-sm">Flavor Fusion Bistro</p>
              <div className="flex items-center text-xs text-gray-700">
                ⭐ 4.9 <span className="ml-1">Kaliurang, Sleman</span>
              </div>
            </div>
          </div>

          {/* 24/7 Delivery Card */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 md:translate-x-1/2 backdrop-blur-md bg-white/30 border border-white/40 shadow-lg rounded-xl flex items-center justify-center p-3 w-fit h-fit md:w-fit md:h-fit gap-x-1 hidden sm:flex"> {/* Changed flex-col to flex, adjusted width/height to fit content, and added gap-x */}
            <img src="/Banner/truck.png" alt="Delivery Truck" className="w-6 h-10 object-contain"/> 
            <div className="flex flex-col items-start text-xs md:text-sm"> 
              <span className="font-medium text-gray-800">24/7</span>
              <span className="text-gray-600">Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
