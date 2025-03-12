"use client";
import { HotelRoomData } from "@/app/api/RoomData";
import { Button } from "@heroui/button";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import Typewriter from "typewriter-effect";

interface RoomPageProps {
  params: Promise<{ slug: string }>;
}

export default async function page({ params }: RoomPageProps) {
  const { slug } = await params;
  const room = HotelRoomData.find((e) => e.slug === slug);

  if (!room) {
    notFound();
  }

  return (
    <div className="container">
      <div className="grid grid-cols-12 items-center gap-16 mt-16">
        <div className="col-span-12 lg:col-span-6">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold text-primary uppercase mb-3">
            <Typewriter
              options={{
                strings: [` ${room.roomType}`],
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
        <div className="col-span-12 lg:col-span-6">
          <Image
            src={room.image}
            alt={room.roomType}
            height={1920}
            width={1080}
            className="shadow-md rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
