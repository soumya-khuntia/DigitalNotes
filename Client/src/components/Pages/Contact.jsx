import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  const position = [20.56273, 85.99068]; // Example coordinates (London)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Contact Us</h1>
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
        <div className="w-full lg:w-1/2">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-md" required></textarea>
            </div>
            <button type="submit" className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Send Message</button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto mt-6 lg:mt-0">
          <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                Our Location
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Contact;
