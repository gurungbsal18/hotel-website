interface HotelRoomProps {
    id: number,
    roomType: string,
    slug: string,
    price:number,
    isDiscount?: number,
    discountPercent?: number,
    image: string,
    amminity : {
        wifi: boolean,
        teleVision: boolean,
        bed: string,
    },
    detail?: {
        para1: string,
        para2?: string,
    }
}

export const HotelRoomData: HotelRoomProps[] = [
    {
        id:1,
        roomType: "Suite Room",
        slug: 'suite-room',
        price: 7200,
        isDiscount: 8000,
        discountPercent: 10,
        image: "/room-images/suite-room.webp",
        amminity: {
            wifi: true,
            teleVision: true,
            bed: "1 King",
        },
        detail: {
            para1: "Enjoy the diverse and convenient culinary offerings available at our hotel. Our on-site restaurants cater to all tastes and appetites, with The Fun Café and The Coffee Shop serving up delicious dishes from breakfast to dinner. For a serene dining experience, head to our rooftop restaurant, The Terrace Garden.",
            para2: "Satisfy your sweet tooth with delightful treats at The Pastry Shop or unwind with your preferred beverage at The Lobby Bar. For those who prefer dining in the privacy of their own room, we offer 24-hour room service."
        },
    },
    {
        id:2,
        roomType: "Deluxe Room",
        slug: 'deluxe-room',
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
        slug: 'twin-room',
        price: 2500,
        image: "/room-images/twin-room.webp",
        amminity: {
            wifi: false,
            teleVision: false,
            bed: "2 beds",
        }
    },
]