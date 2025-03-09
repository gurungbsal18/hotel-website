import RoomCards from "@/components/HomePage/RoomCards";
import React from "react";

export default function RoomPage() {
  return (
    <div className="container py-16">
      <div className="flex flex-col gap-2 text-center pb-8">
        <h1 className="text-4xl text-primary font-extrabold uppercase">
          Find Your Perfect Stay
        </h1>
        <p>
          Discover comfort and elegance in our carefully curated rooms. Whether
          you choose the luxurious Suite, the spacious Deluxe, or the cozy Twin
          Room, each space is designed to provide a relaxing and unforgettable
          experience. Book now and indulge in ultimate comfort!
        </p>
      </div>

      <RoomCards />
    </div>
  );
}
