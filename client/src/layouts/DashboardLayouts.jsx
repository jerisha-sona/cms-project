import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const DOG_PATHS = [
  { path: '/Intro', text: '📝 Introduction' },
  { path: '/Portfolio', text: '📝 Profile' },
  { path: '/Travelform', text: '📝 form' },

  
];

export default function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="p-8 w-64 sticky top-0 h-screen bg-gradient-to-b from-sky-900 to-wheat-800 flex flex-col items-center shadow-2xl">
        <span className="text-3xl font-extrabold mb-8 text-white tracking-wide">
          Dashboard
        </span>
        <nav className="flex flex-col gap-2 w-full">
          {DOG_PATHS.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`block px-4 py-2 rounded-lg font-medium transition 
                ${
                  location.pathname === item.path
                    ? 'bg-green-600 shadow text-white'
                    : 'hover:bg-teal-700 hover:text-white text-gray-300'
                }`}
            >
              {item.text}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-auto p-10">
        <Outlet />
      </main>
    </div>
  );
}