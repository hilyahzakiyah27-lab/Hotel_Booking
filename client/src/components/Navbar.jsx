import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { CiSearch } from "react-icons/ci";
import { FaAddressBook } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { useClerk, useUser, UserButton } from "@clerk/react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/rooms" },
    { name: "Experience", path: "/" },
    { name: "About", path: "/" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isHome = location.pathname === "/";

    const handleScroll = () => {
      if (!isHome) {
        // Jika BUKAN homepage, Navbar selalu dianggap scrolled (berwarna gray-700)
        setIsScrolled(true);
      } else {
        // Jika HOMEPAGE, ikuti posisi scroll layar (> 10px)
        setIsScrolled(window.scrollY > 10);
      }
    };

    // Jalankan sekali saat mount / perpindahan route untuk set state awal
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-20 flex items-center justify-between
    px-0 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "shadow-md text-white backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="logo" className={`h-14 object-contain}`} />
      </Link>

      {/* Desktop Nav */}
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className={`group flex flex-col gap-0.5 transition-colors duration-300 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}>
            {link.name}
            <div
              className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 ${
                isScrolled ? "bg-gray-700" : "bg-white"
              }`}
            />
          </a>
        ))}

        <button
          onClick={() => navigate("/owner")}
          /* Ubah border dan text saat scrolled */
          className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-colors duration-300 ${
            isScrolled
              ? "text-gray-700 border-gray-700 hover:bg-gray-700 hover:text-white"
              : "text-white border-white hover:bg-white hover:text-black"
          }`}>
          Dashboard
        </button>
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        <CiSearch
          className={`text-2xl ${isScrolled ? "text-gray-700" : "text-white"}`}
        />

        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<FaAddressBook />}
                onClick={() => navigate("/my-bookings")}
              />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button
            onClick={openSignIn}
            className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${isScrolled ? "text-white bg-black" : "bg-white text-black"}`}>
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-4 md:hidden">
        {user && (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<FaAddressBook />}
                onClick={() => navigate("/my-bookings")}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}

        <IoMdMenu
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer text-2xl text-white"
        />
      </div>
      {/* Mobile Menu */}

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}>
          <RiMenuUnfoldLine className="text-black text-2xl -ml-5" />
        </button>

        {navLinks.map((link, i) => (
          <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </a>
        ))}

        {user && (
          <button
            onClick={() => navigate("/owner")}
            className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
            Dashboard
          </button>
        )}

        {!user && (
          <button
            onClick={openSignIn}
            className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
