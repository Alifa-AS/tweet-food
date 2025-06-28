"use client";

import React, { useEffect, useRef, useState } from "react";

const categories = [
  { name: "Donuts", src: "/category/1.png", bgColor: "bg-[#964B00]" }, 
  { name: "Pizza", src: "/category/2.png", bgColor: "bg-[#FF7F50]" },   
  { name: "Kebab", src: "/category/3.png", bgColor: "bg-[#FF4500]" },   
  { name: "Burger", src: "/category/4.png", bgColor: "bg-[#FFA500]" }, 
  { name: "Sandwich", src: "/category/5.png", bgColor: "bg-[#FF8C00]" }, 
  { name: "Shawarma", src: "/category/6.png", bgColor: "bg-[#FFD700]" }, 
  { name: "Taco", src: "/category/7.png", bgColor: "bg-[#DC143C]" },    
];

export default function App() {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const scrollLeft = () => {
    const newIndex = index === 0 ? categories.length - 1 : index - 1;
    setIndex(newIndex);
    // Calculate scroll
    if (carouselRef.current) {
        carouselRef.current.scrollTo({
            left: newIndex * 260,
            behavior: "smooth",
        });
    }
  };

  const scrollRight = () => {
    const newIndex = index === categories.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
    // Calculate scroll position based on original
    if (carouselRef.current) {
        carouselRef.current.scrollTo({
            left: newIndex * 260,
            behavior: "smooth",
        });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-75 z-0"></div>

      <div className="relative z-10"> {/* Ensure content is above background gradient */}
        <p className="text-gray-600 mb-2 font-semibold">Category</p>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Popular <span className="text-orange-600">Category</span>
        </h2>

        {/* New relative flex container for carousel and arrows to center them */}
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute -left-4 sm:-left-8 z-20 bg-white text-orange-600 w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-orange-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            aria-label="scroll left"
          >
            {/* Replaced FaChevronLeft with inline SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Image Container */}
          <div
            ref={carouselRef}
            className="flex gap-x-5 overflow-hidden scroll-smooth transition-all duration-500 flex-grow"
          >
            {categories.map((category, i) => (
              <div
                key={i}
                className={`min-w-[190px] h-[150px] flex flex-col items-center justify-center rounded-xl p-4 flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105 ${category.bgColor}`} 
              >
                {/* Circular image */}
                <img
                  src={category.src}
                  alt={category.name}
                  className="w-32 h-24 object-cover mb-2"
                  // Fallback for image loading errors
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/100x100/cccccc/000000?text=Error"; }}
                />
                {/* Category Name*/}
                <p className="text-center font-semibold text-white text-lg">
                  {category.name}
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            // Positioned absolutely within this flex container, slightly overlapping the carousel
            className="absolute -right-4 sm:-right-8 z-20 bg-white text-orange-600 w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-orange-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            aria-label="scroll right"
          >
            {/* Replaced FaChevronRight with inline SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
