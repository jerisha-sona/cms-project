import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useAuth } from "../context/AuthContext"; // Adjust path if needed

export default function SignUp() {
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      Swal.fire("Error", "Passwords do not match", "error");
      return;
    }

    try {
 const result = await signUp({
  username: formData.username,
  email: formData.email,
  name: formData.fullName, // 👈 match what AuthContext expects
  phone: formData.phone,
  country: formData.country,
  state: formData.state,
  password: formData.password,
});

      if (!result.success) {
        Swal.fire("Oops!", result.message || "Sign up failed", "error");
      } else {
        Swal.fire({
          title: "Account Created!",
          text: "Redirecting to dashboard...",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          navigate("/dashboard/intro");
        });
      }
    } catch (error) {
      Swal.fire("Error", error.message || "Unexpected error occurred", "error");
    }
  };

  return (
    <div
      className="relative min-h-screen bg-gradient-to-b from-indigo-400 via-purple-500 to-blue-600"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/2739666/pexels-photo-2739666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
          <Link to="/home" className="text-black font-semibold hover:text-purple-300">Home</Link>
          <Link to="/login" className="text-black font-semibold hover:text-purple-300">Login</Link>
          <Link to="/sign-up" className="text-black font-semibold hover:text-purple-300">SignUp</Link>
          <Link to="/about" className="text-black font-semibold hover:text-purple-300">About</Link>
          <Link to="/contact" className="text-black font-semibold hover:text-purple-300">Contact</Link>
        </nav>
      </header>

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
            <h2 className="text-black text-xl font-semibold">Create your account</h2>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {[
              { name: "fullName", type: "text", placeholder: "Full Name" },
              { name: "username", type: "text", placeholder: "Username" },
              { name: "email", type: "email", placeholder: "name@mail.com" },
              { name: "phone", type: "tel", placeholder: "Phone Number", pattern: "[0-9]*", inputMode: "numeric" },
              { name: "country", type: "text", placeholder: "Country" },
              { name: "state", type: "text", placeholder: "State" },
              { name: "password", type: "password", placeholder: "Password" },
              { name: "confirmPassword", type: "password", placeholder: "Confirm Password" },
            ].map(({ name, type, placeholder, ...rest }) => (
              <input
                key={name}
                name={name}
                type={type}
                value={formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                required
                className="w-full px-4 py-2 rounded-full bg-white/20 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-white"
                {...rest}
              />
            ))}

            <button type="submit" className="w-full bg-white text-blue-600 font-semibold py-2 rounded-full shadow hover:bg-blue-100 transition">
              Sign Up
            </button>
          </form>

          <div className="text-center text-black mt-6">
            <p>Already have an account?</p>
            <Link to="/login">
              <button className="mt-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition">
                Login
              </button>
            </Link>
          </div>

          <div className="flex justify-center space-x-4 mt-6 text-black">
            <a href="#" className="hover:text-blue-700"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-700"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-700"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
