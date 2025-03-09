import React from "react";
import { HotelRoomData } from "@/app/api/RoomData";
import Image from "next/image";
import { FiWifi } from "react-icons/fi";
import { FiWifiOff } from "react-icons/fi";
import { MdOutlineTv } from "react-icons/md";
import { MdOutlineTvOff } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";

export default function RoomCards() {
  return (
    <div>
      {HotelRoomData ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {HotelRoomData.map((list) => (
            <div
              key={list.id}
              className="col-span-1 md:col-span-2 lg:col-span-4 bg-gray-50 shadow-md room-card relative"
            >
              <Image
                src={list.image}
                alt={list.roomType}
                height={300}
                width={300}
              />
              {list.discountPercent ? (
                <>
                  <p className="font-semibold text-xs px-6 py-1 bg-red-600 text-white rounded-full absolute top-2 right-4 shadow-sm shadow-white">
                    {list.discountPercent} % off
                  </p>
                </>
              ) : (
                ""
              )}
              <div className="p-2">
                <div className="flex justify-between items-center room-amminities">
                  <p className="flex gap-1 items-center">
                    <IoBedOutline />
                    {list.amminity.bed}
                  </p>
                  <p className="flex items-center gap-1">
                    {list.amminity.wifi ? (
                      <>
                        <FiWifi /> WiFi
                      </>
                    ) : (
                      <>
                        <FiWifiOff /> No WiFi
                      </>
                    )}
                  </p>
                  <p className="flex gap-1 items-center">
                    {list.amminity.teleVision ? (
                      <>
                        <MdOutlineTv /> Television
                      </>
                    ) : (
                      <>
                        <MdOutlineTvOff />
                        No Televosion
                      </>
                    )}
                  </p>
                </div>
                <div className="room-card-content py-2 flex flex-col gap-2">
                  <h4 className="text-2xl text-primary font-bold">
                    {list.roomType}
                  </h4>
                  <p>
                    <span className="font-bold">Price:</span> NRP{" "}
                    <span className="text-red-600 line-through">
                      {list?.isDiscount}
                    </span>{" "}
                    {list.price} /night
                  </p>
                </div>
              </div>
              <span className="bg-primary w-full flex justify-center text-white items-center py-2">
                Book Now
              </span>
            </div>
          ))}
        </div>
      ) : (
        <>No Rooms</>
      )}
    </div>
  );
}
