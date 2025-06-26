"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <div>
      <div className="p-2 bg-[#ED6923] text-white text-center text-sm">
        Free Delivery on Your First Order – Order Now!
      </div>
      <nav className="px-10 py-6 bg-white flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold text-[#ED6923]">TweetFood</h1>
        <img
          src="/profile.jpg"
          alt="profile"
          onClick={() => router.push("/profile")}
          className="w-10 h-10 object-cover rounded-full cursor-pointer border-2 border-orange-500"
        />
      </nav>
    </div>
  );
}
