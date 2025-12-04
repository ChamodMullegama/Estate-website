import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="testimonials"
    >
      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customers{" "}
        <span className="underline underline-offset-4 decoration-2">
          Testimonials
        </span>
      </h1>

      <p className="text-center text-gray-500 max-w-sm mx-auto mb-8">
        Real stories from those who found home with us
      </p>

      {/* Testimonials Cards */}
      <div className="flex flex-wrap justify-center items-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />

            <h2 className="text-xl text-gray-700 font-medium">
              {testimonial.name}
            </h2>

            <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>

            {/* Star Rating */}
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <img
                  key={index}
                  src={assets.star_icon}
                  alt="star"
                  className="w-4 h-4"
                />
              ))}
            </div>

            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
