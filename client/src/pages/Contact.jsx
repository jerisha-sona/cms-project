import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e6e6fa] to-[#cce5ff] p-6"
    >
      <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-xl shadow-lg max-w-md w-full p-8">
        <Link
          to="/home"
          className="inline-block mb-6 text-[#5b4fc8] font-semibold hover:text-[#a076f9] transition"
        >
          &larr; Back to Home
        </Link>

        <h2 className="text-3xl font-bold text-[#5b4fc8] mb-3">Contact Us</h2>
        <p className="text-[#344e9e] mb-6">
          Have questions about your travel plans? Fill out the form below and our team will get back to you soon.
        </p>

        {submitted ? (
          <div className="text-green-600 font-semibold text-center mt-6">
            Thank you for contacting us! We will respond shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[#344e9e] font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-[#a3a0f7] focus:outline-none focus:ring-2 focus:ring-[#7a5cfa] transition"
              />
            </div>
            <div>
              <label className="block text-[#344e9e] font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-[#a3a0f7] focus:outline-none focus:ring-2 focus:ring-[#7a5cfa] transition"
              />
            </div>
            <div>
              <label className="block text-[#344e9e] font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-[#a3a0f7] focus:outline-none focus:ring-2 focus:ring-[#7a5cfa] transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#7a5cfa] text-white py-3 rounded-md font-semibold hover:bg-[#5b4fc8] transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
