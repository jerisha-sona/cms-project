// Payment.js with Tailwind CSS styling and transparent box

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
        if (!form.name || !form.email || !form.tour || !form.amount || !form.cardNumber || !form.expiry || !form.cvc) {
            Swal.fire("Error", "Please fill in all fields.", "error");
            return;
        }
        Swal.fire("Payment Successful", "Your booking has been confirmed!", "success");
        setForm({ name: "", email: "", tour: "", amount: "", cardNumber: "", expiry: "", cvc: "" });
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gray-100"
            style={{
                backgroundImage:
                    "url('https://images.pexels.com/photos/16604565/pexels-photo-16604565/free-photo-of-top-view-of-a-boat-anchored-near-the-coast.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="bg-white bg-opacity-30 p-8 rounded-2xl shadow-xl w-full max-w-md backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Tour Payment</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your full name" className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-50" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-50" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Select Tour</label>
                        <select name="tour" value={form.tour} onChange={handleChange} className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-50">
                            <option value="">-- Select Tour --</option>
                            <option value="Beach Paradise">Beach Paradise</option>
                            <option value="Mountain Adventure">Mountain Adventure</option>
                            <option value="City Explorer">City Explorer</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Amount (USD)</label>
                        <input type="number" name="amount" value={form.amount} onChange={handleChange} placeholder="Enter amount" min="1" className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-50" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Card Number</label>
                        <input type="text" name="cardNumber" value={form.cardNumber} onChange={handleChange} placeholder="1234 5678 9012 3456" maxLength="19" className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-50" />
                    </div>
                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700">Expiry</label>
                            <input type="text" name="expiry" value={form.expiry} onChange={handleChange} placeholder="MM/YY" maxLength="5" className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-50" />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700">CVC</label>
                            <input type="text" name="cvc" value={form.cvc} onChange={handleChange} placeholder="CVC" maxLength="4" className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-50" />
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">Pay Now</button>
                </form>
            </div>
        </div>
    );
};

export default Payment;
