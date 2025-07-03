import { Poppins, Lobster_Two } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const lobster = Lobster_Two({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Next Food App",
  description: "My Food Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#fdf0e9] min-h-screen`}>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar /> 
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
