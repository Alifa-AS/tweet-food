"use client";

import React, { useRef, useEffect, useState } from 'react';

const PerfectSlider = () => {

  const scrollContainerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {

    if (scrollContainerRef.current && scrollContainerRef.current.firstElementChild) {
      const width = scrollContainerRef.current.firstElementChild.offsetWidth + 24;
      setCardWidth(width);
    }

    // Add event listener to update card width on window resize
    const handleResize = () => {
        if (scrollContainerRef.current && scrollContainerRef.current.firstElementChild) {
            const width = scrollContainerRef.current.firstElementChild.offsetWidth + 24;
            setCardWidth(width);
        }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  const scrollLeft = () => {
    if (scrollContainerRef.current && cardWidth > 0) {
      scrollContainerRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth',
      });
    }
  };

  
  const scrollRight = () => {
    if (scrollContainerRef.current && cardWidth > 0) {
      scrollContainerRef.current.scrollBy({
        left: cardWidth, 
        behavior: 'smooth',
      });
    }
  };

 
  const restaurants = [
    {
      id: 1,
      name: 'Burger King',
      deliveryTime: '20-30 min',
      deliveryFee: '€10',
      rating: 4.6,
      reviews: 85,
      categories: ['Pizza', 'Burger', 'Pasta', 'Chicken Fry'],
      imageUrl: '/Restaurant/img1.jpg',
      discount: '10% off',
    },
    {
      id: 2,
      name: 'Vienna\'s Delight',
      deliveryTime: '20-30 min',
      deliveryFee: '€10',
      rating: 4.6,
      reviews: 85,
      categories: ['Pizza', 'Burger', 'Pasta', 'Chicken Fry'],
      imageUrl: '/Restaurant/img2.jpg',
      discount: '10% off',
    },
    {
      id: 3,
      name: 'AlpenFlair Bistro',
      deliveryTime: '20-30 min',
      deliveryFee: '€10',
      rating: 4.6,
      reviews: 85,
      categories: ['Pizza', 'Burger', 'Pasta', 'Chicken Fry'],
      imageUrl: '/Restaurant/img3.jpg',
      discount: '10% off',
    },
    {
      id: 4,
      name: 'Mozart\'s Table',
      deliveryTime: '20-30 min',
      deliveryFee: '€10',
      rating: 4.6,
      reviews: 85,
      categories: ['Pizza', 'Burger', 'Pasta', 'Chicken Fry'],
      imageUrl: '/Restaurant/pizza.jpg',
      discount: '10% off',
    },
    {
        id: 5,
        name: 'The Golden Spoon',
        deliveryTime: '25-35 min',
        deliveryFee: '€8',
        rating: 4.8,
        reviews: 120,
        categories: ['Seafood', 'Grill', 'Salads'],
        imageUrl: '/food/f3.jpg',
        discount: '5% off',
    },
    {
        id: 6,
        name: 'Curry Kingdom',
        deliveryTime: '30-40 min',
        deliveryFee: '€12',
        rating: 4.5,
        reviews: 90,
        categories: ['Indian', 'Spicy', 'Vegan'],
        imageUrl: '/food/f2.jpg',
        discount: '15% off',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      
      <div className="flex justify-between items-center mb-6 px-4">
        <div>
          <p className="text-sm text-gray-500 font-medium">Popular Feed</p>
          <h2 className="text-3xl font-bold text-gray-800">
            Popular <span className="text-orange-600">Restaurant</span> Near me
          </h2>
        </div>
        <button className="px-6 py-2 bg-orange-100 text-orange-600 rounded-lg shadow hover:bg-orange-200 transition-colors duration-200">
          View All
        </button>
      </div>

      <div className="relative px-4"> 
        <div
          ref={scrollContainerRef}
         
          className="flex overflow-x-scroll no-scrollbar scroll-smooth space-x-6 py-4 snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth' }} 
          
        >
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="flex-none w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 relative overflow-hidden snap-center"
            >
              {/* Discount badge */}
              {restaurant.discount && (
                <div className="absolute top-3 left-3 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                  {restaurant.discount}
                </div>
              )}
              <img
                src={restaurant.imageUrl}
                alt={restaurant.name}
                className="w-full h-40 object-cover rounded-t-xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/300x200/CCCCCC/000000?text=Image+Not+Found`;
                }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{restaurant.name}</h3>
                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <svg className="w-4 h-4 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                  <span>{restaurant.rating} ({restaurant.reviews})</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <svg className="w-4 h-4 text-gray-400 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd"></path></svg>
                  <span>{restaurant.deliveryTime}</span>
                  <span className="mx-2">•</span>
                  <svg className="w-4 h-4 text-gray-400 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                  <span>Delivery Fee {restaurant.deliveryFee}</span>
                </div>
                <p className="text-gray-500 text-xs">
                  {restaurant.categories.join(' • ')}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white text-orange-600 rounded-full p-2 shadow-lg hover:bg-orange-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          aria-label="Scroll left"
        >
          {/* Left Chevron SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white text-orange-600 rounded-full p-2 shadow-lg hover:bg-orange-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          aria-label="Scroll right"
        >
          {/* Right Chevron SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PerfectSlider;


