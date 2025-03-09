interface HotelRoomProps {
    id: number,
    roomType: string,
    price:number,
    isDiscount?: number,
    discountPercent?: number,
    image: string,
    amminity : {
        wifi: boolean,
        teleVision: boolean,
        bed: string,
    }
}

export const HotelRoomData: HotelRoomProps[] = [
    {
        id:1,
        roomType: "Suite Room",
        price: 7200,
        isDiscount: 8000,
        discountPercent: 10,
        image: "/room-images/suite-room.webp",
        amminity: {
            wifi: true,
            teleVision: true,
            bed: "1 King",
        }
    },
    {
        id:2,
        roomType: "Deluxe Room",
        price: 4500,
        image: "/room-images/deluxe-room.webp",
        amminity: {
            wifi: true,
            teleVision: true,
            bed: "1 King",
        }
    },
    {
        id:3,
        roomType: "Twin Room",
        price: 2500,
        image: "/room-images/twin-room.webp",
        amminity: {
            wifi: false,
            teleVision: false,
            bed: "2 beds",
        }
    },
]