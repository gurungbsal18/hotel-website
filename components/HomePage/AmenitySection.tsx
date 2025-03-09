import AmenitiesData from "@/app/api/AmenitiesData";
import React from "react";

export default function AmenitySection() {
  return (
    <div className="container bg-primary-50 mt-20 py-16">
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
        <div className="px-16 md:px-0 flex flex-col gap-8">
          <h4 className="text-4xl text-primary font-extrabold uppercase">
            Aminities
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-12">
            {AmenitiesData.map((list) => (
              <div
                key={list.id}
                className="flex gap-1 items-center col-span-1 md:col-span-6 lg:col-span-3 py-4"
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
