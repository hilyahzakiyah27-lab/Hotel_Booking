import React from "react";
import { Link } from "react-router-dom";
import { formatRupiah } from "../data/formatRupiah.js";
import { FaStar, FaLocationDot } from "react-icons/fa6";

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={"/rooms/" + room._id}
      onClick={() => window.scrollTo(0, 0)}
      className="block w-full max-w-70 overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Gambar Hotel */}
      <div className="relative">
        <img
          src={room.images?.[0]}
          alt={room.hotel?.name || "Hotel"}
          className="h-48 w-full object-cover"
        />

        {/* Label Best Seller */}
        {index % 2 === 0 && (
          <p className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-800 shadow-sm">
            Best Seller
          </p>
        )}
      </div>

      {/* Informasi Hotel */}
      <div className="p-4">
        {/* Nama Hotel dan Rating */}
        <div className="flex items-center justify-between gap-2">
          <p className="font-playfair text-lg font-medium text-gray-800">
            {room.hotel.name}
          </p>

          <div className="flex shrink-0 items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span className="text-sm text-gray-700">4.5</span>
          </div>
        </div>

        {/* Lokasi Hotel */}
        <div className="mt-2 flex items-start gap-2 text-sm text-gray-500">
          <FaLocationDot className="mt-0.5 shrink-0 text-gray-700" />

          <span>{room.hotel.address}</span>
        </div>

        {/* Harga dan Tombol */}
        <div className="mt-4 flex items-center justify-between gap-2">
          <p className="text-sm text-gray-500">
            <span className="text-xl font-semibold text-gray-800">
              {formatRupiah(room.pricePerNight)}
            </span>{" "}
            /night
          </p>

          <span className="shrink-0 rounded border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50">
            Book Now
          </span>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
