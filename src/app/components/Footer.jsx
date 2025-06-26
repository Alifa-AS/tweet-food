import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiSend } from "react-icons/fi";


export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white pt-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-orange-300">
          {/* Logo / Brand */}
          <div>
            <img src="/header.png" alt="profile" className="pb-7" />
            <p className="text-sm">
              Delicious food delivered fast. Experience taste at your doorstep!
            </p>

            {/* Social */}
              <div className="flex space-x-4 text-xl my-4">
                <FaFacebookF className="hover:text-orange-100 cursor-pointer" />
                <FaTwitter className="hover:text-orange-100 cursor-pointer" />
                <FaInstagram className="hover:text-orange-100 cursor-pointer" />
              </div>
            </div>
          

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-7">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>How We works</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-7">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>Privacy Policies</li>
              <li>Terms & Conditions</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* newsletter */}
          <div>
            <h3 className="font-semibold mb-7">Newsletter</h3>
            <p className="text-sm">
              Subscribe Our newsletter to get our Latest Update & News
            </p>
            {/* Input field */}
            <div className="flex items-center my-4 mb-6 w-full max-w-lg">
              <input
                type="text"
                placeholder="Enter Email"
                className="flex-grow py-2 border border-gray-300 text-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button className="bg-[#ED6923] text-white px-4 py-3 rounded-r-lg hover:bg-[#d9571f] transition whitespace-nowrap">
                <FiSend className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="text-center py-4 text-sm">
          © {new Date().getFullYear()} TweetFood. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
