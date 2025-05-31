import React from "react";

export default function Home() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat font-sans overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/5707566/pexels-photo-5707566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      {/* Header (same as Contact page) */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-5 z-20">
        <div className="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-blue-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.18 9l-6.39 2.13a1 1 0 00-.02 1.9l6.41 2.13V21a1 1 0 001.64.77l2.36-2.13 4.24 1.41a1 1 0 001.28-1.28l-1.41-4.24 2.13-2.36A1 1 0 0021 13.18V11a1 1 0 00-.77-1.64l-2.13-2.36-4.24-1.41a1 1 0 00-1.28 1.28l1.41 4.24-2.36 2.13A1 1 0 0010.18 9z"
            />
          </svg>
          <span className="text-2xl font-bold text-white">TravelEase</span>
        </div>
        <nav className="flex space-x-6">
          <a href="/home" className="text-white font-semibold hover:text-[#f9b576] transition">Home</a>
          <a href="/login" className="text-white font-semibold hover:text-[#f9b576] transition">Login</a>
          <a href="/signup" className="text-white font-semibold hover:text-[#f9b576] transition">Sign Up</a>
          <a href="/about" className="text-white font-semibold hover:text-[#f9b576] transition">About</a>          
          <a href="/contact" className="text-white font-semibold hover:text-[#f9b576] transition">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-10 pt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10">
          {/* Text Section */}
          <div className="space-y-6 text-white">
            <p className="uppercase tracking-widest text-sm">
              Golden Sunsets | Silk Sheets | Five-Star Journeys.
            </p>
            <h1 className="text-5xl font-extrabold leading-tight">
              Crafting journeys as <br /> unique as you are
            </h1>

            {/* Popular Trips */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Most Popular</h2>
              <div className="grid grid-cols-3 gap-4">
                {[
                  {
                    name: "Trip to Scotland",
                    img: "https://images.pexels.com/photos/39391/landscape-nature-mountains-road-39391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  },
                  {
                    name: "Trip to Egypt",
                    img: "https://images.pexels.com/photos/31667446/pexels-photo-31667446/free-photo-of-majestic-sphinx-of-giza-under-a-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  },
                  {
                    name: "Trip to Greece",
                    img: "https://images.pexels.com/photos/13169749/pexels-photo-13169749.jpeg?auto=compress&cs=tinysrgb&w=600",
                  },
                ].map((trip, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow hover:shadow-2xl transform hover:scale-105 hover:z-10 transition duration-300"
                  >
                    <img
                      src={trip.img}
                      alt={trip.name}
                      className="h-28 w-full object-cover"
                    />
                    <p className="text-center p-2 text-sm font-medium text-orange-600">
                      {trip.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right content for layout symmetry */}
          <div className="hidden md:flex flex-col justify-center text-white space-y-6 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-yellow-100">Plan Your Perfect Getaway</h2>
            <p className="text-lg text-white">
              Discover destinations around the world with our expert travel planners.
              Whether you're looking for a luxury escape, adventure tour, or cultural experience,
              TravelEase crafts personalized itineraries just for you.
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/90">
              <li>Custom Itineraries</li>
              <li>24/7 Travel Assistance</li>
              <li>Handpicked Hotels</li>
              <li>Affordable Packages</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-white mt-10 pb-6">
          © 2025 TravelEase. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
