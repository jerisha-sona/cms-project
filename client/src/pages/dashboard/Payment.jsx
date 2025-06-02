import React, { useState } from "react";
import Swal from "sweetalert2";

const Payment = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    tour: "",
    amount: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.email ||
      !form.tour ||
      !form.amount ||
      !form.cardNumber ||
      !form.expiry ||
      !form.cvc
    ) {
      Swal.fire("Error", "Please fill in all fields.", "error");
      return;
    }

    Swal.fire("Payment Successful", "Your booking has been confirmed!", "success");
    setForm({
      name: "",
      email: "",
      tour: "",
      amount: "",
      cardNumber: "",
      expiry: "",
      cvc: "",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-brp p-4">
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-8 shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Tour Payment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full p-3 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Select Tour</label>
            <select
              name="tour"
              value={form.tour}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">-- Select Tour --</option>
              <option value="Beach Paradise">Beach Paradise</option>
              <option value="Mountain Adventure">Mountain Adventure</option>
              <option value="City Explorer">City Explorer</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold">Amount (USD)</label>
            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              min="1"
              className="w-full p-3 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={form.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              maxLength="19"
              className="w-full p-3 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block mb-1 font-semibold">Expiry</label>
              <input
                type="text"
                name="expiry"
                value={form.expiry}
                onChange={handleChange}
                placeholder="MM/YY"
                maxLength="5"
                className="w-full p-3 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 font-semibold">CVC</label>
              <input
                type="text"
                name="cvc"
                value={form.cvc}
                onChange={handleChange}
                placeholder="CVC"
                maxLength="4"
                className="w-full p-3 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-200"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
