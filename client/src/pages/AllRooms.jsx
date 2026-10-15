import React, { useState } from "react";
import { facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";
import { MdLocationPin } from "react-icons/md";
import { formatRupiah } from "../data/formatRupiah.js";

const Checkbox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onchange(e.target.checked, label)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};
const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="radio"
        name="sortOption"
        checked={selected}
        onChange={(e) => onchange(label)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

const AllRooms = () => {
  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState(false);

  const roomTypes = ["Single Bed", "Double Bed", "Luxury Room", "Family Suite"];
  const priceRange = [
    "0 to 500000",
    "500000 to 1000000",
    "1000000 to 1500000",
    "1500000 to 2500000",
  ];
  const sortOption = ["Price Low to High", "Price High to Low", "Newest First"];

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-8 pt-28 md:pt-36 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Left Side: Header & Room Cards */}
      <div className="w-full order-2 lg:order-1 lg:w-2/3 xl:w-3/4">
        {/* Header Title */}
        <div className="flex flex-col items-start text-left mb-6">
          <h1 className="font-playfair text-4xl md:text-[40px] font-bold text-gray-900">
            Hotel Rooms
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-2 leading-relaxed">
            Wake up to breathtaking ocean vistas right from your private
            balcony. Designed with modern tropical elegance, this room features
            a plush King bed, a marble bathroom, and sun-drenched interiors
            crafted for ultimate relaxation.
          </p>
        </div>

        {/* Room List */}
        <div className="flex flex-col">
          {roomsDummyData.map((room) => (
            <div
              key={room._id}
              className="flex flex-col md:flex-row items-start py-8 gap-6 border-b border-gray-300 last:border-0">
              {/* Room Image */}
              <img
                src={room.images[0]}
                title="View Room Details"
                alt="hotel-img"
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  window.scrollTo(0, 0);
                }}
                className="w-full md:w-1/2 max-h-64 rounded-xl shadow-lg object-cover cursor-pointer hover:opacity-95 transition-opacity"
              />

              {/* Room Info */}
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <p className="text-gray-500 text-sm uppercase tracking-wide">
                  {room.hotel.city}
                </p>
                <p
                  onClick={() => {
                    navigate(`/rooms/${room._id}`);
                    window.scrollTo(0, 0);
                  }}
                  className="text-gray-900 text-2xl md:text-3xl font-playfair cursor-pointer hover:text-blue-600 transition-colors">
                  {room.hotel.name}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <StarRating />
                  <span className="ml-2 font-medium">200+ reviews</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                  <MdLocationPin className="text-base" />
                  <span>{room.hotel.address}</span>
                </div>

                {/* Room Amenities */}
                <div className="flex flex-wrap items-center mt-3 gap-2">
                  {room.amenities.map((item, index) => {
                    const IconComponent = facilityIcons[item];

                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F5F5FF]">
                        {IconComponent && (
                          <IconComponent className="w-4 h-4 text-gray-700" />
                        )}
                        <p className="text-xs font-medium text-gray-700">
                          {item}
                        </p>
                      </div>
                    );
                  })}
                </div>
                {/* ROom Price  */}
                <p className="text-xl font-medium text-gray-700">
                  {formatRupiah(room.pricePerNight)} /night
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Filters */}
      <div
        className={`w-1/2 lg:w-1/3 xl:w-1/4 order-1 lg:order-2 top-28 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm ${openFilters && "border-b"}`}>
        <div className="flex flex-row items-center justify-between">
          <p className="text-base font-medium text-gray-800">FILTERS</p>
          <div className="text-xs cursor-pointer">
            <span
              onClick={() => setOpenFilters(!openFilters)}
              className="lg:hidden text-gray-500">
              {openFilters ? "HIDE" : "SHOW"}
            </span>
            <span className="hidden lg:block text-gray-500">CLEAR</span>
          </div>
        </div>

        <div
          className={`${openFilters ? "h-auto" : "h-0 lg:h-auto"} overflow-hidden transition-all duration-700`}>
          <div className="border-t border-gray-200 pt-4 mt-4 px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Popular Filters</p>
            {roomTypes.map((room, index) => (
              <Checkbox key={index} label={room} />
            ))}
          </div>
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Price Range</p>
            {priceRange.map((range, index) => (
              <Checkbox key={index} label={`$ ${range}`} />
            ))}
          </div>
          <div className="px-5 pt-5 pb-7">
            <p className="font-medium text-gray-800 pb-2">Sort by</p>
            {sortOption.map((option, index) => (
              <RadioButton key={index} label={option} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
