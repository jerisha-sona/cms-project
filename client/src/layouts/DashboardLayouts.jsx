import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const DOG_PATHS = [
  { path: '/dashboard/intro', text: '📝 Introduction' },
  { path: '/dashboard/portfolio', text: '📝 Portfolio' },
  { path: '/dashboard/travelform', text: '📝 Tickets' },
  { path: '/dashboard/payment', text: '📝 Payment' },
  { path: '/dashboard/profile', text: '📝 Profile' },
  // Remove this line below if dark mode is just a toggle, not a separate route
  // { path: '/dashboard/darkmodetoggle', text: '🌙 ' },
];

export default function DashboardLayout() {
  const location = useLocation();

  return (
    <>
      <div className="flex bg-gray-100">
        <aside className="p-8 w-64 sticky top-0 h-screen bg-gradient-to-b from-sky-700 to-yellow-800 flex flex-col items-center shadow-2xl relative">

          <span className="text-3xl font-extrabold mb-8 text-white tracking-wide mt-12">
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

        <main className="flex-1 min-h-screen overflow-auto">
          <Outlet />
        </main>
      </div>
    </>
  );
}
