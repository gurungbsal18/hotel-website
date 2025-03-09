import { Button } from "@heroui/button";
import Image from "next/image";
import React from "react";

export default function RestaurantAndBarSection() {
  return (
    <div className="container pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        <div className="col-span-6 rounded-md overflow-hidden shadow-lg">
          <Image
            src="/assests/hotel-restaurant.webp"
            alt="hotel restaurant"
            height={1080}
            width={1920}
          />
        </div>
        <div className="col-span-6 flex flex-col gap-4">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold text-primary uppercase text-center lg:text-start">
            Restaurant And Bars
          </h2>
          <p className="lg:text-justify text-center">
            Enjoy the diverse and convenient culinary offerings available at our
            hotel. Our on-site restaurants cater to all tastes and appetites,
            with The Fun Café and The Coffee Shop serving up delicious dishes
            from breakfast to dinner. For a serene dining experience, head to
            our rooftop restaurant, The Terrace Garden.
          </p>
          <p className="lg:text-justify text-center">
            Satisfy your sweet tooth with delightful treats at The Pastry Shop
            or unwind with your preferred beverage at The Lobby Bar. For those
            who prefer dining in the privacy of their own room, we offer 24-hour
            room service.
          </p>
          <Button color="primary" radius="sm" size="lg">
            View Detail
          </Button>
        </div>
      </div>
    </div>
  );
}
