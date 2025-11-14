import Navbar from "./components/Navbar";
import Hero from "./components/herosection";
import About from "./components/aboutus";
import Products from "./components/product";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
    </>
  );
}
