import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const data = [
    {
        title: "🌍 Explore Destinations",
        details: [
            "50+ countries covered worldwide",
            "Top destinations: Paris, Bali, New York, Tokyo, Sydney",
            "Customizable itineraries tailored to your needs",
            "Expert local guides to enrich your experience",
            "Hidden gems and off-the-beaten-path adventures",
        ],
        images: [
            "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
    },
    {
        title: "💰 Exclusive Offers",
        details: [
            "Early bird discounts up to 30%",
            "Seasonal and festival promotions",
            "Loyalty rewards program with points on every booking",
            "Group booking offers and family packages",
            "Last-minute deals for spontaneous travelers",
        ],
        images: [
            "https://images.pexels.com/photos/731217/pexels-photo-731217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        ],
    },
    {
        title: "🏆 Achievements",
        details: [
            "Awarded Best Travel Agency 2024",
            "98% Customer Satisfaction rating on Trustpilot",
            "20+ Years of excellence in travel management",
            "Certified sustainable tourism practices",
            "Featured in Top Travel Magazines worldwide",
        ],
        images: [
            "https://images.pexels.com/photos/30660798/pexels-photo-30660798/free-photo-of-happy-family-playing-outdoors-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        ],
    },
    {
        title: "🗣 Customer Feedback",
        details: [
            "\"Unforgettable experience!\" – Sarah K.",
            "\"Highly recommend ExploreWorld!\" – John D.",
            "\"Exceptional service throughout!\" – Aisha M.",
            "\"Best guided tours I've ever taken.\" – Raj P.",
            "\"Friendly, knowledgeable, and reliable.\" – Emily S.",
        ],
        images: [
            "https://images.pexels.com/photos/32311511/pexels-photo-32311511/free-photo-of-sydney-harbor-with-opera-house-and-bridge.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        ],
    },
    {
        title: "🚀 Technology & Innovation",
        details: [
            "AI-powered booking system for personalized suggestions",
            "Virtual destination previews using VR",
            "24/7 chatbot support for instant help",
            "Mobile app with offline travel guides",
            "Blockchain-based secure payments and contracts",
        ],
        images: [
            "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            "https://images.pexels.com/photos/12087907/pexels-photo-12087907.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15 },
    }),
};

const listVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
        height: "auto",
        opacity: 1,
        transition: { when: "beforeChildren", staggerChildren: 0.1 },
    },
    exit: { height: 0, opacity: 0, transition: { delay: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

export default function TravelIntroDetailed() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleIndex = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    const navigate = useNavigate();

    const Navbar = () => (
        <nav className="flex justify-between items-center bg-white bg-opacity-80 shadow-md rounded-xl px-8 py-4 mb-10">
            <div className="text-2xl font-bold text-blue-800">ExploreWorld</div>
            <div className="space-x-8">
                <button
                    onClick={() => navigate("/home")}
                    className="text-blue-700 hover:text-purple-600 font-medium transition-colors focus:outline-none"
                >
                    Home
                </button>
                <button
                    onClick={() => navigate("/dashboard/payment")}
                    className="text-blue-700 hover:text-purple-600 font-medium transition-colors focus:outline-none"
                >
                    Payment
                </button>
            </div>
        </nav>
    );

    return (
        <div
            className="min-h-screen w-full bg-gradient-to-r from-blue-100 to-purple-100"
            style={{
                backgroundImage:
                    "url('https://images.pexels.com/photos/8690443/pexels-photo-8690443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="px-6 py-8">
                <Navbar />

                <motion.h1
                    className="text-4xl font-bold text-center text-white mb-8"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    ✈️ Welcome to ExploreWorld Travel
                </motion.h1>

                <motion.p
                    className="text-center text-white max-w-4xl mx-auto mb-12 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Discover breathtaking places, exclusive offers, trusted achievements, and glowing
                    feedback from our customers. Dive deep into what makes ExploreWorld your perfect travel
                    partner.
                </motion.p>

                <div className="space-y-4">
                    {data.map((section, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                            initial="hidden"
                            animate="visible"
                            custom={idx}
                            variants={containerVariants}
                            whileHover={{ scale: 1.03 }}
                            onClick={() => toggleIndex(idx)}
                        >
                            <div
                                className={`p-5 flex justify-between items-center ${
                                    openIndex === idx ? "bg-blue-50" : "bg-white"
                                }`}
                            >
                                <h2 className="text-xl font-semibold text-blue-900">{section.title}</h2>
                                <span className="text-blue-600 text-2xl select-none">
                                    {openIndex === idx ? "▲" : "▼"}
                                </span>
                            </div>

                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.ul
                                        className="p-5 text-gray-700 list-disc list-inside"
                                        variants={listVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                    >
                                        {section.details.map((detail, didx) => (
                                            <motion.li key={didx} className="mb-2" variants={itemVariants}>
                                                {detail}
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Gallery Section */}
                <div className="mt-16 mb-12">
                    <h3 className="text-2xl font-bold text-center text-blue-800 mb-6">
                        Travel Moments
                    </h3>
                    <div className="flex space-x-4 overflow-x-auto pb-2 px-2">
                        {data.map((section, i) => (
                            <motion.img
                                key={section.title}
                                src={section.images[0]}
                                alt={section.title}
                                className="rounded-lg object-cover h-40 w-60 flex-shrink-0 shadow-md transition-all duration-500"
                                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                whileHover={{
                                    scale: 1.07,
                                    boxShadow: "0 8px 32px rgba(59,130,246,0.25)",
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: i * 0.1,
                                    type: "spring",
                                    stiffness: 80,
                                }}
                                viewport={{ once: true }}
                            />
                        ))}
                    </div>
                </div>

                <motion.p
                    className="text-center text-blue-700 mt-16 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    🌟 Ready to book your next unforgettable trip? Check out our latest deals and let
                    ExploreWorld make it happen!
                </motion.p>
            </div>
        </div>
    );
}
