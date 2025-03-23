"use client";
import { useState } from "react";

export default function FarmerRegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
  
    try {
      console.log("📤 Sending Request:", form);
  
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, role: "farmer" }),
      });
  
      console.log("📩 Response Status:", res.status);
  
      const data = await res.json();
      console.log("📩 Response Data:", data);
  
      if (res.ok) {
        setMessage("Registration successful! 🎉");
      } else {
        setMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("❌ Fetch Error:", error);
      setMessage("Server error, try again!");
    }
  };
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
  <form
    className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm space-y-4"
    onSubmit={handleSubmit}
  >
    <h2 className="text-2xl font-semibold text-center text-gray-800">
      Register
    </h2>
    
    <input
      type="text"
      name="name"
      placeholder="Name"
      onChange={handleChange}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
    />
    
    <input
      type="email"
      name="email"
      placeholder="Email"
      onChange={handleChange}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
    />
    
    <input
      type="password"
      name="password"
      placeholder="Password"
      onChange={handleChange}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
    />
    
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
    >
      Register
    </button>

    {message && (
      <p className="text-sm text-center text-red-600 font-medium">{message}</p>
    )}
  </form>
  </div>
  );
}
