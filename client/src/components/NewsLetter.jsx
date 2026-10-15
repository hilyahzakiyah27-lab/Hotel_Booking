import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Title from "./Title";

const NewsLetter = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center w-full max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-2 lg:mx-auto my-30 text-white bg-gray-900 overflow-hidden relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://plus.unsplash.com/premium_photo-1746327707391-d095ac370b9c?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col justify-center items-center text-center">
          <Title title="Stay Inspired" />
          <p className="text-sm md:text-base text-gray-200 mt-2 max-w-xl">
            Dapatkan penawaran eksklusif, diskon spesial, dan inspirasi liburan
            terbaik langsung di kotak masuk email Anda.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
          <input
            type="text"
            className="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none max-w-66 w-full text-white placeholder:text-gray-300"
            placeholder="Enter your email"
          />
          <button className="flex items-center justify-center gap-2 group bg-black px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all cursor-pointer">
            Subscribe
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <p className="text-gray-300 mt-6 text-xs text-center">
          By subscribing, you agree to our Privacy Policy and consent to receive
          updates.
        </p>
      </div>
    </div>
  );
};

export default NewsLetter;
