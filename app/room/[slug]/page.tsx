"use client";
import React, { useState } from "react";
import Image from "next/image";
import { HotelRoomData } from "@/app/api/RoomData";
import { Button } from "@heroui/button";
import { notFound } from "next/navigation";
import Typewriter from "typewriter-effect";
import {
  MdOutlinePets,
  MdOutlineTv,
  MdOutlineLocalLaundryService,
  MdOutlineDinnerDining,
  MdOutlineBreakfastDining,
  MdOutlineBathtub,
} from "react-icons/md";
import { FiWifi } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { TbFridge, TbAirConditioning } from "react-icons/tb";
import { GiCoffeePot } from "react-icons/gi";

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

      <div className="rounded-lg shadow-lg mt-32">
        <h4 className="text-primary text-4xl font-bold mb-4">Amenities</h4>
        <div className="grid grid-cols-12 gap-8 bg-primary-50 p-16">
          <span
            className={`flex gap-2 items-center col-span-12 md:col-span-6 lg:col-span-3 ${room.amenity.wifi ? "" : "line-through text-red-500"}`}
          >
            <FiWifi className="flex-shrink-0 text-primary" size={24} />
            WiFi
          </span>
          <span
            className={`flex gap-2 items-center col-span-12 md:col-span-6 lg:col-span-3 ${room.amenity.teleVision ? "" : "line-through text-red-500"}`}
          >
            <MdOutlineTv className="flex-shrink-0 text-primary" size={24} />
            Television
          </span>
          <span className="flex items-center gap-2 col-span-12 md:col-span-6 lg:col-span-3">
            <IoBedOutline className="flex-shrink-0 text-primary" size={24} />{" "}
            Bed: {room.amenity.bed}
          </span>
          <span
            className={`flex gap-2 items-center col-span-12 md:col-span-6 lg:col-span-3 ${room.amenity.digitalKey ? "" : "line-through text-red-500"}`}
          >
            <CiCreditCard1 className="flex-shrink-0 text-primary" size={24} />
            Digital Key
          </span>
          <span
            className={`flex gap-2 items-center col-span-12 md:col-span-6 lg:col-span-3 ${room.amenity.miniBar ? "" : "line-through text-red-500"}`}
          >
            <TbFridge className="flex-shrink-0 text-primary" size={24} />
            Mini Bar
          </span>
          <span
            className={`flex gap-2 items-center col-span-12 md:col-span-6 lg:col-span-3 ${room.amenity.coffeeMaker ? "" : "line-through text-red-500"}`}
          >
            <GiCoffeePot className="flex-shrink-0 text-primary" size={24} />
            Coffee Maker
          </span>
          <span
            className={`flex gap-2 items-center col-span-12 md:col-span-6 lg:col-span-3 ${room.amenity.laundry ? "" : "line-through text-red-500"}`}
          >
            <MdOutlineLocalLaundryService
              className="flex-shrink-0 text-primary"
              size={24}
            />
            Laundry
          </span>
          <span
            className={`flex gap-2 items-center col-span-12 md:col-span-6 lg:col-span-3 ${room.amenity.pets ? "" : "line-through text-red-500"}`}
          >
            <MdOutlinePets className="flex-shrink-0 text-primary" size={24} />
            Pets
          </span>
          <span
            className={`flex gap-2 items-center col-span-12 md:col-span-6 lg:col-span-3 ${room.amenity.breakfast ? "" : "line-through text-red-500"}`}
          >
            <MdOutlineBreakfastDining
              className="flex-shrink-0 text-primary"
              size={24}
            />
            Breakfast
          </span>
          <span
            className={`flex gap-2 items-center col-span-12 md:col-span-6 lg:col-span-3 ${room.amenity.dinner ? "" : "line-through text-red-500"}`}
          >
            <MdOutlineDinnerDining
              className="flex-shrink-0 text-primary"
              size={24}
            />
            Dinner
          </span>
          <span
            className={`flex gap-2 items-center col-span-12 md:col-span-6 lg:col-span-3 ${room.amenity.hotShower ? "" : "line-through text-red-500"}`}
          >
            <MdOutlineBathtub
              className="flex-shrink-0 text-primary"
              size={24}
            />
            Hot Shower
          </span>
          <span
            className={`flex gap-2 items-center col-span-12 md:col-span-6 lg:col-span-3 ${room.amenity.airCondition ? "" : "line-through text-red-500"}`}
          >
            <TbAirConditioning
              className="flex-shrink-0 text-primary"
              size={24}
            />
            AC
          </span>
        </div>
      </div>

      <div className="mt-32">
        <h4 className="text-4xl text-primary font-bold">Gallery</h4>

        <div className="mt-8 gap-4 grid grid-cols-12 room-gallery-slider">
          {room.gallery?.map((list, index) => (
            <div key={index} className="col-span-3">
              <Image src={list} alt="images" height={300} width={300} />
            </div>
          ))}
        </div>
      </div>

      {/* <GallerySlider /> */}
    </div>
  );
}
