
import { PiCallBellLight } from "react-icons/pi";
import { MdOutlineTv } from "react-icons/md";
import { IconType } from "react-icons";
import { CiCreditCard1 } from "react-icons/ci";
import { TbYoga } from "react-icons/tb";
import { FiWifi } from "react-icons/fi";
import { LuCircleParking } from "react-icons/lu";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { FaPeopleLine } from "react-icons/fa6";
import { MdOutlinePool } from "react-icons/md";
import { MdOutlineDinnerDining } from "react-icons/md";
import { TbMassage } from "react-icons/tb";

interface AmenitiesDataProps {
    id: number;
    title: string;
    icon: IconType;
}

const AmenitiesData: AmenitiesDataProps[] = [
    {
        id: 1,
        title: "Room Service",
        icon: PiCallBellLight,
    },
    {
        id: 2,
        title: "Television",
        icon: MdOutlineTv,
    },
    {
        id: 3,
        title: "Digital Key",
        icon: CiCreditCard1,
    },
    {
        id: 4,
        title: "Fitness Center",
        icon: TbYoga
    },
    {
        id: 5,
        title: "Free WiFi Access",
        icon: FiWifi
    },
    {
        id: 6,
        title: "Free Parking",
        icon: LuCircleParking,
    },
    {
        id: 7,
        title: "Laundry",
        icon: MdOutlineLocalLaundryService,
    },
    {
        id: 8,
        title: "Meeting Facilities",
        icon: FaPeopleLine,
    },
    {
        id: 9,
        title: "Self Parking",
        icon: LuCircleParking,
    },
    {
        id: 10,
        title: "Pool",
        icon: MdOutlinePool,
    },
    {
        id: 10,
        title: "Restaurant On-Site",
        icon: MdOutlineDinnerDining,
    },
    {
        id: 10,
        title: "Spa",
        icon: TbMassage,
    },
];

export default AmenitiesData;