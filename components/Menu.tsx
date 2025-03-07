import { Button } from "@heroui/button";
import Image from "next/image";
import React from "react";
import { ThemeSwitch } from "./theme-switch";

export default function Menu() {
  const menuItem = [
    {
      title: "Our Rooms",
    },
    {
      title: "About us",
    },
    {
      title: "Contact us",
    },
  ];
  return (
    <div className="container py-5">
      <div className="flex justify-between items-center">
        <Image src="/Hotel-logo.svg" alt="Hotel Logo" height={100} width={67} />
        <ul className="flex gap-2 items-center">
          {menuItem.map((list, index) => (
            <li key={index} className="text-primary">
              {list.title}
            </li>
          ))}
        </ul>
        <div className="flex gap-2 items-center">
          <Button color="primary" radius="sm">
            Explore Rooms
          </Button>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}
