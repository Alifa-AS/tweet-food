import React from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-['poppins'] bg-[#fdf0e9] min-h-screen">
        
        {children}
      </body>
    </html>
  );
}
