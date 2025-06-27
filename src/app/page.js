import Banner from "./components/Banner";
import Category from "./components/Category";
import Experience from "./components/Experience";
import PopularFood from "./components/PopularFood";
import PopularRestaurant from "./components/PopularRestaurent";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
  <main className="bg-[#FDF0E9] min-h-screen w-full max-w-[1440px] mx-auto">
    <Banner />
    <Category />
    <PopularFood />
    <PopularRestaurant />
    <Experience />
    <Testimonial />
  </main>
  );
}
