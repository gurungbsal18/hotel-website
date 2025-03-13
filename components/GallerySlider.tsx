"use client";
import { HotelRoomData } from "@/app/api/RoomData";
import Image from "next/image";
import React, { useState } from "react";

export default function GallerySlider() {
  const [currentImage, setCurrentImage] = useState(0);
  const imagesPerPage = 4; // Default to show 4 images
  const totalImages = HotelRoomData[0]?.gallery?.length || 0;

  // Handle Next Button (slides 1 image)
  const nextHandle = () => {
    setCurrentImage((prev) =>
      prev + 1 >= totalImages - imagesPerPage + 1 ? 0 : prev + 1
    );
  };

  // Handle Prev Button (slides 1 image)
  const prevHandle = () => {
    setCurrentImage((prev) =>
      prev - 1 < 0 ? totalImages - imagesPerPage : prev - 1
    );
  };

  // Dynamically adjust images per page based on screen width
  const imagesToShow = window.innerWidth <= 768 ? 1 : imagesPerPage;

  return (
    <>
      <h1 className="text-4xl font-bold text-primary mt-32 mb-5">Gallery</h1>

      <div className="room-gallery flex gap-4">
        {HotelRoomData && HotelRoomData.length > 0 ? (
          // Display a dynamic number of images based on the screen width
          HotelRoomData[0]?.gallery
            ?.slice(currentImage, currentImage + imagesToShow)
            .map((img, index) => (
              <div key={index} className="gallery-item rounded shadow-md">
                <Image src={img} alt="Room Image" height={300} width={300} />
              </div>
            ))
        ) : (
          <>No Data</>
        )}
      </div>

      <div className="gallery-controls flex justify-between">
        <button onClick={prevHandle}>Prev</button>
        <button onClick={nextHandle}>Next</button>
      </div>
    </>
  );
}
