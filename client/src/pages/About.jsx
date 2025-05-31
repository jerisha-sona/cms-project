import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function About() {
    return (
        <div className="min-h-screen font-sans text-white bg-cover bg-center" style={{
            backgroundImage: "url('https://images.pexels.com/photos/32320465/pexels-photo-32320465/free-photo-of-peaceful-sunset-at-izmit-bay-with-boats-and-lighthouse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            backgroundAttachment: "fixed"
        }}>
            {/* Header */}
            <header className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-10">
                <div className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.18 9l-6.39 2.13a1 1 0 00-.02 1.9l6.41 2.13V21a1 1 0 001.64.77l2.36-2.13 4.24 1.41a1 1 0 001.28-1.28l-1.41-4.24 2.13-2.36A1 1 0 0021 13.18V11a1 1 0 00-.77-1.64l-2.13-2.36-4.24-1.41a1 1 0 00-1.28 1.28l1.41 4.24-2.36 2.13A1 1 0 0010.18 9z" />
                    </svg>
                    <span className="text-2xl font-bold text-white">TravelEase</span>
                </div>
                <nav className="flex space-x-6">
                    <Link to="/home" className="text-white font-semibold hover:text-purple-300 transition">Home</Link>
                    <Link to="/login" className="text-white font-semibold hover:text-purple-300 transition">Login</Link>
                    <Link to="/signup" className="text-white font-semibold hover:text-purple-300 transition">SignUp</Link>
                    <Link to="/about" className="text-white font-semibold hover:text-purple-300 transition">About</Link>
                    <Link to="/contact" className="text-white font-semibold hover:text-purple-300 transition">Contact</Link>
                </nav>
            </header>

            {/* Main Content */}
            <div className="pt-40 px-6">
                {/* About Us Banner Section */}
                <div className="max-w-6xl mx-auto p-10">
                    <div className="text-center space-y-4">
                        <h1 className="text-5xl font-extrabold">About Us</h1>
                        <div className="flex justify-center space-x-4">
                            {[
                                "https://i.pinimg.com/736x/e1/99/b2/e199b25cd826924f861cf8762eee449c.jpg",
                                "https://i.pinimg.com/736x/af/6c/ea/af6cea466375b4f1bab5409bd0332a79.jpg",
                                "https://i.pinimg.com/736x/06/ec/65/06ec655440ba6272f7de186bb991e89e.jpg"
                            ].map((src, idx) => (
                                <img
                                    key={idx}
                                    src={src}
                                    alt={`profile-${idx}`}
                                    className="w-20 h-20 rounded-full border-4 border-white shadow-md transform hover:scale-110 transition duration-300 object-cover"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* About Section and Contact Form */}
                <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-10">
                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
                        <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
                        <p className="mb-4 text-lg leading-relaxed">
                            Welcome to <span className="font-semibold">Tourism</span>! We’re a passionate team of travel enthusiasts crafting personalized journeys full of adventure, culture, and relaxation.
                        </p>
                        <p className="mb-4 text-lg leading-relaxed">
                            Since 2024, we’ve connected travelers to unforgettable global destinations. Our mission: design travel experiences that inspire your soul and expand your horizons.
                        </p>
                        <ul className="list-disc list-inside text-lg space-y-2">
                            <li>Customized travel packages</li>
                            <li>Handpicked destinations and stays</li>
                            <li>Expert local guides & 24/7 support</li>
                            <li>No hidden fees – guaranteed transparency</li>
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
                        <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>
                        <form className="flex flex-col space-y-4">
                            <input type="text" placeholder="Your Name" className="p-3 rounded-lg border border-gray-300 bg-transparent text-white placeholder-white focus:ring-2 focus:ring-purple-400" />
                            <input type="email" placeholder="Your Email" className="p-3 rounded-lg border border-gray-300 bg-transparent text-white placeholder-white focus:ring-2 focus:ring-purple-400" />
                            <input type="text" placeholder="Phone Number" className="p-3 rounded-lg border border-gray-300 bg-transparent text-white placeholder-white focus:ring-2 focus:ring-purple-400" />
                            <textarea placeholder="Your Message" className="p-3 rounded-lg border border-gray-300 bg-transparent text-white placeholder-white focus:ring-2 focus:ring-purple-400"></textarea>
                            <button type="submit" className="bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map */}
                <div className="max-w-6xl mx-auto mt-16">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95592531550477!3d-37.81720974250412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5777e21ef2a7f9!2sFlinders%20Street%20Station!5e0!3m2!1sen!2sau!4v1617751668369!5m2!1sen!2sau"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        className="rounded-xl shadow-lg"
                    ></iframe>
                </div>

                {/* Footer */}
                <footer className="bg-transparent text-gray-200 mt-16 py-12 rounded-t-xl">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-4 text-base bg-white/20 rounded backdrop-blur-m">
                        <div>
                            <h4 className="font-bold text-lg mb-2">Tourism</h4>
                            <p>Explore the world with us. Your adventure starts here!</p>
                            <div className="flex space-x-4 mt-4 text-xl">
                                <a href="#" className="hover:text-white"><FaFacebookF /></a>
                                <a href="#" className="hover:text-white"><FaTwitter /></a>
                                <a href="#" className="hover:text-white"><FaInstagram /></a>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-2">Useful Links</h4>
                            <ul className="space-y-2">
                                <li><Link to="/destinations" className="hover:underline">Destinations</Link></li>
                                <li><Link to="/team" className="hover:underline">Our Team</Link></li>
                                <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                                <li><Link to="/reviews" className="hover:underline">Reviews</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-2">About Us</h4>
                            <ul className="space-y-2">
                                <li><Link to="/about" className="hover:underline">Our Story</Link></li>
                                <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
                                <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-2">Newsletter</h4>
                            <p>Subscribe to get our latest updates and offers.</p>
                            <div className="mt-4 flex">
                                <input type="email" placeholder="Your email" className="p-2 rounded-l bg-transparent border border-gray-500 text-white placeholder-white focus:outline-none w-full" />
                                <button className="bg-purple-600 px-4 rounded-r text-white hover:bg-purple-700 transition">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-sm mt-6 text-gray-300">© 2025 Tourism. All rights reserved.</div>
                </footer>
            </div>
        </div>
    );
}