"use client";
import React from "react";
import Slider from "react-slick";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaPlus,
  FaRegHeart,
  FaStar,
  FaMotorcycle,
} from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rancho } from "next/font/google";

const rancho = Rancho({
  subsets: ["latin"],
  weight: "400",
});

const foodData = [
  {
    id: 1,
    name: "Burger with Emmental Cheese",
    price: "€44.99",
    oldPrice: "€64.99",
    discount: "30% OFF",
    time: "20 min",
    rating: "4.6 (65)",
    img: "/food/f1.jpg",
  },
  {
    id: 2,
    name: "Tandoori Chicken",
    price: "€44.99",
    oldPrice: "€64.99",
    discount: "30% OFF",
    time: "20 min",
    rating: "4.6 (65)",
    img: "/food/f2.jpg",
  },
  {
    id: 3,
    name: "Döner Kebab",
    price: "€44.99",
    oldPrice: "€64.99",
    discount: "30% OFF",
    time: "30 min",
    rating: "4.6 (65)",
    img: "/food/f3.jpg",
  },
  {
    id: 4,
    name: "Pepperoni Pizza Slice",
    price: "€44.99",
    oldPrice: "€64.99",
    discount: "30% OFF",
    time: "20 min",
    rating: "4.6 (65)",
    img: "/food/f4.jpg",
  },
];

const PopularFood = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6 px-4">
        <div>
          <p className={`text-sm text-gray-500 font-medium ${rancho.className}`}>
            Popular Food
          </p>
          <h2 className="text-3xl font-bold text-gray-800">
            Popular <span className="text-orange-600">Food</span> Near me
          </h2>
        </div>
        <button className="border border-orange-400 px-4 py-1 rounded text-orange-500 hover:bg-orange-400 hover:text-white transition">
          View All
        </button>
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {foodData.map((food) => (
          <div key={food.id} className="px-2">
            <div className="bg-white rounded-lg shadow relative flex flex-col h-full min-h-[280px]">
              {/* Image Section */}
              <div className="relative">
                <img
                  src={food.img}
                  alt={food.name}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                {/* Discount badge */}
                <span className="absolute top-2 left-2 bg-orange-500 text-xs px-2 py-1 rounded text-white">
                  {food.discount}
                </span>

                {/* Heart icon */}
                <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
                  <FaRegHeart size={16} className="text-orange-500" />
                </button>

                <div className="absolute bottom-2 right-2 bg-white/80 px-2 py-1 rounded flex items-center text-xs">
                  <FaStar className="text-orange-400 mr-1" />
                  <span className="text-gray-600">{food.rating}</span>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-3 flex-1 flex flex-col justify-between">
                {/* Title and Price */}
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-sm text-gray-800">
                      {food.name}
                    </h3>
                    <p className="text-gray-500 text-xs py-1">Burger King</p>
                  </div>
                  <div className="text-right">
                    <span className="line-through text-gray-400 text-xs">
                      {food.oldPrice}
                    </span>
                    <span className="text-orange-500 font-semibold text-sm block">
                      {food.price}
                    </span>
                  </div>
                </div>

                {/* Delivery*/}
                <div className="flex justify-start gap-2">
                  <div className="flex items-center text-xs text-gray-500">
                    <IoMdTime className="mr-1" />
                    <span>{food.time}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <FaMotorcycle className="mr-1" />
                    <span>{food.time}</span>
                  </div>
                </div>
              </div>

              {/* Plus Button bottom right */}
              <button className="absolute bottom-2 right-2 bg-orange-500 text-white rounded-full p-2 shadow hover:bg-orange-600 transition">
                <FaPlus />
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Arrows
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer text-orange-500"
      onClick={onClick}
    >
      <FaArrowCircleRight size={25} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer text-orange-500"
      onClick={onClick}
    >
      <FaArrowCircleLeft size={25} />
    </div>
  );
}

export default PopularFood;
