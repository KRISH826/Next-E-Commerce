import Image from "next/image";
import Hero from "./components/Hero";
import NewProduct from "./components/NewProduct";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <NewProduct />
    </div>
  );
}
