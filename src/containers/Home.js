// Init
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// Importing Components
import Header from "../components/Header";
import JoinSection from "../components/JoinSection";
import Navbar from "../components/Navbar";
import VocalSection from "../components/VocalSection";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import PopUp from "../components/PopUp";

// Home Component
export default function Home() {
  let { search } = useLocation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 1880,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const query = new URLSearchParams(search);
    const paramQuery = query.get("q");
    if (paramQuery === "app") {
      scrollToTop();
    }
  });
  return (
    <div>
      <Navbar />
      <Header />
      <Slider />
      <JoinSection />
      <VocalSection />
      <Footer />
    </div>
  );
}
