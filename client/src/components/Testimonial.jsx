import React from "react";
import Title from "./Title";
import { FaStar } from "react-icons/fa6";
import { testimonials } from "../assets/assets";

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-30">
      <Title
        title="What Our Guests Say"
        subTitle="Read authentic experiences and memorable stories shared by our valued guests."
      />
      <div class="flex flex-wrap items-center justify-center gap-6 pt-14">
        {testimonials.map((testimonial) => (
          <div class="text-sm w-80 border border-gray-200 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] mt-12 mb-8 shadow-black/5">
            <div class="flex flex-col items-center px-5 py-4 relative">
              <img
                class="h-24 w-24 object-cover absolute -top-14 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div class="pt-8 text-center">
                <h1 class="text-lg font-medium text-gray-800">
                  {testimonial.name}
                </h1>
                <p class="text-gray-800/80">{testimonial.address}</p>
              </div>
            </div>
            <p class="text-gray-500 px-6 text-center">{testimonial.review}</p>
            <div class="flex justify-center pt-4">
              <div class="flex gap-0.5">
                <FaStar className="text-yellow-400" />

                <FaStar className="text-yellow-400" />

                <FaStar className="text-yellow-400" />

                <FaStar className="text-yellow-400" />

                <FaStar className="text-yellow-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
