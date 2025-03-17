"use client";
import { useState } from "react";
import { Plus } from "lucide-react"
import Link from "next/link";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelect = (option) => {
    setFormData({ ...formData, service: option });
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", service: "" });
  };

  return (
    <footer className="bg-[#111] py-10 px-4">
      <div className="w-full xl:container mx-auto gap-y-10 flex flex-col ">
        {/* Left Section */}
        <div className="w-full flex max-md:flex-col justify-between gap-y-8">
          <div className="flex w-full lg:w-[40%] flex-col">
          <p className="text-[#8D8D8D] text-sm mb-24 max-md:mb-12">(Services)</p>
          <p className="sansMedium text-base w-[70%] lg:w-[50%] text-white/50">
            Dunn Capital is ready to empower you and your future goals. To learn more about us, get in touch with us to begin a conversation.
          </p>
          </div>

          {/* Contact Form */}
          <form className="w-full lg:w-[45%] flex flex-col gap-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="w-full p-4 border-b border-white/10 bg-transparent text-white/50 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border-b border-white/10 bg-transparent text-white/50 outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Enter your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 border-b border-white/10 bg-transparent text-white/50 outline-none"
            />

            {/* Custom Dropdown */}
            <div className="relative w-full">
              <div
                className={`w-full p-4 border-b border-white/10 flex items-center justify-between cursor-pointer ${formData.service ? "bg-[#E8F0FE] text-[#000]" : "bg-transparent text-white"}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {formData.service || "Choose your services"}
                <Plus className={`transition-transform ${isDropdownOpen ? "rotate-135" : ""}`} />
              </div>

              {isDropdownOpen && (
                <ul className="absolute z-10 w-full mt-2 bg-gray-900 border border-gray-700 shadow-lg">
                  {["Consulting", "Investment", "Financial Planning"].map((option) => (
                    <li
                      key={option}
                      onClick={() => handleSelect(option)}
                      className="px-4 py-3 hover:bg-gray-800 cursor-pointer sansRegular"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 mt-6 border border-gray-500 text-gray-300 hover:bg-white hover:text-black transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="relative w-full flex max-md:flex-col items-end max-md:items-start  justify-between">
          <h1 className="xl:text-[10rem] md:text-[5rem] text-[23vw] leading-[90%] inter font-semibold uppercase max-md:mt-6">
            Dunn<br />Capital
          </h1>
          {/* Footer Links */}
          <div className="flex max-md:flex-col gap-y-6 justify-between w-full lg:w-[40%] max-lg:justify-end max-lg:gap-8 ml-auto sansMedium text-sm mt-8 max-md:mt-12">
            <p>2025©</p>
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Terms and Conditions</Link>
          </div>
          <div className="absolute right-6 bottom-[10rem] max-md:bottom-[100%] max-md:left-0 max-md:bottom-24">
            <svg width="49" height="2" viewBox="0 0 49 2" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="1" x2="49" y2="1" stroke="white" strokeWidth="15"/>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
