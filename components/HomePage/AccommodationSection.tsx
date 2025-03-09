import { Button } from "@heroui/button";
import React from "react";
import RoomCards from "./RoomCards";

export default function AccommodationSection() {
  return (
    <div className="container py-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold text-primary uppercase">
            Accommodation
          </h1>
          <Button
            color="primary"
            size="lg"
            radius="sm"
            className="hidden md:block"
          >
            Explore Rooms
          </Button>
        </div>
        <p className="text-center md:text-left">
          Indulge in elegance and relaxation as you step into our beautiful
          appointed rooms and suites. Whether you’re for business or leisure,
          our accommodations offer the perfect blend of modern amenities and
          classic charm. From cozy standard rooms to spacious with breathtaking
          view, we have a space to suit every traveler’s needs.
        </p>
        <Button
          color="primary"
          size="lg"
          radius="sm"
          className="block md:hidden"
        >
          Explore Rooms
        </Button>
      </div>

      <div className="pt-16">
        <RoomCards />
      </div>
    </div>
  );
}
