import { useState } from "react";
import { Menu } from "lucide-react";

const placesData = {
  Paris: {
    title: "Paris, France",
    info: "The city of lights, famous for the Eiffel Tower, Louvre Museum, and charming cafés.",
    img: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    funFact: "Paris has more dogs than kids!",
  },
  Tokyo: {
    title: "Tokyo, Japan",
    info: "A bustling metropolis blending cutting-edge technology with rich tradition.",
    img: "https://images.pexels.com/photos/208733/pexels-photo-208733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    funFact: "Tokyo is the world's largest metropolitan economy.",
  },
  "New York": {
    title: "New York City, USA",
    info: "The city that never sleeps, home to Times Square, Central Park, and Broadway.",
    img: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    funFact: "Over 800 languages are spoken here, more than any other city.",
  },
  Sydney: {
    title: "Sydney, Australia",
    info: "Known for its iconic Opera House, Harbour Bridge, and beautiful beaches.",
    img: "https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    funFact: "Sydney's Bondi Beach is famous worldwide for surfing.",
  },
  Rome: {
    title: "Rome, Italy",
    info: "The Eternal City, full of ancient ruins, stunning architecture, and rich history.",
    img: "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    funFact: "Rome has a museum dedicated to pasta!",
  },
  London: {
    title: "London, UK",
    info: "Famous for Big Ben, the Tower of London, and its vibrant cultural scene.",
    img: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    funFact: "London buses are famously red and double-decker!",
  },
  Cairo: {
    title: "Cairo, Egypt",
    info: "Home to the Pyramids of Giza and the Nile River, full of ancient history.",
    img: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    funFact: "The Great Pyramid of Giza is the oldest of the Seven Wonders of the Ancient World.",
  },
  Rio: {
    title: "Rio de Janeiro, Brazil",
    info: "Famous for its Carnival festival, beaches, and the Christ the Redeemer statue.",
    img: "https://images.pexels.com/photos/1619311/pexels-photo-1619311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    funFact: "Rio’s Carnival is the biggest carnival in the world!",
  },
  Dubai: {
    title: "Dubai, UAE",
    info: "Known for luxury shopping, ultramodern architecture, and the tallest building, Burj Khalifa.",
    img: "https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    funFact: "Dubai’s indoor ski resort is open year-round in the desert.",
  },
  Bali: {
    title: "Bali, Indonesia",
    info: "An island paradise famous for its forested volcanic mountains, beaches, and coral reefs.",
    img: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    funFact: "Bali is known as the 'Island of the Gods'.",
  },
};

export default function Portfolio() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState("Paris");

  const place = placesData[selectedPlace];

  return (
    <div
      className="min-h-screen bg-cover bg-center flex"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/17185735/pexels-photo-17185735/free-photo-of-map-on-globe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      {/* Sidebar */}
      <aside
        className={`bg-opacity-90 text-white w-64 space-y-6 py-7 px-4 absolute inset-y-0 left-0 transform bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition duration-200 ease-in-out z-50`}
      >
        <nav className="space-y-4">
          {Object.keys(placesData).map((placeName) => (
            <button
              key={placeName}
              onClick={() => setSelectedPlace(placeName)}
              className={`block w-full text-left p-2 rounded transition ${
                selectedPlace === placeName
                  ? "bg-blue-900 font-semibold"
                  : "hover:bg-blue-800"
              }`}
            >
              {placeName}
            </button>
          ))}
        </nav>
      </aside>

      {/* Centered Main Content */}
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="bg-white bg-opacity-80 backdrop-blur rounded-xl shadow-xl max-w-4xl w-full p-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            {place.title}
          </h2>
          <img
            src={place.img}
            alt={place.title}
            className="rounded-lg shadow-lg mb-6 mx-auto max-h-96 object-cover"
          />
          <p className="text-lg text-gray-700 mb-4 text-center">{place.info}</p>
          <p className="italic text-blue-800 font-semibold text-center">
            Fun fact: {place.funFact}
          </p>
        </div>
      </div>
    </div>
  );
}
