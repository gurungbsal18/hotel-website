import Image from "next/image";
import { HotelRoomData } from "./api/RoomData";

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
                  <p>{`${list.amminity.balcony ? "balcony on" : "balcony off"}`}</p>
                  <p>{list.amminity.bed}</p>
                  <p>{`${list.amminity.hotShower ? "Hot shower on" : "Hot shower off"}`}</p>
                  <p>
                    wifi: {`${list.amminity.wifi ? "Wifi on" : "Wifi off"}`}
                  </p>
                </div>

                <p>Price: NPR {list.price}</p>
                <p>Type: {list.roomType}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>No Data</>
      )}
    </>
  );
}
