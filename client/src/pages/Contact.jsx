import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Thank you for contacting us!',
        });
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center relative flex items-center justify-center"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/17279501/pexels-photo-17279501/free-photo-of-photo-of-the-horseshoe-bend-at-sunset-arizona-usa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
            }}
        >
            {/* Header */}
            <header className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-transparent z-20">
                <div className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.18 9l-6.39 2.13a1 1 0 00-.02 1.9l6.41 2.13V21a1 1 0 001.64.77l2.36-2.13 4.24 1.41a1 1 0 001.28-1.28l-1.41-4.24 2.13-2.36A1 1 0 0021 13.18V11a1 1 0 00-.77-1.64l-2.13-2.36-4.24-1.41a1 1 0 00-1.28 1.28l1.41 4.24-2.36 2.13A1 1 0 0010.18 9z" />
                    </svg>
                    <span className="text-2xl font-bold text-white">TravelEase</span>
                </div>
                <nav className="flex space-x-6">
                    <Link to="/home" className="text-white font-semibold hover:text-purple-300 transition">Home</Link>
                    <Link to="/login" className="text-white font-semibold hover:text-purple-300 transition">Login</Link>
                    <Link to="/sign-up" className="text-white font-semibold hover:text-purple-300 transition">SignUp</Link>
                    <Link to="/about" className="text-white font-semibold hover:text-purple-300 transition">About</Link>
                    <Link to="/contact" className="text-white font-semibold hover:text-purple-300 transition">Contact</Link>
                </nav>
            </header>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-4 z-10 mt-16 md:mt-0">
                
                {/* Left Side Text */}
                <div className="w-full md:w-1/2 text-white mb-10 md:mb-0">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg max-w-md">
                        Have questions or need help planning your perfect trip?  
                        Our travel team is ready to assist you.  
                        Fill out the form and let’s make your journey unforgettable.
                    </p>
                </div>

                {/* Right Side Form */}
                <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl text-white">
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="px-4 py-2 rounded bg-white/20 placeholder-white focus:outline-none"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="px-4 py-2 rounded bg-white/20 placeholder-white focus:outline-none"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows="4"
                            className="px-4 py-2 rounded bg-white/20 placeholder-white focus:outline-none"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
