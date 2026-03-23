import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ForWhom from "./components/ForWhom";
import WhatIncludes from "./components/WhatIncludes";
import Transformation from "./components/Transformation";
import Program from "./components/Program";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ForWhom />
        <WhatIncludes />
        <Transformation />
        <Program />
        <About />
        <Reviews />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
