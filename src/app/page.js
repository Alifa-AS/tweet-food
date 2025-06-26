import Image from "next/image";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
  <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
    <Banner />
  </main>
  );
}
