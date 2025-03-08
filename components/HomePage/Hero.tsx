import { Button } from "@heroui/button";
import { DateRangePicker } from "@heroui/date-picker";
import { Input } from "@heroui/input";
import Image from "next/image";
import React from "react";

export default function Hero() {
  const title = "BOOK A ROOM TO REMEMBER";
  const subtitle =
    "Discover a world of comfort, luxury, and unparallel hospitality at our hotel. Nestled in the heart of city, our exquisite hotel is your home away from home, where every stay is a memorable experience";
  return (
    <>
      <div className="container grid grid-cols-12 items-center gap-24 py-28 hero-section">
        <div className="col-span-6 flex gap-8 flex-col">
          <h1 className="text-6xl font-extrabold text-primary">{title}</h1>
          <p>{subtitle}</p>
          <div className="flex gap-6">
            <Button radius="sm" size="lg" color="primary">
              Book your stay now
            </Button>
            <Button radius="sm" size="lg" color="primary" variant="flat">
              Contact us
            </Button>
          </div>
        </div>
        <div className="col-span-6">
          <Image
            src="/room-images/hotel-hero.webp"
            alt="Hotel room"
            height={1920}
            width={1080}
          />
        </div>
      </div>
      <div className="bg-primary-50 py-8">
        <div className="container flex gap-8">
          <DateRangePicker
            size="sm"
            label="Stay duration"
            labelPlacement="inside"
          />
          <Input type="number" size="sm" label="Adult" placeholder="0" />
          <Input type="number" size="sm" label="Children" placeholder="0" />
          <Button size="lg" radius="sm" color="primary">
            Search
          </Button>
        </div>
      </div>
    </>
  );
}
