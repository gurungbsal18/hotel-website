import { Button } from "@heroui/button";
import React from "react";
import RoomCards from "./RoomCards";

export default function AccommodationSection() {
  return (
    <div className="container py-16">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-primary uppercase">
            Accommodation
          </h1>
          <Button color="primary" size="lg" radius="sm">
            Explore Rooms
          </Button>
        </div>
        <p>
          Indulge in elegance and relaxation as you step into our beautiful
          appointed rooms and suites. Whether you’re for business or leisure,
          our accommodations offer the perfect blend of modern amenities and
          classic charm. From cozy standard rooms to spacious with breathtaking
          view, we have a space to suit every traveler’s needs.
        </p>
      </div>

      <div className="pt-16">
        <RoomCards />
      </div>
    </div>
  );
}
