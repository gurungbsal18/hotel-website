import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="bg-primary flex flex-col justify-center items-center gap-8 text-white py-16 mt-16">
        <div className="flex flex-col gap-2 justify-center items-center w-3/6">
          <Image src="/Hotel-logo.svg" alt="hotel" width={100} height={100} />
          <p className="text-center">
            Welcome to our exquisite Hotel, where relaxation meets luxury, and
            every moment is a seaside dream come true.
          </p>
        </div>
        <div className="grid grid-cols-12 w-full">
          <span className="col-span-4 flex flex-col justify-center items-center gap-1">
            <p className="font-bold">Address</p>
            <p>Kathmandu, Nepal</p>
          </span>
          <span className="col-span-4 flex flex-col justify-center items-center gap-1">
            <p className="font-bold">Contact</p>
            <p>+977 1234567890</p>
          </span>
          <span className="col-span-4 flex flex-col justify-center items-center gap-1">
            <p className="font-bold">Follow</p>
            <span className="flex gap-2 items-center">
              <FaFacebook />
              <FaInstagram />
              <TfiYoutube />
              <FaLinkedinIn />
            </span>
          </span>
        </div>
      </div>
      <div className="py-2 text-primary">
        <div className="container flex justify-between">
          <p className="text-xs">&copy; Hotel {currentYear}</p>
          <p className="text-xs">Design/Develop By: Bishal Gurung</p>
        </div>
      </div>
    </>
  );
}
