import Image from "next/image";
import React from "react";
import { FaPlaneArrival } from "react-icons/fa6";

export default function Location() {
  return (
    <div className="container pt-16">
      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-6 flex flex-col gap-4 text-justify">
          <h2 className="text-4xl font-extrabold text-primary uppercase">
            How To Find Our Hotel
          </h2>
          <p>
            Let us be your hosts as you can create cherished memories and
            discover the true essence . Book your stay with us today and open
            the door to a world of comfort, charm, and heartfelt hospitality.
          </p>
          <div className="flex items-center gap-4">
            <FaPlaneArrival className="text-5xl text-primary" />
            <div className="flex flex-col">
              <p className="text-primary font-bold">
                31 Kilometers From Airport
              </p>
              <p>
                The drive from the Airport to Hotel takes approximately 45
                minutes.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-6 rounded-md overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7064.147533277554!2d85.3071212431779!3d27.715008604712473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fcb77fd4bd%3A0x58099b1deffed8d4!2sThamel%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1741516992969!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
