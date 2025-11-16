import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="About Aus Rental Service" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h1 className="text-4xl font-bold text-primary mb-6">About Aus Rental Service</h1>
            <p className="text-gray-600 mb-4">
              Aus Rental Service is Australia's leading online rental marketplace, dedicated to making the rental 
              process transparent, efficient, and user-friendly for both tenants and property owners.
            </p>
            <p className="text-gray-600 mb-4">
              Founded by a team of real estate professionals and technology experts, we identified a need for 
              a more streamlined rental platform that puts users first. Our mission is to revolutionize how Australians 
              find and manage rental properties.
            </p>
            <p className="text-gray-600 mb-6">
              We're committed to continuous innovation, regularly updating our platform with new features based on 
              user feedback and market trends to ensure we're meeting the evolving needs of the Australian rental market.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
        
        {/* Mission & Vision */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide the most reliable, user-friendly, and comprehensive rental platform in Australia, 
                connecting tenants with their ideal homes while supporting property owners in managing their listings efficiently.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become Australia's most trusted rental marketplace by continuously innovating and adapting to 
                the changing needs of the rental market, ensuring fair and transparent transactions for all users.
              </p>
            </div>
          </div>
        </div>
        
        {/* Values */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-primary mb-3">Trust & Transparency</h3>
              <p className="text-gray-600">
                We believe in building trust through transparent processes and honest communication with all our users.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-primary mb-3">Innovation</h3>
              <p className="text-gray-600">
                Constantly improving our platform with new technologies and features to enhance user experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-primary mb-3">Customer First</h3>
              <p className="text-gray-600">
                Our decisions and features are driven by what's best for our users - tenants and property owners alike.
              </p>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-20 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">50,000+</p>
              <p className="text-gray-600">Properties Listed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">100,000+</p>
              <p className="text-gray-600">Happy Tenants</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">200+</p>
              <p className="text-gray-600">Cities Covered</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">4.8/5</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
