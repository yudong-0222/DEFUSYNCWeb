import type { Metadata } from "next";
import Hero from "./section/Hero";
import About from "./section/About";
import Navbar from "./components/Navbar";
import Modes from "./section/Modes";
import Map from "./section/Map";
import Join from "./section/Join";
import Footer from "./section/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Modes />
      <Map />
      <Join />
      <Footer />
    </>
  );
}
