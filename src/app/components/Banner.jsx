"use client";

import React from "react";
import { Rancho } from "next/font/google";

const rancho = Rancho({
  subsets: ["latin"],
  weight: "400",
});

export default function Banner() {
  return (
    <section className="bg-[#FFE5D0] py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div>
          <h1
            className={`text-5xl md:text-6xl text-orange-600 ${rancho.className}`}
          >
            Hungry?
          </h1>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#ED6923] leading-tight mb-4">
            <span className="text-black">Let Us</span> Bring <br /> The Feast to
            You
          </h1>
          <p className="text-gray-700 mb-6">
            Explore hundreds of delicious options from top restaurants and Enjoy
            fast, reliable delivery right to you.
          </p>
          <button
            onClick={() => router.push("/menu")}
            className="bg-[#ED6923] text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-[#d9571f] transition"
          >
            Order Now
          </button>
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
