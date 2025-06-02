import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Swal from 'sweetalert2';
import AuthContext from '../context/AuthContext'; // Adjust path to your AuthContext

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({
        title: 'Error',
        text: 'Please fill in all fields.',
        icon: 'warning',
      });
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      navigate('/dashboard/intro');
    } catch (error) {
      Swal.fire({
        title: 'Login Failed',
        text: error.message || 'Invalid credentials',
        icon: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative min-h-screen bg-gradient-to-b from-indigo-400 via-purple-500 to-blue-600"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/18146823/pexels-photo-18146823/free-photo-of-barcos-flutuando-na-agua-da-praia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Header */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-transparent">
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
          <Link
            to="/home"
            className="text-black font-semibold hover:text-purple-300 transition"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="text-black font-semibold hover:text-purple-300 transition"
          >
            Login
          </Link>
          <Link
            to="/sign-up"
            className="text-black font-semibold hover:text-purple-300 transition"
          >
            SignUp
          </Link>
          <Link
            to="/about"
            className="text-black font-semibold hover:text-purple-300 transition"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-black font-semibold hover:text-purple-300 transition"
          >
            Contact
          </Link>
        </nav>
      </header>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg mt-16">
          <div className="flex flex-col items-center mb-6">
            <div className="bg-white rounded-full p-4 shadow-lg mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-500"
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
            </div>
            <h2 className="text-black text-xl font-semibold">Welcome back!</h2>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="name@mail.com"
              className="w-full px-4 py-2 rounded-full bg-white/20 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-full bg-white/20 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="flex justify-between items-center text-sm text-black">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="rememberMe" className="accent-black" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full text-blue-600 font-semibold py-2 rounded-full shadow transition ${
                loading
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-white hover:bg-blue-100"
              }`}
            >
              {loading ? (
                <span className="flex justify-center items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                    ></path>
                  </svg>
                  Logging in...
                </span>
              ) : (
                'Login'
              )}
            </button>
          </form>

          <div className="text-center text-black mt-6">
            <p>Not a member yet?</p>
            <Link to="/sign-up">
              <button className="mt-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition">
                Sign up
              </button>
            </Link>
          </div>

          <div className="flex justify-center space-x-4 mt-6 text-black">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
