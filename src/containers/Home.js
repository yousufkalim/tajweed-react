// Init
import React from "react";

// Importing Components
import Header from "../components/Header";
import JoinSection from "../components/JoinSection";
import Navbar from "../components/Navbar";
import VocalSection from "../components/VocalSection";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

// Home Component
export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      {/* <Slider /> */}
      <JoinSection />
      <VocalSection />
      <Footer />
    </div>
  );
}
