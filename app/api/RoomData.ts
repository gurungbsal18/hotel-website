interface HotelRoomProps {
    id: number,
    roomType: string,
    price:number,
    image: string,
    amminity : {
        wifi: boolean,
        hotShower: boolean,
        bed: number,
        balcony: boolean
    }
}

export const HotelRoomData: HotelRoomProps[] = [
    {
        id:1,
        roomType: "Deluxe Room",
        price: 4500,
        image: "/room-images/deluxe-room.webp",
        amminity: {
            wifi: true,
            hotShower: true,
            bed: 1,
            balcony: true
        }
    },
    {
        id:2,
        roomType: "Twin Room",
        price: 2500,
        image: "/room-images/twin-room.webp",
        amminity: {
            wifi: false,
            hotShower: true,
            bed: 2,
            balcony: false
        }
    },
    {
        id:3,
        roomType: "Suite Room",
        price: 6500,
        image: "/room-images/suite-room.webp",
        amminity: {
            wifi: true,
            hotShower: true,
            bed: 1,
            balcony: true
        }
    },
]