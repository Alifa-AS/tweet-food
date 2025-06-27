"use client";

import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Love the convenience of Tweet! Fast, reliable, and super easy to use for all your food delivery cravings.",
    name: "Leon Fischer",
    title: "Satisfied Customer",
    image: "https://placehold.co/60x60/FFDDC1/E67E22?text=LF",
  },
  {
    id: 2,
    quote:
      "Absolutely fantastic service! My orders are always on time and the food is delicious. Highly recommend!",
    name: "Maria Sanchez",
    title: "Happy User",
    image: "https://placehold.co/60x60/C1FFDD/22E67E?text=MS",
  },
  {
    id: 3,
    quote:
      "The best food delivery app out there. User-friendly interface and a wide variety of restaurants to choose from.",
    name: "John Doe",
    title: "Regular Customer",
    image: "https://placehold.co/60x60/DDC1FF/7E22E6?text=JD",
  },
];

const Testimonial = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 5000);
    return () => clearInterval(sliderInterval);
  }, []);

  const goToNext = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex + 1) % testimonials.length
    );
  };

  const goToPrevious = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <section className="py-16 px-4 font-inter">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section: Testimonial Content */}
        <div className="lg:w-1/2 w-full text-center lg:text-left relative">
          <p className="text-sm font-semibold text-gray-600 mb-2">Testimonial</p>
          <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-8">
            What Customer <span className="text-orange-500">Saying</span> <br />{" "}
            About our Services
          </h2>

          <div className="relative overflow-visible">
            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 -left-12 -right-12 flex justify-between items-center z-10">
              <button
                onClick={goToPrevious}
                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg mx-auto lg:mx-0 overflow-hidden transition-opacity duration-500 ease-in-out">
              <span className="absolute top-2 left-4 text-6xl text-orange-400 opacity-60">
                “
              </span>
              
              <p className="text-lg text-gray-700 mb-6 relative z-10">
                {currentTestimonial.quote}
              </p>
              <span className="absolute bottom-20 right-72 text-6xl text-orange-400 opacity-60">
                ”
              </span>
              
              <div className="flex items-center mt-4">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="text-xl font-semibold text-gray-900">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {currentTestimonial.title}
                  </p>
                </div>
                <div className="flex ml-auto text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.416 3.908 1.48-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center lg:justify-start mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === currentTestimonialIndex
                    ? "bg-orange-400"
                    : "bg-gray-300"
                }`}
                onClick={() => setCurrentTestimonialIndex(index)}
              ></div>
            ))}
          </div>
        </div>

        {/* Right Section: Only Main Image */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
          <img
            src="/testimonial/food.png"
            alt="Delicious Salad"
            className="w-full max-w-lg h-auto rounded-3xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
