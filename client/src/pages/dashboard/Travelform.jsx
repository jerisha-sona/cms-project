import { useState } from 'react';
import Swal from 'sweetalert2';
import { Menu } from 'lucide-react';

export default function TravelFormPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    date: '',
    people: '',
    days: '',
    amount: ''
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Success!',
      text: 'Your travel plan has been submitted.',
      icon: 'success',
      confirmButtonText: 'Cool'
    });
    console.log(formData);
  };

  return (
    <div
      className="flex justify-center items-center px-4 bg-cover bg-center min-h-screen relative"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/17946134/pexels-photo-17946134/free-photo-of-commercial-airplane-at-an-airport.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      {/* Form container */}
      <div className=" bg-opacity-90  rounded-xl shadow-lg max-w-md w-full  bg-white/10 backdrop-blur-md p-6 ">
        <h2 className="text-3xl font-bold text-black-800 mb-6 text-center">
          Travel Form
        </h2>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            id="name"
            type="text"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-blue-300"
          />
          <input
            id="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-blue-300"
          />
          <input
            id="from"
            type="text"
            placeholder="From (Starting Point)"
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-blue-300"
          />
          <input
            id="destination"
            type="text"
            placeholder="Destination"
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-blue-300"
          />
          <input
            id="date"
            type="date"
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-blue-300"
          />
          <input
            id="people"
            type="number"
            placeholder="No. of People"
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-blue-300"
          />
          <input
            id="days"
            type="number"
            placeholder="No. of Days"
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-blue-300"
          />
          <input
            id="amount"
            type="number"
            placeholder="Estimated Amount (₹)"
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-blue-300"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
