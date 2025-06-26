"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    address: "123 Main Street",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

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
  };

  return (
    <section className="bg-[#FDF0E9] min-h-screen w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Toaster position="top-right" />

      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar - Left */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src="/profile.jpg"
            alt="User"
            className="w-28 h-28 rounded-full mx-auto border-4 border-orange-400 object-cover mb-4"
          />
          <h2 className="text-2xl font-semibold">{user.name}</h2>
          <p className="text-gray-600 mb-1">{user.email}</p>
          <p className="text-sm text-gray-400">{user.address}</p>
        </div>

        {/* Forms - Right */}
        <div className="w-full md:w-2/3 flex flex-col gap-10">
          {/* Update Profile Form */}
          <form
            onSubmit={handleProfileSubmit}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4 text-orange-600">
              Update Profile
            </h3>

            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="input-style"
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
              className="input-style"
            />
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
              placeholder="Address"
              className="input-style"
            />
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded mt-4 hover:bg-orange-600 transition"
            >
              Save Changes
            </button>
          </form>

          {/* Change Password Form */}
          <form
            onSubmit={handlePasswordSubmit}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4 text-orange-600">
              Change Password
            </h3>

            <input
              type="password"
              name="current"
              value={passwords.current}
              onChange={handlePasswordChange}
              placeholder="Current Password"
              className="input-style"
            />
            <input
              type="password"
              name="new"
              value={passwords.new}
              onChange={handlePasswordChange}
              placeholder="New Password"
              className="input-style"
            />
            <input
              type="password"
              name="confirm"
              value={passwords.confirm}
              onChange={handlePasswordChange}
              placeholder="Confirm Password"
              className="input-style"
            />
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded mt-4 hover:bg-orange-600 transition"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
