import Banner from "./components/Banner";
import Category from "./components/Category";

export default function Home() {
  return (
  <main className="bg-[#FDF0E9] min-h-screen w-full max-w-[1440px] mx-auto">
    <Banner />
    <Category />
  </main>
  );
}
