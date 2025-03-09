import React from "react";
import Hero from "./Hero";
import AccommodationSection from "./AccommodationSection";
import RestaurantAndBarSection from "./RestaurantAndBarSection";
import AmenitySection from "./AmenitySection";
import Location from "./Location";

export default function HomePage() {
  return (
    <div className="">
      <Hero />
      <AccommodationSection />
      <RestaurantAndBarSection />
      <AmenitySection />
      <Location />
    </div>
  );
}
