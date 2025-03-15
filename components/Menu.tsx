"use client";
import React from "react";
import Image from "next/image";

import { Button } from "@heroui/button";
import { ThemeSwitch } from "./theme-switch";
import Link from "next/link";
import { easeIn, motion } from "framer-motion";

export default function Menu() {
  const svgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const pathVariants = {
    hidden: {
      // opacity: 0,
      strokeDashoffset: 1000,
    },
    visible: {
      // opacity: 1,
      strokeDashoffset: 0,
      transition: {
        duration: 5,
        ease: "easeInOut",
      },
    },
  };

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
        {/* <Link href="/">
          <Image
            src="/Hotel-logo.svg"
            alt="Hotel Logo"
            height={100}
            width={67}
          />
        </Link> */}

        <Link href="/">
          <motion.svg
            width="96"
            height="56"
            viewBox="0 0 296 296"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.g variants={svgVariants} clip-path="url(#clip0_34_596)">
              <motion.path
                d="M0 295.238H71.429V285.714H9.524V128.571H71.429V119.048H0V295.238Z"
                stroke="#333333" // Use stroke instead of fill
                strokeWidth="4" // Define stroke thickness
                strokeDasharray="1000" // Match this to the initial strokeDashoffset
                variants={pathVariants}
              />
              <motion.path
                d="M223.809 119.048V128.571H285.714V285.714H223.809V295.238H295.238V119.048H223.809Z"
                stroke="#333333" // Use stroke instead of fill
                strokeWidth="4" // Define stroke thickness
                strokeDasharray="1000" // Match this to the initial strokeDashoffset
                variants={pathVariants}
              />
              <motion.path
                d="M52.3811 142.857H23.8101V171.428H52.3811V142.857ZM42.8571 161.905H33.3331V152.381H42.8571V161.905Z"
                stroke="#333333" // Use stroke instead of fill
                strokeWidth="4" // Define stroke thickness
                strokeDasharray="1000" // Match this to the initial strokeDashoffset
                variants={pathVariants}
              />
              <motion.path
                d="M52.3811 185.714H23.8101V214.285H52.3811V185.714ZM42.8571 204.762H33.3331V195.238H42.8571V204.762Z"
                stroke="#333333" // Use stroke instead of fill
                strokeWidth="4" // Define stroke thickness
                strokeDasharray="1000" // Match this to the initial strokeDashoffset
                variants={pathVariants}
              />
              <motion.path
                d="M23.8101 257.143H52.3811V228.572H23.8101V257.143ZM33.3331 238.095H42.8571V247.619H33.3331V238.095Z"
                stroke="#333333" // Use stroke instead of fill
                strokeWidth="4" // Define stroke thickness
                strokeDasharray="1000" // Match this to the initial strokeDashoffset
                variants={pathVariants}
              />
              <motion.path
                d="M271.428 142.857H242.857V171.428H271.428V142.857ZM261.905 161.905H252.381V152.381H261.905V161.905Z"
                stroke="#333333" // Use stroke instead of fill
                strokeWidth="4" // Define stroke thickness
                strokeDasharray="1000" // Match this to the initial strokeDashoffset
                variants={pathVariants}
              />
              <motion.path
                d="M242.857 214.286H271.428V185.715H242.857V214.286ZM252.381 195.238H261.905V204.762H252.381V195.238Z"
                stroke="#333333" // Use stroke instead of fill
                strokeWidth="4" // Define stroke thickness
                strokeDasharray="1000" // Match this to the initial strokeDashoffset
                variants={pathVariants}
              />
              <motion.path
                d="M242.857 257.143H271.428V228.572H242.857V257.143ZM252.381 238.095H261.905V247.619H252.381V238.095Z"
                stroke="#333333" // Use stroke instead of fill
                strokeWidth="4" // Define stroke thickness
                strokeDasharray="1000" // Match this to the initial strokeDashoffset
                variants={pathVariants}
              />
              <motion.path
                d="M228.571 295.238H66.667V38.095H228.572L228.571 295.238Z"
                fill="#F9BA48"
                variants={pathVariants}
              />
              <motion.path
                d="M223.809 9.524V0H214.286H209.524H85.7142H80.9522H71.4292V9.524H80.9522V42.857H90.4762V9.524H204.762V42.857H214.286V9.524H223.809Z"
                stroke="#333333" // Use stroke instead of fill
                strokeWidth="4" // Define stroke thickness
                strokeDasharray="1000" // Match this to the initial strokeDashoffset
                variants={pathVariants}
              />
              <motion.path
                d="M119.048 61.905H90.4761V90.476H119.047L119.048 61.905ZM109.524 80.952H100V71.428H109.524V80.952Z"
                stroke="#333333" // Use stroke instead of fill
                strokeWidth="4" // Define stroke thickness
                strokeDasharray="1000" // Match this to the initial strokeDashoffset
                variants={pathVariants}
              />
              <motion.path
                d="M161.905 61.905H133.334V90.476H161.905V61.905ZM152.381 80.952H142.857V71.428H152.381V80.952Z"
                stroke="#333333" // Use stroke instead of fill
                strokeWidth="4" // Define stroke thickness
                strokeDasharray="1000" // Match this to the initial strokeDashoffset
                variants={pathVariants}
              />
              <motion.path
                d="M204.762 61.905H176.19V90.476H204.761L204.762 61.905ZM195.238 80.952H185.714V71.428H195.238V80.952Z"
                stroke="#333333" // Use stroke instead of fill
                strokeWidth="4" // Define stroke thickness
                strokeDasharray="1000" // Match this to the initial strokeDashoffset
                variants={pathVariants}
              />
              <motion.path
                d="M195.238 209.524H99.9999H95.2379H85.7139V219.048H95.2379V295.238H200V219.048H209.524V209.524H200H195.238ZM104.762 219.048H142.857V238.096H138.095C130.219 238.096 123.809 244.506 123.809 252.382C123.809 260.258 130.219 266.668 138.095 266.668H142.857V285.716H104.762V219.048ZM142.857 257.143H138.095C135.471 257.143 133.333 255.01 133.333 252.381C133.333 249.752 135.471 247.619 138.095 247.619H142.857V257.143ZM152.381 247.619H157.143C159.767 247.619 161.905 249.752 161.905 252.381C161.905 255.01 159.767 257.143 157.143 257.143H152.381V247.619ZM190.476 285.714H152.381V266.666H157.143C165.019 266.666 171.429 260.256 171.429 252.38C171.429 244.504 165.019 238.094 157.143 238.094H152.381V219.046H190.476V285.714Z"
                stroke="#333333" // Use stroke instead of fill
                strokeWidth="4" // Define stroke thickness
                strokeDasharray="1000" // Match this to the initial strokeDashoffset
                variants={pathVariants}
              />
              <motion.path
                d="M90.4761 133.333H119.047V104.762H90.4761V133.333ZM100 114.286H109.524V123.81H100V114.286Z"
                stroke="#333333" // Use stroke instead of fill
                strokeWidth="4" // Define stroke thickness
                strokeDasharray="1000" // Match this to the initial strokeDashoffset
                variants={pathVariants}
              />
              <motion.path
                d="M133.333 133.333H161.904V104.762H133.333V133.333ZM142.857 114.286H152.381V123.81H142.857V114.286Z"
                stroke="#333333" // Use stroke instead of fill
                strokeWidth="4" // Define stroke thickness
                strokeDasharray="1000" // Match this to the initial strokeDashoffset
                variants={pathVariants}
              />
              <motion.path
                d="M176.19 133.333H204.761V104.762H176.19V133.333ZM185.714 114.286H195.238V123.81H185.714V114.286Z"
                stroke="#333333" // Use stroke instead of fill
                strokeWidth="4" // Define stroke thickness
                strokeDasharray="1000" // Match this to the initial strokeDashoffset
                variants={pathVariants}
              />
              <motion.path
                d="M90.4761 176.19H119.047V147.619H90.4761V176.19ZM100 157.143H109.524V166.667H100V157.143Z"
                stroke="#333333" // Use stroke instead of fill
                strokeWidth="4" // Define stroke thickness
                strokeDasharray="1000" // Match this to the initial strokeDashoffset
                variants={pathVariants}
              />
              <motion.path
                d="M133.333 176.19H161.904V147.619H133.333V176.19ZM142.857 157.143H152.381V166.667H142.857V157.143Z"
                stroke="#333333" // Use stroke instead of fill
                strokeWidth="4" // Define stroke thickness
                strokeDasharray="1000" // Match this to the initial strokeDashoffset
                variants={pathVariants}
              />
              <motion.path
                d="M176.19 176.19H204.761V147.619H176.19V176.19ZM185.714 157.143H195.238V166.667H185.714V157.143Z"
                stroke="#333333" // Use stroke instead of fill
                strokeWidth="4" // Define stroke thickness
                strokeDasharray="1000" // Match this to the initial strokeDashoffset
                variants={pathVariants}
              />
              <motion.path
                d="M190.476 190.476H85.7139V200H190.476V190.476Z"
                stroke="#333333" // Use stroke instead of fill
                strokeWidth="4" // Define stroke thickness
                strokeDasharray="1000" // Match this to the initial strokeDashoffset
                variants={pathVariants}
              />
              <motion.path
                d="M209.524 190.476H200V200H209.524V190.476Z"
                stroke="#333333" // Use stroke instead of fill
                strokeWidth="4" // Define stroke thickness
                strokeDasharray="1000" // Match this to the initial strokeDashoffset
                variants={pathVariants}
              />
            </motion.g>
            <defs>
              <clipPath id="clip0_34_596">
                <rect width="295.238" height="295.238" fill="white" />
              </clipPath>
            </defs>
          </motion.svg>
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
          <Link href="/room">
            <Button color="primary" radius="sm">
              Explore Rooms
            </Button>
          </Link>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}
