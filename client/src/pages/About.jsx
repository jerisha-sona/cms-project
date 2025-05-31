import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-900 via-indigo-900 to-blue-900 font-sans">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full z-20 bg-transparent">
                <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6">
                    <div className="text-3xl font-bold text-white tracking-wide">Tourism</div>
                    <nav className="flex space-x-8">
                        <Link to="/home" className="text-white hover:text-sky-300 transition-colors">Home</Link>
                        <Link to="/" className="text-white hover:text-sky-300 transition-colors">About</Link>
                        <Link to="/login" className="text-white hover:text-sky-300 transition-colors">Login</Link>
                        <Link to="/sign-up" className="text-white hover:text-sky-300 transition-colors">Sign Up</Link>
                        <Link to="/contact" className="text-white hover:text-sky-300 transition-colors">Contact</Link>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/19196727/pexels-photo-19196727/free-photo-of-a-mountain-range-with-trees-and-clouds-in-the-background.jpeg')" }}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 space-y-5 px-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow">About Us</h1>
                    <p className="max-w-2xl text-lg text-gray-200 mx-auto">Discover the story, passion, and commitment behind Tourism — your gateway to unforgettable experiences.</p>
                    <div className="flex space-x-4 justify-center">
                        <img src="https://i.pinimg.com/736x/e1/99/b2/e199b25cd826924f861cf8762eee449c.jpg" alt="team1" className="w-16 h-16 rounded-full object-cover border-4 border-white hover:scale-105 transition-transform" />
                        <img src="https://i.pinimg.com/736x/af/6c/ea/af6cea466375b4f1bab5409bd0332a79.jpg" alt="team2" className="w-16 h-16 rounded-full object-cover border-4 border-white hover:scale-105 transition-transform" />
                        <img src="https://i.pinimg.com/736x/06/ec/65/06ec655440ba6272f7de186bb991e89e.jpg" alt="team3" className="w-16 h-16 rounded-full object-cover border-4 border-white hover:scale-105 transition-transform" />
                    </div>
                </div>
            </section>

            {/* About Content */}
            <section className="relative bg-gradient-to-br from-sky-800/90 via-wheat-900/90 to-sandal-900/90 py-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">
                    {/* Who We Are */}
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-lg transition-all duration-500 border border-white/20">
                        <h2 className="text-3xl font-bold text-white mb-6">Who We Are</h2>
                        <p className="text-gray-200 mb-4 leading-relaxed">
                            At <span className="text-sky-300 font-semibold">Tourism</span>, we craft journeys that go beyond travel. Since 2024, we’ve been matching travelers with tailored experiences that spark adventure, relaxation, and cultural discovery.
                        </p>
                        <ul className="list-disc list-inside text-gray-200 space-y-2">
                            <li>Curated travel packages worldwide</li>
                            <li>Luxury and budget accommodations</li>
                            <li>24/7 customer support with expert guides</li>
                            <li>Exclusive offers and seasonal discounts</li>
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-lg transition-all duration-500 border border-white/20">
                        <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
                        <form className="flex flex-col space-y-4">
                            <input type="text" placeholder="Your Name" className="p-3 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500" />
                            <input type="email" placeholder="Your Email" className="p-3 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500" />
                            <input type="text" placeholder="Phone Number" className="p-3 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500" />
                            <textarea placeholder="Your Message" className="p-3 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 min-h-[100px]"></textarea>
                            <button type="submit" className="bg-sky-600 hover:bg-sky-700 text-white py-2 rounded font-semibold transition-all">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95592531550477!3d-37.81720974250412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5777e21ef2a7f9!2sFlinders%20Street%20Station!5e0!3m2!1sen!2sau!4v1617751668369!5m2!1sen!2sau"
                    width="100%"
                    height="400"
                    style={{ border: 0, borderRadius: "1rem", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)" }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                ></iframe>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-12">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6">
                    {/* Brand */}
                    <div>
                        <h4 className="text-xl font-semibold mb-2 text-white">Tourism</h4>
                        <p className="text-gray-400">Explore the world. Your adventure starts here!</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="hover:text-white transition-colors text-xl"><FaFacebookF /></a>
                            <a href="#" className="hover:text-white transition-colors text-xl"><FaTwitter /></a>
                            <a href="#" className="hover:text-white transition-colors text-xl"><FaInstagram /></a>
                        </div>
                    </div>
                    {/* Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-2 text-white">Useful Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/destinations" className="hover:underline hover:text-white">Destinations</Link></li>
                            <li><Link to="/team" className="hover:underline hover:text-white">Our Team</Link></li>
                            <li><Link to="/contact" className="hover:underline hover:text-white">Contact</Link></li>
                            <li><Link to="/reviews" className="hover:underline hover:text-white">Reviews</Link></li>
                        </ul>
                    </div>
                    {/* New: Why Choose Us */}
                    <div>
                        <h4 className="text-lg font-semibold mb-2 text-white">Why Choose Us?</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>✔️ 1000+ happy travelers every year</li>
                            <li>✔️ Personalized trip planning</li>
                            <li>✔️ Trusted local guides</li>
                            <li>✔️ Secure online booking</li>
                            <li>✔️ 24/7 emergency support</li>
                        </ul>
                    </div>
                    {/* About */}
                    <div>
                        <h4 className="text-lg font-semibold mb-2 text-white">About</h4>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="hover:underline hover:text-white">Our Story</Link></li>
                            <li><Link to="/terms" className="hover:underline hover:text-white">Terms & Conditions</Link></li>
                            <li><Link to="/privacy" className="hover:underline hover:text-white">Privacy Policy</Link></li>
                            <li><Link to="/careers" className="hover:underline hover:text-white">Careers</Link></li>
                            <li><Link to="/blog" className="hover:underline hover:text-white">Blog</Link></li>
                            <li><Link to="/faq" className="hover:underline hover:text-white">FAQ</Link></li>
                        </ul>
                    </div>
                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold mb-2 text-white">Newsletter</h4>
                        <p className="text-gray-400 mb-4">Subscribe for updates and offers.</p>
                        <div className="flex">
                            <input type="email" placeholder="Your email" className="p-2 rounded-l bg-gray-800 border-none focus:outline-none w-full text-white placeholder-gray-400" />
                            <button className="bg-sky-600 px-4 rounded-r text-white hover:bg-sky-700 transition">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="text-center text-sm mt-8 text-gray-500">© 2025 Tourism. All rights reserved.</div>
            </footer>
        </div>
    );
}
