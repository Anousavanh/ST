import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'; // แก้ path นี้

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20"> {/* เพิ่ม from-blue-600 และเปลี่ยนเป็น text-white */}
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
             WELCOME TO ST GROUP 
          </h1>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
           partners
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* เปลี่ยนเป็น responsive grid */}
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span> {/* เปลี่ยน icon ให้เหมาะสม */}
              </div>
              <h3 className="text-xl font-bold mb-2">Reception</h3>
              <p>20 999 999 99</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏨</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Booking</h3>
              <p>20 999 999 99</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Restaurant</h3>
              <p>20 999 999 99</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧹</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Housekeeping</h3>
              <p>20 999 999 99</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚨</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Emergency</h3>
              <p>20 999 999 99</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">ℹ️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Information</h3>
              <p>20 999 999 99</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;