import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "1240e2e4-f269-400f-867e-8671eefce24f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully!");
        event.target.reset();
      } else {
        console.log("Error:", data);
        toast.error(data.message);
        setResult("");
      }
    } catch (error) {
      console.log("Network Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="contact"
    >
      {/* TITLE */}
      <h1 className="text-2xl sm:text-4xl lg:text-4xl font-bold mb-2">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Us
        </span>
      </h1>

      {/* SUBTITLE */}
      <p className="text-center text-gray-500 max-w-sm mx-auto mb-8">
        Let's connect and make your dream home a reality
      </p>

      {/* FORM */}
      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex gap-4">
          {/* NAME */}
          <div className="w-full md:w-1/2 text-left">
            <label className="block mb-1">Your Name</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4"
              type="text"
              placeholder="Your Name"
              required
              name="name"
            />
          </div>

          {/* EMAIL */}
          <div className="w-full md:w-1/2 text-left">
            <label className="block mb-1">Your Email</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4"
              type="email"
              placeholder="Your Email"
              required
              name="email"
            />
          </div>
        </div>

        {/* MESSAGE */}
        <div className="my-6 text-left">
          <label className="block mb-1">Message</label>
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 h-48 resize-none"
            placeholder="Your Message"
            required
            name="message"
            rows="5"
          ></textarea>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-medium transition"
        >
          {result ? result : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
