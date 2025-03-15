interface HotelRoomProps {
    id: number,
    roomType: string,
    slug: string,
    price:number,
    isDiscount?: number,
    discountPercent?: number,
    image: string,
    amenity : {
        wifi: boolean,
        teleVision: boolean,
        bed: string,
    },
    detail?: {
        para1: string,
        para2?: string,
    },
    gallery?:
string[]
    
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
        amenity: {
            wifi: true,
            teleVision: true,
            bed: "1 King",
        },
        detail: {
            para1: "Enjoy the diverse and convenient culinary offerings available at our hotel. Our on-site restaurants cater to all tastes and appetites, with The Fun Café and The Coffee Shop serving up delicious dishes from breakfast to dinner. For a serene dining experience, head to our rooftop restaurant, The Terrace Garden.",
            para2: "Satisfy your sweet tooth with delightful treats at The Pastry Shop or unwind with your preferred beverage at The Lobby Bar. For those who prefer dining in the privacy of their own room, we offer 24-hour room service."
        },
        gallery: ["/room-images/suite-room.webp", "/room-images/suite-room/suite-room-1.webp", "/room-images/suite-room/suite-room-2.webp", "/room-images/suite-room/suite-room-3.webp", "/room-images/suite-room/suite-room-4.webp", ]
    },
    {
        id:2,
        roomType: "Deluxe Room",
        slug: 'deluxe-room',
        price: 4500,
        image: "/room-images/deluxe-room.webp",
        amenity: {
            wifi: true,
            teleVision: true,
            bed: "1 King",
        },
        detail: {
            para1: "Enjoy the luxurious and convenient dining options available with your Deluxe Room stay. Indulge in a variety of culinary delights at our on-site restaurants, with The Fun Café and The Coffee Shop serving delicious dishes from breakfast to dinner. For an elegant and serene dining experience, visit our rooftop restaurant, The Terrace Garden.",
            para2: "Satisfy your sweet cravings with delightful treats at The Pastry Shop, or relax with your favorite drink at The Lobby Bar. If you prefer to dine in the comfort of your Deluxe Room, take advantage of our 24-hour room service, delivering gourmet meals right to your door."
        },
        gallery: ["/room-images/deluxe-room.webp", "/room-images/deluxe-room/deluxe-room-1.webp", "/room-images/deluxe-room/deluxe-room-2.webp", "/room-images/deluxe-room/deluxe-room-3.webp", "/room-images/deluxe-room/deluxe-room-4.webp", ]
    },
    {
        id:3,
        roomType: "Twin Room",
        slug: 'twin-room',
        price: 2500,
        image: "/room-images/twin-room.webp",
        amenity: {
            wifi: false,
            teleVision: false,
            bed: "2 beds",
        },
        detail: {
            para1: "Enjoy a comfortable and convenient dining experience during your stay in our Twin Room. Savor a variety of delicious dishes at our on-site restaurants, with The Fun Café and The Coffee Shop serving up flavorful meals from breakfast to dinner. For a more tranquil setting, dine at our rooftop restaurant, The Terrace Garden.",
            para2: "Indulge in sweet delights from The Pastry Shop, or unwind with your favorite drink at The Lobby Bar. Prefer to dine in privacy? Our 24-hour room service ensures you can enjoy gourmet meals from the comfort of your Twin Room at any time."
        },
        gallery: ["/room-images/twin-room.webp", "/room-images/twin-room/twin-room-1.webp", "/room-images/twin-room/twin-room-2.webp", "/room-images/twin-room/twin-room-3.webp", "/room-images/twin-room/twin-room-4.webp", ]
    },
]