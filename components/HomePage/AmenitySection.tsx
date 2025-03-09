import AmenitiesData from "@/app/api/AmenitiesData";
import React from "react";

export default function AmenitySection() {
  return (
    <div className="container bg-primary-50 mt-20">
      {/* {AmenitiesData.map((amenity) => {
        const IconComponent = amenity.icon;
        return (
          <div key={amenity.id}>
            <IconComponent size={24} />
            <span>{amenity.title}</span>
          </div>
        );
      })} */}

      {AmenitiesData ? (
        <div className="p-16 flex flex-col gap-8">
          <h4 className="text-4xl text-primary text-center font-extrabold uppercase">
            Aminities
          </h4>
          <div className="grid grid-cols-12">
            {AmenitiesData.map((list) => (
              <div
                key={list.id}
                className="flex gap-1 items-center col-span-3 py-4"
              >
                <span className="text-primary">{<list.icon />}</span>
                {list.title}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>No DAta</>
      )}
    </div>
  );
}
