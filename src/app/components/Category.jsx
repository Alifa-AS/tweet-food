"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const foodImages = [
  "category/donuts.png",
  "category/burger.jpg",
  "category/pizza.png",
  "category/sushi.jpg",
  "category/pasta.jpg",
  "category/noodles.jpg",
  "category/taco.jpg",
];

export default function Category() {
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
    const newIndex = index === 0 ? foodImages.length - 1 : index - 1;
    setIndex(newIndex);
    carouselRef.current.scrollTo({
      left: newIndex * 260,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const newIndex = index === foodImages.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
    carouselRef.current.scrollTo({
      left: newIndex * 260,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore Our Categories</h2>

      {/* Arrows */}
      <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white text-orange-600 rounded-full p-2 shadow hover:bg-orange-100"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white text-orange-600 rounded-full p-2 shadow hover:bg-orange-100"
      >
        <FaChevronRight />
      </button>

      {/* Image Container */}
      <div
        ref={carouselRef}
        className="flex gap-5 overflow-hidden scroll-smooth transition-all duration-500"
      >
        {foodImages.map((img, i) => (
          <div
            key={i}
            className="min-w-[240px] bg-white shadow-md rounded-xl overflow-hidden flex-shrink-0"
          >
            <img
              src={img}
              alt={`dish-${i}`}
              className="w-full h-40 object-cover"
            />
            <p className="text-center py-2 font-medium text-gray-700">
              Dish {i + 1}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
