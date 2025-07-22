import React from "react";

export default function ProfileLayout({ children }) {
  return (
      <div className="font-['poppins'] bg-[#fdf0e9] min-h-screen">
        
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
  );
}
