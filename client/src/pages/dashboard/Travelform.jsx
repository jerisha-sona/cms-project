import { useState } from 'react';
import Swal from 'sweetalert2';
import { Menu } from 'lucide-react';

export default function Dashboard() {
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
    <div className="min-h-screen bg-cover bg-center flex" style={{ backgroundImage: "url('https://images.pexels.com/photos/2901212/pexels-photo-2901212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
      {/* Sidebar */}
      <aside className={`bg-blue-700 bg-opacity-90 text-white w-64 space-y-6 py-7 px-4 absolute inset-y-0 left-0 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition duration-200 ease-in-out z-50`}>
        <nav className="space-y-4">
          <a href="#intro" className="block hover:bg-blue-800 p-2 rounded">Intro</a>
          <a href="#form" className="block hover:bg-blue-800 p-2 rounded">Travel Form</a>
          <a href="#portfolio" className="block hover:bg-blue-800 p-2 rounded">Place Portfolio</a>
          <a href="#profile" className="block hover:bg-blue-800 p-2 rounded">Profile</a>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-6 md:ml-64 bg-white bg-opacity-80 backdrop-blur rounded-l-xl">
        <button
          className="md:hidden text-blue-700 mb-4"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu />
        </button>

        <section id="intro" className="text-center my-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Welcome to Your Travel Dashboard</h2>
          <p className="text-lg">Plan your dream trip with ease. Explore, fill out the form, and get going!</p>
        </section>

        <section id="form" className="my-10 max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Travel Form</h2>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input id="name" type="text" placeholder="Full Name" onChange={handleChange} required className="p-3 rounded-lg border border-blue-200" />
            <input id="email" type="email" placeholder="Email" onChange={handleChange} required className="p-3 rounded-lg border border-blue-200" />
            <input id="destination" type="text" placeholder="Destination" onChange={handleChange} required className="p-3 rounded-lg border border-blue-200" />
            <input id="date" type="date" onChange={handleChange} required className="p-3 rounded-lg border border-blue-200" />
            <input id="people" type="number" placeholder="No. of People" onChange={handleChange} required className="p-3 rounded-lg border border-blue-200" />
            <input id="days" type="number" placeholder="No. of Days" onChange={handleChange} required className="p-3 rounded-lg border border-blue-200" />
            <input id="amount" type="number" placeholder="Estimated Amount (₹)" onChange={handleChange} required className="p-3 rounded-lg border border-blue-200" />
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200">Submit</button>
          </form>
        </section>

        <section id="portfolio" className="my-10">
          <h2 className="text-center text-2xl font-semibold text-blue-800 mb-4">Place Portfolio</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Chennai', 'Paris', 'Tokyo'].map((city, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition">
                <h3 className="text-lg font-bold text-blue-700">{city}</h3>
                <p className="text-sm text-gray-600 mt-2">{city === 'Chennai' ? 'Temples, beaches, and vibrant life.' : city === 'Paris' ? 'Eiffel Tower, museums, delicious food.' : 'Technology, cherry blossoms, sushi.'}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="profile" className="my-10 bg-white p-6 max-w-xl mx-auto rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Your Profile</h2>
          <p><strong>Name:</strong> {formData.name || 'N/A'}</p>
          <p><strong>Email:</strong> {formData.email || 'N/A'}</p>
          <p><strong>Destination:</strong> {formData.destination || 'N/A'}</p>
          <p><strong>Travel Date:</strong> {formData.date || 'N/A'}</p>
        </section>
      </div>
    </div>
  );
}
