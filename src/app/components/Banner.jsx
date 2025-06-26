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
            className={`text-5xl font-extrabold md:text-6xl text-orange-600 ${rancho.className}`}
          >
            Hungry?
          </h1>
          <h1 className="text-7xl md:text-5xl font-extrabold text-[#ED6923] leading-tight mb-4">
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

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/banner.png"
            alt="Delicious Food"
            className="w-[300px] md:w-[400px] lg:w-[500px] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
