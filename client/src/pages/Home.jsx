import React from "react";

export default function Home() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat font-sans overflow-hidden flex items-center justify-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/5707566/pexels-photo-5707566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
    >
      <div className="relative z-10 w-full max-w-7xl px-10">
        {/* Navigation */}
        <div className="flex justify-between items-center py-6">
          
{/* <div className="flex justify-between items-center py-6 px-6 rounded-lg bg-gradient-to-r from-[#e6e6fa]/70 to-[#cce5ff]/70 backdrop-blur-md shadow-lg animate-fadeIn"> */}
  <div className="text-white text-2xl font-bold hover:text-[#5b4fc8]">TravelEase</div>
  <nav className="flex space-x-6 font-semibold">
    <a href="#" className="text-[#0b4b75] hover:text-[#f9b576] transition">Home</a>
    <a href="/about" className="text-[#0b4b75] hover:text-[#f9b576] transition">About</a>
    <a href="/login" className="text-[#0b4b75] hover:text-[#f9b576] transition">Login</a>
    <a href="/sign-up" className="text-[#0b4b75] hover:text-[#f9b576] transition">Sign Up</a>
    <a href="/contact" className="text-[#0b4b75] hover:text-[#f9b576] transition">Contact</a>
    {/* <a href="#" className="bg-[#d0e1ff] text-[#344e9e] px-4 py-2 rounded hover:bg-[#c8d9ff] transition">Explore</a> */}
  </nav>
</div>


        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10">
          {/* Text Section */}
          <div className="space-y-6">
            <p className="uppercase tracking-widest text-sm text-white">Mountains | Plains | Beaches</p>
            <h1 className="text-5xl font-extrabold text-white leading-tight">
              Spend your vacation <br /> with our activities
            </h1>

            {/* Popular Trips */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Most Popular</h2>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: "Trip to Scotland", img: "https://images.pexels.com/photos/39391/landscape-nature-mountains-road-39391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
                  { name: "Trip to Egypt", img: "https://images.pexels.com/photos/31667446/pexels-photo-31667446/free-photo-of-majestic-sphinx-of-giza-under-a-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
                  { name: "Trip to Greece", img: "https://images.pexels.com/photos/13169749/pexels-photo-13169749.jpeg?auto=compress&cs=tinysrgb&w=600" }
                ].map((trip, index) => (
                  <div key={index} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                    <img src={trip.img} alt={trip.name} className="h-28 w-full object-cover" />
                    <p className="text-center p-2 text-sm font-medium text-orange-600">{trip.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Placeholder for layout symmetry */}
          <div className="hidden md:block relative"></div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-white mt-10 pb-6">
          © 2025 TravelEase. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
