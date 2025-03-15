import React from 'react';
import logo from '../assets/logo.png';
import visualization from '../assets/visualization.jpg';
import { FaChartLine, FaComments, FaUsers, FaInfoCircle, FaRegNewspaper } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-green-700 text-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Bangladesh Reform Tracker Logo" className="h-10 w-10 mr-3" />
            <span className="font-bold text-xl">Bangladesh Reform Tracker</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-green-200 transition">Features</a>
            <a href="#reforms" className="hover:text-green-200 transition">Active Reforms</a>
            <a href="#about" className="hover:text-green-200 transition">About</a>
            <a href="#contact" className="hover:text-green-200 transition">Contact</a>
          </div>
          <div className="flex space-x-4">
            <button className="bg-white text-green-700 px-4 py-2 rounded-md font-medium hover:bg-green-100 transition">Login</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-500 transition">Sign Up</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-green-700 text-white">
        <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-16 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Track Bangladesh's Progress Together</h1>
            <p className="text-xl mb-8">
              Stay informed, engage in discussions, and contribute to Bangladesh's reform journey. Participate in a community dedicated to transparency and progress.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-green-700 hover:bg-green-100 px-6 py-3 rounded-lg font-medium text-lg transition shadow-lg">
                Get Started
              </button>
              <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-medium text-lg transition shadow-lg">
                Explore Reforms
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src={visualization}
              alt="Bangladesh Reform Visualization" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">What You Can Do Here</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaChartLine className="text-green-700 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Track Reform Progress</h3>
              <p className="text-gray-600">
                Monitor the implementation of government reforms with real-time updates and detailed timelines. Set notifications for key milestones.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaComments className="text-green-700 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Join Discussions</h3>
              <p className="text-gray-600">
                Participate in Reddit-style discussions for each reform initiative. Share your perspective and engage with diverse viewpoints.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaUsers className="text-green-700 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Community Engagement</h3>
              <p className="text-gray-600">
                Connect with other citizens concerned about Bangladesh's future. Upvote valuable insights and contribute to constructive dialogue.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;