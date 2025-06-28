"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  User,
  Mail,
  MapPin,
  Lock,
  History,
  CreditCard,
  HelpCircle,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";

export default function App() {
  const [user, setUser] = useState({
    name: "Mark Jecno",
    email: "mark-jecno@gmail.com",
    address: "93, Songbird Cir, Blackville, South Carolina, USA-29817",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  // State to manage active navigation item for styling
  const [activeNavItem, setActiveNavItem] = useState("Profile");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    toast.success("Profile updated successfully!");
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      toast.error("New passwords do not match!");
      return;
    }
    toast.success("Password changed successfully!");
    setPasswords({ current: "", new: "", confirm: "" });
  };

  const navItems = [
    { name: "Profile", icon: User },
    { name: "Order", icon: History },
    { name: "StampCard", icon: CreditCard },
    { name: "Help", icon: HelpCircle },
    { name: "Setting", icon: Settings },
    { name: "Log Out", icon: LogOut },
  ];

  return (
    <section className="font-['poppins'] bg-[#fdf0e9] min-h-screen w-full flex justify-center items-center py-10 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-right" />
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-[#fdf0e9] rounded-xl overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/3 flex flex-col relative">
          <div className="flex flex-col items-center pt-30 py-4 px-6 bg-gradient-to-b from-[#FFD3B0] to-[#FF8D2F] text-white rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-bl-none pb-16">
            {" "}
          </div>
          {/* profile image */}
          <img
            src="/page2.png"
            alt="User Profile"
            className="absolute left-1/2 transform -translate-x-1/2 top-[136px] w-28 h-28 rounded-full border-4 border-white object-cover z-10"
          />

          <div className="flex-grow bg-white p-6 rounded-bl-xl rounded-br-xl md:rounded-br-none md:rounded-tr-none border-t border-gray-100 pt-10">
            {" "}
            <div className="text-center text-gray-900 pb-8">
              <h2 className="text-2xl font-semibold mb-1 mt-10">{user.name}</h2>
              <p className="text-sm">{user.email}</p>
            </div>
            <nav className="w-full space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className={`flex items-center justify-between p-3 rounded-lg transition-colors duration-200 ${
                    activeNavItem === item.name
                      ? "bg-orange-100 text-orange-600 shadow-sm" 
                      : "text-gray-600 hover:bg-gray-50 hover:text-orange-600" 
                  }`}
                  onClick={() => setActiveNavItem(item.name)}
                >
                  <div className="flex items-center gap-3">
                    <item.icon
                      size={20}
                      className={
                        activeNavItem === item.name
                          ? "text-orange-600"
                          : "text-gray-500" 
                      }
                    />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  {activeNavItem === item.name && (
                    <ChevronRight size={20} className="text-orange-600" />
                  )}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Forms - Right Section */}
        <div className="w-full md:w-2/3 p-6 sm:p-10 flex flex-col gap-8 bg-[#fdf0e9] rounded-b-xl rounded-br-xl md:rounded-bl-none md:rounded-tr-xl">
          {/* Update Profile Form */}
          <form
            onSubmit={handleProfileSubmit}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Profile
            </h3>

            {/* Name Input */}
            <div className="relative mb-6">
              <User
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400"
              />
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border-2 border-dotted border-gray-300 rounded-md px-3 py-2 pl-10 focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>

            {/* Email Input */}
            <div className="relative mb-6">
              <Mail
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400"
              />
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border-2 border-dotted border-gray-300 rounded-md px-3 py-2 pl-10 focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>

            {/* Address Input */}
            <div className="relative mb-8">
              <MapPin
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400"
              />
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={handleChange}
                placeholder="Address"
                className="w-full border-2 border-dotted border-gray-300 rounded-md px-3 py-2 pl-10 focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>

            <div className="flex justify-end">
              {" "}
              <button
                type="submit"
                className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300 transform hover:scale-105 shadow-md w-fit"
              >
                Update
              </button>
            </div>
          </form>

          {/* Change Password Form */}
          <form
            onSubmit={handlePasswordSubmit}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Change Password
            </h3>

            {/* Current Password Input */}
            <div className="relative mb-6">
              <Lock
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400"
              />
              <input
                type="password"
                name="current"
                value={passwords.current}
                onChange={handlePasswordChange}
                placeholder="Current Password"
                className="w-full border-2 border-dotted border-gray-300 rounded-md px-3 py-2 pl-10 focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>

            {/* New Password Input */}
            <div className="relative mb-6">
              <Lock
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400"
              />
              <input
                type="password"
                name="new"
                value={passwords.new}
                onChange={handlePasswordChange}
                placeholder="New Password"
                className="w-full border-2 border-dotted border-gray-300 rounded-md px-3 py-2 pl-10 focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>

            {/* Confirm Password Input */}
            <div className="relative mb-8">
              <Lock
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400"
              />
              <input
                type="password"
                name="confirm"
                value={passwords.confirm}
                onChange={handlePasswordChange}
                placeholder="Confirm Password"
                className="w-full border-2 border-dotted border-gray-300 rounded-md px-3 py-2 pl-10 focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>

            <div className="flex justify-end">
              {" "}
              <button
                type="submit"
                className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300 transform hover:scale-105 shadow-md w-fit"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
