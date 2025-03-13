"use client";
import { HotelRoomData } from "@/app/api/RoomData";
import GallerySlider from "@/components/GallerySlider";
import { Button } from "@heroui/button";
import Image from "next/image";
import { notFound } from "next/navigation";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";

interface RoomPageProps {
  params: Promise<{ slug: string }>;
}

export default function Page({ params }: RoomPageProps) {
  // Unwrapping params synchronously
  const resolvedParams = React.use(params);
  const { slug } = resolvedParams;

  const room = HotelRoomData.find((e) => e.slug === slug);
  if (!room) notFound();

  // Gallery State
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerView = 3;
  const totalImages = room.gallery ? room.gallery.length : 0;

  // Handlers for Next and Previous
  const nextHandle = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= totalImages - (imagesPerView - 1) ? 0 : prev + 1
    );
  };

  const prevHandle = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? totalImages - imagesPerView : prev - 1
    );
  };

  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-16 mt-16">
        <div className="col-span-1 lg:col-span-6">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold text-primary uppercase mb-3">
            <Typewriter
              options={{
                strings: [`${room.roomType}`],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="mb-3 text-justify">{room.detail?.para1}</p>
          <p className="mb-3 text-justify">{room.detail?.para2}</p>
          <Button color="primary" radius="sm">
            Book Your Stay Now
          </Button>
        </div>
        <div className="col-span-1 lg:col-span-6">
          <Image
            src={room.image}
            alt={room.roomType}
            height={1920}
            width={1080}
            className="shadow-md rounded-md sm:w-full"
          />
        </div>
      </div>

      {/* Room Gallery */}
      {/* {room.gallery && totalImages > 0 && (
        <div className="mt-16 text-center">
          <h4 className="text-4xl text-primary font-bold mb-5">Gallery</h4>
          <div className="flex justify-center items-center gap-5">
            <Button onPress={prevHandle}>Prev</Button>
            <div className="flex gap-4 overflow-hidden">
              {room.gallery
                .slice(currentIndex, currentIndex + imagesPerView)
                .map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`${room.roomType} Image ${currentIndex + index + 1}`}
                    height={250}
                    width={250}
                    className="rounded-md shadow-md"
                  />
                ))}
            </div>
            <Button onPress={nextHandle}>Next</Button>
          </div>
        </div>
      )} */}

      <GallerySlider />
    </div>
  );
}
