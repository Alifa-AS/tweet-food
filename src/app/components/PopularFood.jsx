"use client";
import React from "react";
import Slider from "react-slick";
import { FaHeart, FaPlus, FaRegHeart, FaStar } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const foodData = [
  {
    id: 1,
    name: "Burger with Emmental Cheese",
    price: "€44.99",
    oldPrice: "€64.99",
    discount: "30% OFF",
    time: "20 min",
    rating: "4.6 (65)",
    img: "/burger.jpg",
  },
  {
    id: 2,
    name: "Tandoori Chicken",
    price: "€44.99",
    oldPrice: "€64.99",
    discount: "30% OFF",
    time: "20 min",
    rating: "4.6 (65)",
    img: "/tandoori.jpg",
  },
  {
    id: 3,
    name: "Döner Kebab",
    price: "€44.99",
    oldPrice: "€64.99",
    discount: "30% OFF",
    time: "30 min",
    rating: "4.6 (65)",
    img: "/kebab.jpg",
  },
  {
    id: 4,
    name: "Pepperoni Pizza Slice",
    price: "€44.99",
    oldPrice: "€64.99",
    discount: "30% OFF",
    time: "20 min",
    rating: "4.6 (65)",
    img: "/pizza.jpg",
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
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">
          Popular <span className="text-orange-500">Food Near me</span>
        </h2>
        <button className="border border-orange-400 px-4 py-1 rounded text-orange-500 hover:bg-orange-400 hover:text-white transition">
          View All
        </button>
      </div>

      <Slider {...settings}>
        {foodData.map((food) => (
          <div key={food.id} className="px-2">
            <div className="bg-white rounded-lg shadow relative">
              <div className="relative">
                <img
                  src={food.img}
                  alt={food.name}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                  {food.discount}
                </span>
                <button className="absolute top-2 right-2 text-orange-500">
                  <FaRegHeart size={20} />
                </button>
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm mb-1">{food.name}</h3>
                <p className="text-gray-500 text-xs mb-2">Burger King</p>
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <span>{food.time}</span>
                  <span className="mx-1">•</span>
                  <span>802</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaStar className="text-orange-400 mr-1" />
                    <span className="text-sm">{food.rating}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-orange-500 font-semibold mr-1">
                      {food.price}
                    </span>
                    <span className="line-through text-gray-400">
                      {food.oldPrice}
                    </span>
                  </div>
                </div>
              </div>
              <button className="absolute bottom-2 right-2 bg-orange-500 text-white rounded-full p-2">
                <FaPlus />
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer text-orange-500"
      onClick={onClick}
    >
      ➤
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
      ➤
    </div>
  );
}

export default PopularFood;
