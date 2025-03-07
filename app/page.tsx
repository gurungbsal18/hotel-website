import Image from "next/image";
import { HotelRoomData } from "./api/RoomData";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { IoWifiSharp } from "react-icons/io5";
import HomePageCheckInSection from "@/components/HomePageCheckInSection";

export default function Home() {
  return (
    <>
      {HotelRoomData ? (
        <div className="grid grid-cols-12 gap-5 ">
          {HotelRoomData.map((list) => (
            <div
              key={list.id}
              className="col-span-4 bg-gray-700 rounded-md shadow-x room-card"
            >
              <Image
                src={list.image}
                alt={list.roomType}
                height={300}
                width={300}
              />
              <div className="room-card-content px-5 py-2">
                <div className="flex justify-between text-sm bg-blue-200 px-4 py-2 rounded-md text-black">
                  <p className="flex items-center gap-1">
                    <IoBedOutline />
                    {list.amminity.bed}
                  </p>
                  <p className="flex items-center gap-1">
                    <PiBathtub />
                    {`${list.amminity.hotShower ? "Yes" : "No"}`}
                  </p>
                  <p className="flex items-center gap-1">
                    <IoWifiSharp /> {`${list.amminity.wifi ? "Yes" : "No"}`}
                  </p>
                </div>

                <p>Price: NPR {list.price} / Night</p>
                <p>Type: {list.roomType}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>No Data</>
      )}

      <HomePageCheckInSection />
    </>
  );
}
