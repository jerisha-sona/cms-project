import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Payment.css"; // Optional: for custom styling

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
        // Simple validation
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
        // Simulate payment success
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
        <div className="payment-container">
            <h2>Tour Payment</h2>
            <form className="payment-form" onSubmit={handleSubmit}>
                <label>
                    Full Name
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                    />
                </label>
                <label>
                    Email Address
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                </label>
                <label>
                    Select Tour
                    <select name="tour" value={form.tour} onChange={handleChange}>
                        <option value="">-- Select Tour --</option>
                        <option value="Beach Paradise">Beach Paradise</option>
                        <option value="Mountain Adventure">Mountain Adventure</option>
                        <option value="City Explorer">City Explorer</option>
                    </select>
                </label>
                <label>
                    Amount (USD)
                    <input
                        type="number"
                        name="amount"
                        value={form.amount}
                        onChange={handleChange}
                        placeholder="Enter amount"
                        min="1"
                    />
                </label>
                <label>
                    Card Number
                    <input
                        type="text"
                        name="cardNumber"
                        value={form.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                        maxLength="19"
                    />
                </label>
                <div className="payment-row">
                    <label>
                        Expiry
                        <input
                            type="text"
                            name="expiry"
                            value={form.expiry}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            maxLength="5"
                        />
                    </label>
                    <label>
                        CVC
                        <input
                            type="text"
                            name="cvc"
                            value={form.cvc}
                            onChange={handleChange}
                            placeholder="CVC"
                            maxLength="4"
                        />
                    </label>
                </div>
                <button type="submit" className="pay-btn">
                    Pay Now
                </button>
            </form>
        </div>
    );
};

export default Payment;