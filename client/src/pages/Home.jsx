import React from "react";
import Hero from "../components/Hero";
import NewsLetter from "../components/NewsLetter";
import ExclusiveOffer from "../components/ExclusiveOffer";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import FeaturedDestination from "../components/FeaturedDestination";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDestination />
      <ExclusiveOffer />
      <Testimonial />
      <NewsLetter />
    </>
  );
};

export default Home;
