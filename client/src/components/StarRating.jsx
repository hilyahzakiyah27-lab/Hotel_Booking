import React from "react";
import { MdStar, MdStarBorder } from "react-icons/md";

const StarRating = ({ rating = 4, maxRating = 5, size = 24 }) => {
  // Gunakan warna oranye emas yang konsisten untuk kedua jenis ikon
  const starColor = "#FFC107";

  return (
    <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
      {Array.from({ length: maxRating }).map((_, index) => {
        const starValue = index + 1;
        const isFilled = starValue <= rating;

        return isFilled ? (
          // Tampilkan bintang penuh jika nilai rating mencakup posisi ini
          <MdStar
            key={index}
            size={size}
            color={starColor}
            style={{ transition: "color 0.2s ease-in-out" }}
          />
        ) : (
          // Tampilkan bintang border jika nilai rating tidak mencapai posisi ini
          <MdStarBorder
            key={index}
            size={size}
            color={starColor}
            style={{ transition: "color 0.2s ease-in-out" }}
          />
        );
      })}
    </div>
  );
};

export default StarRating;