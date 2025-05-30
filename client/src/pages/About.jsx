import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function About() {
    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <header className="absolute top-0 left-0 w-full z-10">
                <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
                    <div className="text-2xl font-bold text-white drop-shadow">Tourism</div>
                    <nav className="flex space-x-6">
                        <Link to="/" className="text-white hover:text-purple-200 font-medium drop-shadow">Home</Link>
                        <Link to="/" className="text-white hover:text-purple-200 font-medium drop-shadow">About</Link>
                        <Link to="/login" className="text-white hover:text-purple-200 font-medium drop-shadow">Login</Link>
                        <Link to="/signup" className="text-white hover:text-purple-200 font-medium drop-shadow">SignUp</Link>
                        <Link to="/contact" className="text-white hover:text-purple-200 font-medium drop-shadow">Contact</Link>
                    </nav>
                </div>
            </header>
            <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/19196727/pexels-photo-19196727/free-photo-of-a-mountain-range-with-trees-and-clouds-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                    <h1 className="text-5xl text-white font-extrabold drop-shadow-lg">About Us</h1>
                    <div className="flex space-x-4">
                        <img src="https://i.pinimg.com/736x/e1/99/b2/e199b25cd826924f861cf8762eee449c.jpg" alt="bg1" className="w-20 h-20 object-cover rounded-full border-4 border-white shadow-md" />
                        <img src="https://i.pinimg.com/736x/af/6c/ea/af6cea466375b4f1bab5409bd0332a79.jpg" alt="bg2" className="w-20 h-20 object-cover rounded-full border-4 border-white shadow-md" />
                        <img src="https://i.pinimg.com/736x/06/ec/65/06ec655440ba6272f7de186bb991e89e.jpg" alt="bg3" className="w-20 h-20 object-cover rounded-full border-4 border-white shadow-md" />
                    </div>
                </div>
            </div>

            {/* About Content with Background */}
            <div
                className="relative min-h-screen"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)), url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                }}
            >
                <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-8 pt-32">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
                        <p className="mb-4 text-gray-700">
                            Welcome to <span className="font-semibold">Tourism</span>! We are a passionate team of travel experts dedicated to curating exceptional travel experiences for our customers. Whether you're looking for adventure, relaxation, or cultural immersion, we have something for everyone.
                        </p>
                        <p className="mb-4 text-gray-700">
                            Since 2024, we’ve been connecting travelers with unforgettable destinations worldwide. Our mission is to create personalized journeys that inspire and enrich your life.
                        </p>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Customized travel packages</li>
                            <li>Handpicked destinations and accommodations</li>
                            <li>Expert local guides and 24/7 support</li>
                            <li>Best price guarantee with no hidden fees</li>
                        </ul>
                    </div>

                    <div className="bg-purple-100 p-6 rounded-lg shadow">
                        <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                        <form className="flex flex-col space-y-4">
                            <input type="text" placeholder="Your Name" className="p-3 rounded border border-gray-300 focus:outline-none" />
                            <input type="email" placeholder="Your Email" className="p-3 rounded border border-gray-300 focus:outline-none" />
                            <input type="text" placeholder="Phone Number" className="p-3 rounded border border-gray-300 focus:outline-none" />
                            <textarea placeholder="Your Message" className="p-3 rounded border border-gray-300 focus:outline-none"></textarea>
                            <button type="submit" className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">Send Message</button>
                        </form>
                    </div>
                </div>
                <div className="mt-8 max-w-6xl mx-auto px-8">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95592531550477!3d-37.81720974250412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5777e21ef2a7f9!2sFlinders%20Street%20Station!5e0!3m2!1sen!2sau!4v1617751668369!5m2!1sen!2sau"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <footer className="bg-gray-900 text-gray-300 mt-8 py-10">
                <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-4">
                    <div>
                        <h4 className="font-semibold text-lg mb-2">Tourism</h4>
                        <p>Explore the world with us. Your adventure starts here!</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="hover:text-white"><FaFacebookF /></a>
                            <a href="#" className="hover:text-white"><FaTwitter /></a>
                            <a href="#" className="hover:text-white"><FaInstagram /></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-2">Useful Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/destinations" className="hover:underline">Destinations</Link></li>
                            <li><Link to="/team" className="hover:underline">Our Team</Link></li>
                            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                            <li><Link to="/reviews" className="hover:underline">Reviews</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-2">About Us</h4>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="hover:underline">Our Story</Link></li>
                            <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
                            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-2">Newsletter</h4>
                        <p>Subscribe to get our latest updates and offers.</p>
                        <div className="mt-4 flex">
                            <input type="email" placeholder="Your email" className="p-2 rounded-l bg-gray-800 border-none focus:outline-none w-full" />
                            <button className="bg-purple-600 px-4 rounded-r text-white hover:bg-purple-700">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="text-center text-sm mt-6">© 2025 Tourism. All rights reserved.</div>
            </footer>
        </div>
    );
}