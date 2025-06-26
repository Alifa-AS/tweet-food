"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function profile() {
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
    <section className="max-w-5xl mx-auto px-4 py-10">
      <Toaster position="top-right" />
      
      {/* Profile Photo & Name */}
      <div className="text-center mb-10">
        <img
          src="/profile.jpg"
          alt="User"
          className="w-28 h-28 rounded-full mx-auto border-4 border-orange-400 object-cover"
        />
        <h2 className="text-2xl font-semibold mt-4">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
      </div>

      {/* Forms Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Profile Update Form */}
        <form
          onSubmit={handleProfileSubmit}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold mb-4 text-orange-600">Update Profile</h3>

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

        {/* Password Change Form */}
        <form
          onSubmit={handlePasswordSubmit}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold mb-4 text-orange-600">Change Password</h3>

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
    </section>
  );
}
