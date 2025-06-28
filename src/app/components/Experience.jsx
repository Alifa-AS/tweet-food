"use client";

import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

const Experience = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Text + Download Buttons */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <p className="text-sm font-semibold text-gray-600 mb-2">
            Restaurants
          </p>
          <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-6">
            Enhance your experience, <br /> Download the{" "}
            <span className="text-orange-500">Tweet</span> app today!
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
            Discover a whole new level of convenience with our mobile app. From
            browsing our delectable menu to securing exclusive deals, it's your
            gateway to a world of culinary delights. Download now and elevate
            your dining experience with just a tap.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12">
            {/* Google Play */}
            <img src="/gp.png" className="" />

            {/* App Store */}
            <img src="/app.png" className="" />
          </div>
        </div>

        {/* Right: App Image */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end relative">
          <div className="relative w-[343px] h-[614px]">
            <Image
              src="/phone.png"
              alt="Mobile App Screenshot"
              fill
              className="w-full"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-[3rem] opacity-30 scale-90 -z-10 blur-xl hidden lg:block"></div>
        </div>
      </div>

      {/* Bottom Stats */}
     <div
  className="max-w-7xl mx-auto text-white rounded-3xl py-20 px-8 shadow-xl relative overflow-hidden bg-cover bg-top"
  style={{ backgroundImage: "url('/Rectangle.png')" }}
>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center relative z-10 pt-10">
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold mb-2">
              <CountUp end={100} duration={2} />+
            </span>
            <span className="text-lg text-orange-100">Food Menu</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold mb-2">
              <CountUp end={100} duration={2} />+
            </span>
            <span className="text-lg text-orange-100">Downloads</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold mb-2">
              <CountUp end={20} duration={2} />+
            </span>
            <span className="text-lg text-orange-100">Positive reviews</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold mb-2">
              <CountUp end={4.7} duration={2} decimals={1} />
            </span>
            <span className="text-lg text-orange-100">Average Review</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
