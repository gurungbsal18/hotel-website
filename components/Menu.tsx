import React from "react";
import Image from "next/image";

import { Button } from "@heroui/button";
import { ThemeSwitch } from "./theme-switch";
import Link from "next/link";

export default function Menu() {
  const menuItem = [
    {
      title: "Our Rooms",
      link: "/room",
    },
    {
      title: "Restaurant",
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
        <Link href="/">
          <Image
            src="/Hotel-logo.svg"
            alt="Hotel Logo"
            height={100}
            width={67}
          />
        </Link>
        <ul className="lg:flex gap-32 items-center hidden">
          {menuItem.map((list, index) => (
            <Link href={list?.link || ""}>
              <li key={index} className="text-primary">
                {list.title}
              </li>
            </Link>
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
