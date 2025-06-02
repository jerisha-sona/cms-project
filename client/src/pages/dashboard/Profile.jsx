import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const ProfilePage = () => {
  // Initialize default users and currentUser in localStorage if not already set
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    const currentUserEmail = localStorage.getItem("currentUser");

    if (!users) {
      const defaultUsers = [
        {
          username: "Jerisha",
          email: "jerisha@example.com",
          phone: "9876543210",
          password: "mypassword123",
        },
        {
          username: "Alice",
          email: "alice@example.com",
          phone: "1234567890",
          password: "alicepass",
        },
      ];
      localStorage.setItem("users", JSON.stringify(defaultUsers));
      localStorage.setItem("currentUser", "jerisha@example.com");
    }

    if (!currentUserEmail) {
      localStorage.setItem("currentUser", "jerisha@example.com");
    }
  }, []);

  // Load profile of currentUser from users list
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUserEmail = localStorage.getItem("currentUser");
    const currentUser = users.find((u) => u.email === currentUserEmail);

    if (currentUser) {
      setProfile({
        ...currentUser,
        confirmPassword: "",
      });
    }
  }, []);

  // Save updated profile back to localStorage users on change (except confirmPassword)
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUserEmail = localStorage.getItem("currentUser");

    const updatedUsers = users.map((u) =>
      u.email === currentUserEmail
        ? {
            username: profile.username,
            email: profile.email,
            phone: profile.phone,
            password: profile.password,
          }
        : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  }, [profile]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (profile.password !== profile.confirmPassword) {
      Swal.fire("Error", "Passwords do not match", "error");
      return;
    }
    Swal.fire("Success", "Profile updated successfully!", "success");
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-r flex justify-center items-center py-10 px-4"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/31318023/pexels-photo-31318023/free-photo-of-serene-thai-landscape-with-floral-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-10 space-y-8">
        <h1 className="text-4xl font-bold text-blue-800 text-center">Edit Profile</h1>

        <form onSubmit={handleSubmit}>
          {/* Section 1: Personal Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-1000 mb-4 border-b pb-2">
              Personal Information
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 text-sm font-medium">Username</label>
                <input
                  type="text"
                  name="username"
                  value={profile.username}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-blue-500"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-blue-500"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Password */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-1000 mb-4 border-b pb-2">Security</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 text-sm font-medium">New Password</label>
                <input
                  type="password"
                  name="password"
                  value={profile.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-blue-500"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={profile.confirmPassword}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
