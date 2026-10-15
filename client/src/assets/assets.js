import logo from "./logo.png";
import offer1 from "./offer1.jpg";
import offer2 from "./offer2.jpg";
import offer3 from "./offer3.jpg";
import room1 from "./room1.png";
import room2 from "./room2.jpg";
import uploadArea from "./uploadArea.jpg";
import regImage from "./regImage.png";
import room3 from "./room3.jpg";
import room4 from "./room4.jpg";
import room5 from "./room5.jpg";
import hero from "./hero.jpg";
import { MdCleaningServices, MdLocationOn, MdLogin } from "react-icons/md";
import {
  MdWifi,
  MdFreeBreakfast,
  MdRoomService,
  MdLandscape,
  MdPool,
} from "react-icons/md";

export const assets = {
  regImage,
  uploadArea,
  logo,
  hero,
};

export const cities = ["Bali", "Jogja", "Banda Neira", "Karimunjawa"];

export const exclusiveOffers = [
  {
    _id: 1,
    title: "Romantic Beach Escape",
    description:
      "Nikmati pengalaman menginap romantis dengan pemandangan laut, sarapan untuk dua orang, dan akses private beach.",
    priceOff: 25,
    expiryDate: "2026-10-15",
    image: offer1,
  },
  {
    _id: 2,
    title: "Weekend Getaway",
    description:
      "Dapatkan pengalaman liburan akhir pekan yang nyaman dengan kamar premium dan complimentary dinner.",
    priceOff: 20,
    expiryDate: "2026-10-20",
    image: offer2,
  },
  {
    _id: 3,
    title: "Family Holiday Package",
    description:
      "Paket liburan keluarga dengan kamar luas, sarapan untuk keluarga, dan akses ke seluruh fasilitas resort.",
    priceOff: 30,
    expiryDate: "2026-10-31",
    image: offer3,
  },
];

export const testimonials = [
  {
    id: "testimonial-001",
    name: "Andi Pratama",
    address: "Jakarta, Indonesia",
    image:
      "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    review:
      "Pengalaman menginap yang luar biasa! Kamarnya nyaman, bersih, dan pemandangan lautnya sangat indah. Pelayanannya juga ramah dan profesional.",
  },
  {
    id: "testimonial-002",
    name: "Olivia",
    address: "Singapore",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    review:
      "The family amenities are top-notch. My kids absolutely loved the infinity pool. The restaurant food was also delicious with authentic local dishes.",
  },
  {
    id: "testimonial-003",
    name: "Michael",
    address: "London, UK",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    review:
      "Perfect spot for a workcation. High-speed Wi-Fi, comfortable workspace, and the staff was extremely attentive to all my needs throughout my stay.",
  },
];

// Facility Icon
export const facilityIcons = {
  "Free Wifi": MdWifi,
  "Free Breakfast": MdFreeBreakfast,
  "Room Service": MdRoomService,
  "Mountain View": MdLandscape,
  "Pool Access": MdPool,
};

// for room details page
export const roomCommonData = [
  {
    icon: MdCleaningServices,
    title: "Clean and Safe Stay",
    description:
      "Nikmati kamar yang bersih, nyaman, dan aman dengan standar kebersihan terbaik untuk memastikan pengalaman menginap yang menyenangkan.",
  },
  {
    icon: MdCleaningServices,
    title: "Enhanced Cleaning",
    description:
      "Kamar dibersihkan secara menyeluruh dengan perhatian ekstra pada kebersihan dan kenyamanan setiap tamu.",
  },
  {
    icon: MdLocationOn,
    title: "Excellent Location",
    description:
      "Lokasi resort yang strategis memberikan akses mudah ke pantai, tempat wisata, restoran, dan berbagai fasilitas di sekitar resort.",
  },
  {
    icon: MdLogin,
    title: "Smooth Check-In",
    description:
      "Proses check-in yang cepat dan mudah sehingga kamu dapat langsung beristirahat dan menikmati suasana Azure Resort.",
  },
];

// Hotel Dummy data
export const hotelDummyData = {
  _id: "0747697321434",
  name: "Urbanza Resort",
  address: "Jl. Pantai Indah No. 88, Pecatu",
  contract: "+012345678",
  owner: {
    name: "Budi Santoso",
    image:
      "https://plus.unsplash.com/premium_photo-1719843013722-c2f4d69db940?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  city: "Bali",
  createdAt: "2026-09-01T08:30:00.000Z",
  updatedAt: "2026-10-02T09:00:00.000Z",
  __v: 0,
};

export const roomsDummyData = [
  {
    _id: "0747697321434",
    hotel: hotelDummyData,
    roomType: "Deluxe Ocean View",
    pricePerNight: 2500000,
    amenities: [
      "Free Wifi",
      "Free Breakfast",
      "Room Service",
      "Mountain View",
      "Pool Access",
    ],
    images: [room1, room2, room3, room4],
    isAvailable: true,
    createdAt: "2026-09-01T08:30:00.000Z",
    updatedAt: "2026-10-02T09:00:00.000Z",
    __v: 0,
  },
  {
    _id: "room-002",
    hotel: hotelDummyData,
    roomType: "Premium Garden View",
    pricePerNight: 1800000,
    amenities: ["Free Wifi", "Free Breakfast", "Room Service", "Pool Access"],
    images: [room3, room1, room2, room4],
    isAvailable: true,
    createdAt: "2026-09-02T09:15:00.000Z",
    updatedAt: "2026-10-01T10:30:00.000Z",
    __v: 0,
  },
  {
    _id: "room-003",
    hotel: hotelDummyData,
    roomType: "Luxury Pool Villa",
    pricePerNight: 4500000,
    amenities: [
      "Free Wifi",
      "Free Breakfast",
      "Room Service",
      "Pool Access",
      "Mountain View",
    ],
    images: [room2, room1, room3, room5],
    isAvailable: true,
    createdAt: "2026-09-05T11:00:00.000Z",
    updatedAt: "2026-10-02T08:45:00.000Z",
    __v: 0,
  },
  {
    _id: "room-004",
    hotel: hotelDummyData,
    roomType: "Luxury Pool Villa",
    pricePerNight: 4550000,
    amenities: [
      "Free Wifi",
      "Free Breakfast",
      "Room Service",
      "Pool Access",
      "Mountain View",
    ],
    images: [room2, room1, room3, room5],
    isAvailable: true,
    createdAt: "2026-09-05T11:00:00.000Z",
    updatedAt: "2026-10-02T08:45:00.000Z",
    __v: 0,
  },
];

// User Dummy Data
export const userDummyData = {
  _id: "user-001",
  username: "Andi Pratama",
  email: "andi.pratama@example.com",
  image:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  role: "user",
  createdAt: "2026-09-01T08:30:00.000Z",
  updatedAt: "2026-10-02T09:15:00.000Z",
  __v: 0,
  recentSearchedCities: ["Bali", "Lombok", "Yogyakarta"],
};

// userBooking Dummy Data
export const userBookingsDummyData = [
  {
    _id: "booking-001",
    user: userDummyData,
    room: roomsDummyData[1],
    hotel: hotelDummyData,
    checkInDate: "2026-10-10",
    checkOutDate: "2026-10-13",
    totalPrice: 7500000,
    guests: 2,
    status: "confirmed",
    paymentMethod: "Credit Card",
    isPaid: true,
    createdAt: "2026-10-02T08:30:00.000Z",
    updatedAt: "2026-10-02T08:35:00.000Z",
    __v: 0,
  },
  {
    _id: "booking-002",
    user: userDummyData,
    room: roomsDummyData[2],
    hotel: hotelDummyData,
    checkInDate: "2026-10-15",
    checkOutDate: "2026-10-17",
    totalPrice: 3600000,
    guests: 1,
    status: "pending",
    paymentMethod: "Bank Transfer",
    isPaid: true,
    createdAt: "2026-10-01T10:15:00.000Z",
    updatedAt: "2026-10-01T10:20:00.000Z",
    __v: 0,
  },
  {
    _id: "booking-003",
    user: userDummyData,
    room: roomsDummyData[0],
    hotel: hotelDummyData,
    checkInDate: "2026-10-20",
    checkOutDate: "2026-10-23",
    totalPrice: 13500000,
    guests: 4,
    status: "confirmed",
    paymentMethod: "Payment At Hotel",
    isPaid: false,
    createdAt: "2026-09-28T09:45:00.000Z",
    updatedAt: "2026-09-28T09:50:00.000Z",
    __v: 0,
  },
];

// Dashboard Dummy Data
export const dashboardDummyData = {
  totalBookings: 3,
  totalRevenue: 20000000,
  bookings: userBookingsDummyData,
};
