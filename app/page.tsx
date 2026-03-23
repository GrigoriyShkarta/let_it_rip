import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import SoundExamples from "./components/SoundExamples";
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
        <SoundExamples />
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
