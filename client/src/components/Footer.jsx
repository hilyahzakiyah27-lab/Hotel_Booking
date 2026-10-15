import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookSquare,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="font-playfair text-gray-500/80 bg-slate-50 pt-8 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        <div className="max-w-80">
          <img src="/src/assets/logo.png" alt="logo" className="h-16 md:h-20" />
          <p className="text-sm">
            Nestled along pristine shores, Azure Resort combines modern elegance
            with untouched natural beauty to create your ultimate tropical
            getaway.
          </p>
          <div className="flex items-center gap-3 mt-4">
            {/* Instagram */}
            <a href="#">
              <FaInstagram className="w-6 h-6" />
            </a>
            {/* Facebook */}
            <a href="#">
              <FaFacebookSquare className="w-6 h-6" />
            </a>
            {/* Twitter */}
            <a href="#">
              <FaTwitter className="w-6 h-6" />
            </a>
            {/* LinkedIn */}
            <a href="#">
              <FaLinkedinIn className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div>
          <p className="font-playfair text-lg text-gray-800">COMPANY</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-playfair text-lg text-gray-800">SUPPORT</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Safety Information</a>
            </li>
            <li>
              <a href="#">Cancellation Options</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-gray-300 mt-8" />
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>
          © {new Date().getFullYear()}{" "}
          <a href="https://prebuiltui.com">AzureResort</a>. All rights reserved.
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
